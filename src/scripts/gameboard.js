import Ship from './ships';

const Gameboard = (isCpu) => {
  const targettedCoords = [];
  const board = [];
  const availableCoords = [];

  const generateBoard = (thisBoard) => {
    for (let i = 0; i < 100; i += 1) {
      thisBoard.push(i);
    }
  };
  generateBoard(board);
  generateBoard(availableCoords);

  const ships = [];

  const getIndexes = (coordIndex) => {
    const topLeft = coordIndex + -11;
    const top = coordIndex + -10;
    const topRight = coordIndex + -9;
    const left = coordIndex + -1;
    const right = coordIndex + 1;
    const bottomLeft = coordIndex + 9;
    const bottom = coordIndex + 10;
    const bottomRight = coordIndex + 11;

    const coordsToRemove = [topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight];
    return coordsToRemove;
  };

  const removeTouchingCoords = (coord) => {
    const indexList = getIndexes(coord);
    indexList.forEach((index) => {
      if (availableCoords.includes(index)) {
        availableCoords.splice(availableCoords.indexOf(index), 1);
      }
    });
  };

  const clearCoordsAroundShip = (ship) => {
    ship.position.forEach((coord) => {
      removeTouchingCoords(coord);
    });
  };

  const removeFromAvailableCoords = (ship) => {
    ship.position.forEach((coord) => {
      availableCoords.splice(availableCoords.indexOf(coord), 1);
    });
  };

  const createShip = (...info) => {
    const newShip = Ship(info[0], info[1], info[2], info[3], info[4]);
    ships.push(newShip);
    removeFromAvailableCoords(newShip);
    clearCoordsAroundShip(newShip);
  };

  const recievedAttack = (coord) => {
    targettedCoords.push(coord);
    ships.forEach((ship) => {
      if (ship.position.includes(coord)) {
        ship.hit();
      }
    });
  };

  const allShipsSunk = () => ships.every((ship) => ship.isSunk());

  const createRandomlyPositionedShips = () => {
    createShip(5, 'carrier', availableCoords, true);
    createShip(4, 'battleship', availableCoords, true);
    createShip(3, 'cruiser', availableCoords, true);
    createShip(3, 'submarine', availableCoords, true);
    createShip(2, 'destroyer', availableCoords, true);
  };

  const createFleet = () => isCpu && createRandomlyPositionedShips();
  createFleet();

  return {
    recievedAttack,
    ships,
    targettedCoords,
    allShipsSunk,
    board,
    availableCoords,
    createShip,
  };
};

export default Gameboard;
