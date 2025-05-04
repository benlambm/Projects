/**
 * Renders (or re‑renders) the full song, then places a form
 * at the very bottom so the user must scroll to change the words.
 */
function singSong(start = 99, beverage = "rootbeer") {
    const container = document.querySelector("#content");
    let stanzaIndex = 0; // used for staggered fade‑in delays
    container.innerHTML = "";                       // wipe any previous run

    // Build everything in memory first (faster than repeated DOM hits)
    const frag = document.createDocumentFragment();

    for (let count = start; count > 0; count--) {
        const word = count === 1 ? "bottle" : "bottles";
        const next = count - 1;
        const nWord = next === 1 ? "bottle" : "bottles";

        const stanza = document.createElement("div");
        stanza.className = "stanza";
        stanza.style.animationDelay = `${stanzaIndex * 0.07}s`;

        stanza.append(
            p(`${count} ${word} of ${beverage} on the wall`),
            p(`${count} ${word} of ${beverage},`),
            p("Take one down, pass it around,"),
            p(
                next > 0
                    ? `${next} ${nWord} of ${beverage} on the wall.`
                    : `No more bottles of ${beverage} on the wall.`
            )
        );

        frag.append(stanza);
        stanzaIndex++;
    }

    /* ---- controls at the very end ---- */
    frag.appendChild(buildForm(start, beverage));

    container.appendChild(frag);
}

/* Tiny helpers ---------------------------------------------------------- */
const p = text => Object.assign(document.createElement("p"), { textContent: text });

function buildForm(start, beverage) {
    const form = document.createElement("form");
    form.id = "controls";
    form.innerHTML = `
      <h2>Sing it again?</h2>
  
      <label>
        Start number:
        <input type="number" name="start" min="1" value="${start}" required>
      </label>
  
      <label>
        Beverage:
        <input type="text" name="beverage" value="${beverage}" required>
      </label>
  
      <button type="submit">Go!</button>
    `;

    form.addEventListener("submit", e => {
        e.preventDefault();

        const { start, beverage } = Object.fromEntries(new FormData(form));
        const newStart = parseInt(start, 10);
        const newBeverage = beverage.trim();

        /* ---- update URL query params without reloading ---- */
        const params = new URLSearchParams(window.location.search);
        params.set("rounds", newStart);
        params.set("beverage", newBeverage);
        history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);

        singSong(newStart, newBeverage);

        // polite UX: jump back to top so they watch the verses stream in
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return form;
}

/* Start immediately once DOM is ready */
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const startParam = parseInt(
        params.get("rounds") || params.get("start") || "99",
        10
    );
    const beverageParam = params.get("beverage") || "rootbeer";

    const validStart = isNaN(startParam) || startParam < 1 ? 99 : startParam;
    singSong(validStart, beverageParam);
});