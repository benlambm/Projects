// Battleship Game Logic
document.addEventListener('DOMContentLoaded', () => {
  const BOARD_SIZE = 10;
  const ships = [
    { name: 'Carrier', size: 5 },
    { name: 'Battleship', size: 4 },
    { name: 'Cruiser', size: 3 },
    { name: 'Submarine', size: 3 },
    { name: 'Destroyer', size: 2 }
  ];

  let playerBoard = [];
  let cpuBoard = [];
  let playerShips = [];
  let cpuShips = [];
  let currentShipIndex = 0;
  let currentOrientation = 'horizontal';
  let gamePhase = 'placement';
  let playerTurn = false;
  let lastHover = { coords: [], valid: false };

  const playerBoardEl = document.getElementById('player-board');
  const cpuBoardEl = document.getElementById('cpu-board');
  const messageEl = document.getElementById('message');
  const rotateBtn = document.getElementById('rotate');
  const restartBtn = document.getElementById('restart');

  const playerCells = [];

  // Initialize boards and UI
  function init() {
    for (let y = 0; y < BOARD_SIZE; y++) {
      playerBoard[y] = [];
      cpuBoard[y] = [];
      playerCells[y] = [];
      for (let x = 0; x < BOARD_SIZE; x++) {
        playerBoard[y][x] = 0;
        cpuBoard[y][x] = 0;
        // Player cell
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.x = x;
        cell.dataset.y = y;
        playerBoardEl.appendChild(cell);
        cell.addEventListener('mouseover', handlePlayerHover);
        cell.addEventListener('mouseout', handlePlayerHoverOut);
        cell.addEventListener('click', handlePlayerClick);
        playerCells[y][x] = cell;
        // CPU cell
        const cpuCell = document.createElement('div');
        cpuCell.classList.add('cell');
        cpuCell.dataset.x = x;
        cpuCell.dataset.y = y;
        cpuBoardEl.appendChild(cpuCell);
        cpuCell.addEventListener('click', handleCpuClick);
      }
    }
    placeCpuShips();
    updateMessage(`Place your ${ships[currentShipIndex].name} (size ${ships[currentShipIndex].size})`);
  }

  function updateMessage(text) {
    messageEl.textContent = text;
  }

  function getCoords(x, y, size, orientation) {
    const coords = [];
    for (let i = 0; i < size; i++) {
      const nx = x + (orientation === 'horizontal' ? i : 0);
      const ny = y + (orientation === 'vertical' ? i : 0);
      if (nx < 0 || nx >= BOARD_SIZE || ny < 0 || ny >= BOARD_SIZE) return [];
      coords.push({ x: nx, y: ny });
    }
    return coords;
  }

  function handlePlayerHover(e) {
    if (gamePhase !== 'placement') return;
    const x = +e.target.dataset.x;
    const y = +e.target.dataset.y;
    const { size } = ships[currentShipIndex];
    const coords = getCoords(x, y, size, currentOrientation);
    const valid = coords.length === size && !coords.some(c => playerBoard[c.y][c.x] === 1);
    coords.forEach(c => {
      const cell = playerCells[c.y][c.x];
      cell.classList.add(valid ? 'hover' : 'hover-invalid');
    });
    lastHover = { coords, valid };
  }

  function handlePlayerHoverOut() {
    if (gamePhase !== 'placement') return;
    lastHover.coords.forEach(c => {
      const cell = playerCells[c.y][c.x];
      cell.classList.remove('hover', 'hover-invalid');
    });
    lastHover = { coords: [], valid: false };
  }

  function handlePlayerClick() {
    if (gamePhase !== 'placement' || !lastHover.valid) return;
    // Place ship
    const ship = ships[currentShipIndex];
    const coords = lastHover.coords;
    coords.forEach(c => {
      playerBoard[c.y][c.x] = 1;
      playerCells[c.y][c.x].classList.add('ship');
    });
    playerShips.push({ name: ship.name, size: ship.size, coords: coords, hits: 0 });
    currentShipIndex++;
    handlePlayerHoverOut();
    if (currentShipIndex < ships.length) {
      const next = ships[currentShipIndex];
      updateMessage(`Place your ${next.name} (size ${next.size})`);
    } else {
      // Begin battle
      gamePhase = 'battle';
      playerTurn = true;
      rotateBtn.style.display = 'none';
      cpuBoardEl.classList.remove('disabled');
      updateMessage('Battle start! Your turn.');
    }
  }

  function placeCpuShips() {
    ships.forEach(ship => {
      let placed = false;
      while (!placed) {
        const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        const x = Math.floor(Math.random() * BOARD_SIZE);
        const y = Math.floor(Math.random() * BOARD_SIZE);
        const coords = getCoords(x, y, ship.size, orientation);
        if (coords.length === ship.size && !coords.some(c => cpuBoard[c.y][c.x] === 1)) {
          coords.forEach(c => cpuBoard[c.y][c.x] = 1);
          cpuShips.push({ name: ship.name, size: ship.size, coords: coords, hits: 0 });
          placed = true;
        }
      }
    });
  }

  function handleCpuClick(e) {
    if (gamePhase !== 'battle' || !playerTurn) return;
    const x = +e.target.dataset.x;
    const y = +e.target.dataset.y;
    if (cpuBoard[y][x] > 1) return;
    // Player attack
    let result;
    if (cpuBoard[y][x] === 1) {
      cpuBoard[y][x] = 3;
      e.target.classList.add('hit');
      const ship = cpuShips.find(s => s.coords.some(c => c.x === x && c.y === y));
      ship.hits++;
      if (ship.hits === ship.size) {
        result = `You sank CPU's ${ship.name}!`;
        if (cpuShips.every(s => s.hits === s.size)) return endGame(true);
      } else {
        result = 'Hit!';
      }
    } else {
      cpuBoard[y][x] = 2;
      e.target.classList.add('miss');
      result = 'Miss!';
    }
    playerTurn = false;
    updateMessage(`${result} CPU turn...`);
    setTimeout(cpuTurn, 800);
  }

  function cpuTurn() {
    const avail = [];
    for (let y = 0; y < BOARD_SIZE; y++) {
      for (let x = 0; x < BOARD_SIZE; x++) {
        if (playerBoard[y][x] === 0 || playerBoard[y][x] === 1) avail.push({ x, y });
      }
    }
    const idx = Math.floor(Math.random() * avail.length);
    const { x, y } = avail[idx];
    const cell = playerCells[y][x];
    // CPU attack
    let result;
    if (playerBoard[y][x] === 1) {
      playerBoard[y][x] = 3;
      cell.classList.add('hit');
      const ship = playerShips.find(s => s.coords.some(c => c.x === x && c.y === y));
      ship.hits++;
      if (ship.hits === ship.size) {
        result = `CPU sank your ${ship.name}!`;
        if (playerShips.every(s => s.hits === s.size)) return endGame(false);
      } else {
        result = 'CPU hits!';
      }
    } else {
      playerBoard[y][x] = 2;
      cell.classList.add('miss');
      result = 'CPU missed!';
    }
    updateMessage(result);
    // Return turn to player after a brief pause
    setTimeout(() => {
      playerTurn = true;
      updateMessage('Your turn!');
    }, 800);
  }

  function endGame(playerWon) {
    gamePhase = 'over';
    playerTurn = false;
    cpuBoardEl.classList.add('disabled');
    updateMessage(playerWon ? 'You win! 🎉' : 'You lose! 💀');
  }

  rotateBtn.addEventListener('click', () => {
    currentOrientation = currentOrientation === 'horizontal' ? 'vertical' : 'horizontal';
    rotateBtn.textContent = currentOrientation === 'horizontal' ? 'Rotate ↻' : 'Rotate ↺';
  });

  restartBtn.addEventListener('click', () => location.reload());

  init();
});