import Ship from './ships';

const Gameboard = () => {
  const targettedCoords = [];
  const board = [];
  const availableCoords = [];

  const coordinates = {
    xAxis: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    yAxis: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
  };

  const generateBoard = (thisBoard) => {
    coordinates.xAxis.forEach((num) => {
      coordinates.yAxis.forEach((letter) => {
        thisBoard.push(`${num}${letter}`);
      });
    });
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
    const coordIndex = board.indexOf(coord);
    const indexList = getIndexes(coordIndex);
    indexList.forEach((index) => {
      const deleteCoord = board[index];
      if (availableCoords.includes(deleteCoord)) {
        availableCoords.splice(availableCoords.indexOf(deleteCoord), 1);
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
    const newShip = Ship(info[0], info[1], info[2], info[3]);
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

  createShip(5, coordinates, 'carrier', availableCoords);
  createShip(4, coordinates, 'battleship', availableCoords);
  createShip(3, coordinates, 'cruiser', availableCoords);
  createShip(3, coordinates, 'submarine', availableCoords);
  createShip(2, coordinates, 'destroyer', availableCoords);

  return {
    coordinates,
    recievedAttack,
    ships,
    targettedCoords,
    allShipsSunk,
    board,
    availableCoords,
  };
};

export default Gameboard;
