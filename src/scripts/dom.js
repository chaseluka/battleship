/* eslint-disable operator-linebreak */
const Dom = (playerBoard, player, opponent, oppDom, isPlayer) => {
  const board = [];
  let playerTurn = true;
  let draggedShipLength = 0;
  let isVertical = false;
  let dropped = '';
  const position = [];
  const shipsPlaced = [];

  const determineCoords = (e) => {
    const index = e.target.getAttribute('data-index');
    return index;
  };

  const displayHit = (index) => {
    board[index].style.backgroundColor = '#ff0000';
  };

  const displayMiss = (index) => {
    board[index].style.backgroundColor = '#999';
  };

  const hitMisses = (coord) => playerBoard.ships.every((ship) => !ship.position.includes(coord));

  const markChosenCoordOnBoard = (coord) => {
    if (hitMisses(coord)) displayMiss(coord);
    else displayHit(coord);
  };

  const togglePlayerTurn = () => {
    playerTurn = !playerTurn;
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
    // pause for dramatic effect
    setTimeout(() => {
      const coord = player.cpuAttack();
      oppDom.markChosenCoordOnBoard(coord);
      if (isPlayerDefeated()) announceWinner('CPU');
      else togglePlayerTurn();
    }, 1000);
  };

  const selectedAttack = (e) => {
    if (!playerTurn) e.preventDefault();
    else {
      const coord = parseInt(determineCoords(e), 10);
      opponent.playerAttack(coord);
      togglePlayerTurn();
      markChosenCoordOnBoard(coord);
      e.target.removeEventListener('click', selectedAttack);
      if (isCPUDefeated()) announceWinner('You');
      else displayCPUAttack();
    }
  };

  const changeGridHorz = () => {
    const shipsGrid = document.querySelector('.ships');
    shipsGrid.style.gridTemplate = 'repeat(3, 1fr) / repeat(2, 1fr)';
  };

  const changeGridVert = () => {
    const shipsGrid = document.querySelector('.ships');
    shipsGrid.style.gridTemplate = 'repeat(2, 1fr) / repeat(3, 1fr)';
  };
  // rotate display of draggable ships for user experience
  const rotateDisplay = () => {
    const ships = document.querySelectorAll('.drag-item');
    ships.forEach((ship) => {
      if (!isVertical) {
        changeGridHorz();
        ship.classList.add('horizontal');
        ship.classList.remove('vertical');
      } else {
        changeGridVert();
        ship.classList.add('vertical');
        ship.classList.remove('horizontal');
      }
    });
  };

  const rotate = () => {
    isVertical = !isVertical;
    rotateDisplay();
  };

  document.getElementById('rotate').addEventListener('click', rotate); // button for changing drag ships rotation

  const unavailableCoord = (index) => !playerBoard.availableCoords.includes(index);

  const dragOffEdge = (index) => index > 99;

  const unavailableDrag = (index) => dragOffEdge(index) || unavailableCoord(index);
  // start at an index and display length of ship on grid down if vertical, and up if horizontal
  const displayDragHorz = (index, color) => {
    const toggleColor = color ? '#999' : '#444'; // on drop show dark background, on drag show light
    position.splice(0, position.length);
    for (let i = 0; i < draggedShipLength; i += 1) {
      const nextIndex = index + i;
      // prevent display on unavailable squares
      if ((nextIndex % 10 === 0 && i > 0) || unavailableDrag(nextIndex)) break;
      position.push(nextIndex);
      board[nextIndex].style.backgroundColor = toggleColor;
    }
  };

  const displayDragVert = (index, color) => {
    const toggleColor = color ? '#999' : '#444'; //* comments above
    position.splice(0, position.length);
    for (let i = 0; i < draggedShipLength; i += 1) {
      const nextIndex = index + i * 10;
      if (unavailableCoord(nextIndex)) break;
      position.push(nextIndex);
      board[nextIndex].style.backgroundColor = toggleColor;
    }
  };
  // same as display, except it removes the display once the ship has left an index
  const removeDisplayDragHorz = (index) => {
    for (let i = 0; i < draggedShipLength; i += 1) {
      const nextIndex = index + i;
      if ((nextIndex % 10 === 0 && i > 0) || unavailableDrag(nextIndex)) break;
      board[nextIndex].style.backgroundColor = '#fff';
    }
  };

  const removeDisplayDragVert = (index) => {
    for (let i = 0; i < draggedShipLength; i += 1) {
      const nextIndex = index + i * 10;
      if (unavailableCoord(nextIndex)) break;
      board[nextIndex].style.backgroundColor = '#fff';
    }
  };

  const displayDrag = (index, color) => {
    if (!isVertical) displayDragHorz(index, color);
    else displayDragVert(index, color);
  };

  const removeDisplayDrag = (index) => {
    if (!isVertical) removeDisplayDragHorz(index);
    else removeDisplayDragVert(index);
  };

  const newShipOnDrop = (thisPosition) => {
    const shipsPosition = [];
    thisPosition.forEach((index) => shipsPosition.push(index));
    playerBoard.createShip(
      draggedShipLength, //
      dropped.id,
      playerBoard.availableCoords,
      false,
      shipsPosition,
    );
  };

  const addShipToPlacedList = () => {
    // determines when game is ready to 'start'
    shipsPlaced.push('1');
  };

  const addClickableSquares = () => board.forEach((div) => div.addEventListener('click', selectedAttack));

  const dragEventListeners = (div, i) => {
    div.addEventListener('dragenter', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
      setTimeout(() => {
        displayDrag(i, true);
      }, 0.01);
    });
    div.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    div.addEventListener('dragleave', () => {
      removeDisplayDrag(i);
    });
    // eslint-disable-next-line no-loop-func
    div.addEventListener('drop', () => {
      removeDisplayDrag(i);
      if (draggedShipLength !== position.length) return;
      displayDrag(i, false);
      dropped.classList.add('dropped');
      dropped.setAttribute('draggable', 'false');
      newShipOnDrop(position);
      addShipToPlacedList();
    });
  };

  const startGame = () => {
    // allow cpu board to be clicked on when ships all placed
    const startBtn = document.getElementById('start');
    startBtn.addEventListener('click', (e) => {
      if (oppDom.shipsPlaced.length === 5) addClickableSquares();
      else e.preventDefault();
    });
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
      if (isPlayer) dragEventListeners(div, i);
    }
  };

  const drag = (e) => {
    e.target.classList.add('dragging');
    draggedShipLength = e.target.children.length;
    dropped = e.target;
  };

  const createDragShips = () => {
    const ships = document.querySelectorAll('.drag-item');

    ships.forEach((ship) => {
      ship.addEventListener('dragstart', (e) => {
        drag(e);
      });
      ship.addEventListener('dragend', () => {
        ship.classList.remove('dragging');
      });
    });
  };

  return {
    generateGrid,
    markChosenCoordOnBoard,
    createDragShips,
    startGame,
    shipsPlaced,
  };
};

export default Dom;
