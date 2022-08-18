/* eslint-disable operator-linebreak */
const Dom = (playerBoard, player, opponent, oppDom) => {
  const board = [];
  let playerTurn = true;
  let draggedShipLength = 0;
  let isVertical = false;
  let dropped = '';
  const position = [];

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

  document.getElementById('rotate').addEventListener('click', rotate);

  const unavailableCoord = (index) => !playerBoard.availableCoords.includes(index);

  const dragOffEdge = (index) => index > 99;

  const unavailableDrag = (index) => dragOffEdge(index) || unavailableCoord(index);

  const displayDragHorz = (index, color) => {
    const toggleColor = color ? '#999' : '#444';
    position.splice(0, position.length);
    for (let i = 0; i < draggedShipLength; i += 1) {
      const nextIndex = index + i;
      if ((nextIndex % 10 === 0 && i > 0) || unavailableDrag(nextIndex)) break;
      position.push(nextIndex);
      board[nextIndex].style.backgroundColor = toggleColor;
    }
  };

  const displayDragVert = (index, color) => {
    const toggleColor = color ? '#999' : '#444';
    position.splice(0, position.length);
    for (let i = 0; i < draggedShipLength; i += 1) {
      const nextIndex = index + i * 10;
      if (unavailableCoord(nextIndex)) break;
      position.push(nextIndex);
      board[nextIndex].style.backgroundColor = toggleColor;
    }
  };

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
      });
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
  };
};

export default Dom;
