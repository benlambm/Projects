// nav.js
// Creates the navigation bar that links all 10 pages together.

(function () {
  const pages = [
    { file: "index.html", label: "Intro" },
    { file: "variables.html", label: "Variables" },
    { file: "functions.html", label: "Functions" },
    { file: "conditionals.html", label: "Conditionals" },
    { file: "loops.html", label: "Loops" },
    { file: "arrays.html", label: "Arrays" },
    { file: "objects.html", label: "Objects" },
    { file: "dom.html", label: "DOM" },
    { file: "events.html", label: "Events" },
    { file: "async.html", label: "Async" }
  ];

  function buildNav() {
    const navContainer = document.getElementById("nav");
    if (!navContainer) return;

    const currentPage = location.pathname.split("/").pop();

    const nav = document.createElement("nav");
    nav.className = "site-nav";

    const ul = document.createElement("ul");

    pages.forEach((page) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = page.file;
      a.textContent = page.label;
      if (page.file === currentPage) {
        a.classList.add("active");
      }
      li.appendChild(a);
      ul.appendChild(li);
    });

    nav.appendChild(ul);
    navContainer.appendChild(nav);

    console.log(`🧭 Navigation loaded – you are viewing %c${document.title}%c.`,
      "color: #007bff; font-weight: bold;",
      "color: inherit;");
  }

  document.addEventListener("DOMContentLoaded", buildNav);
})();
