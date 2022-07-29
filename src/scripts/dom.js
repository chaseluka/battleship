const Dom = (playerBoard, player, opponent, oppDom) => {
  const board = [];
  let playerTurn = true;

  const determineCoords = (e) => {
    const index = e.target.getAttribute('data-index');
    const coord = playerBoard.board[index];
    return coord;
  };

  const displayHit = (index) => {
    board[index].classList.add('hit');
  };

  const displayMiss = (index) => {
    board[index].classList.add('miss');
  };

  const markChosenCoordOnBoard = (coord) => {
    playerBoard.ships.forEach((ship) => {
      const index = playerBoard.board.indexOf(coord);
      if (ship.position.includes(coord)) displayHit(index);
      displayMiss(index);
    });
  };

  const togglePlayerTurn = () => {
    const swtich = playerTurn ? (playerTurn = false) : (playerTurn = true);
    return swtich;
  };

  const announceWinner = (winner) => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    const title = document.querySelector('.overlay-title');
    title.textContent = `${winner} won`;
  };

  const isPlayerDefeated = () => player.opponentIsDefeated();

  const isCPUDefeated = () => opponent.opponentIsDefeated();

  const displayCPUAttack = () => {
    setTimeout(() => {
      const coord = player.cpuAttack();
      oppDom.markChosenCoordOnBoard(coord);
      if (isPlayerDefeated()) announceWinner('CPU');
      else togglePlayerTurn();
    }, 1);
  };

  const selectedAttack = (e) => {
    if (!playerTurn) e.preventDefault();
    else {
      const coord = determineCoords(e);
      opponent.playerAttack(coord);
      togglePlayerTurn();
      markChosenCoordOnBoard(coord);
      e.target.removeEventListener('click', selectedAttack);
      if (isCPUDefeated()) announceWinner('You');
      else displayCPUAttack();
    }
  };

  const generateGrid = (user) => {
    const grid = document.getElementById(`${user}`);

    for (let i = 0; i < 100; i += 1) {
      const div = document.createElement('div');
      div.classList.add('grid-item');
      grid.appendChild(div);
      if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(i)) div.classList.add('top');
      if ([0, 10, 20, 30, 40, 50, 60, 70, 80, 90].includes(i)) div.classList.add('left');
      if ([9, 19, 29, 39, 49, 59, 69, 79, 89, 99].includes(i)) div.classList.add('right');
      if ([90, 91, 92, 93, 94, 95, 96, 97, 98, 99].includes(i)) div.classList.add('bottom');
      div.setAttribute('data-index', `${i}`);
      board.push(div);
      div.addEventListener('click', selectedAttack);
    }
  };

  const markUserCoordOnBoard = (index) => {
    board[index].classList.add('ship');
  };

  const markShipOnBoard = (ship) => {
    ship.position.forEach((coord) => {
      markUserCoordOnBoard(playerBoard.board.indexOf(coord));
    });
  };

  const displayShips = () => {
    playerBoard.ships.forEach((ship) => {
      markShipOnBoard(ship);
    });
  };

  return { generateGrid, displayShips, markChosenCoordOnBoard };
};

export default Dom;
