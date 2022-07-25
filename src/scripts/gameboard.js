import Ship from './ships';

const Gameboard = () => {
  const targettedCoords = [];
  const coordinates = {
    xAxis: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    yAxis: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
  };

  const board = [];

  const generateBoard = () => {
    coordinates.xAxis.forEach((num) => {
      coordinates.yAxis.forEach((letter) => {
        board.push(`${num}${letter}`);
      });
    });
  };
  generateBoard();

  const ships = [Ship(5, coordinates, 'carrier'), Ship(4, coordinates, 'battleship')];

  const recievedAttack = (coord) => {
    targettedCoords.push(coord);
    ships.forEach((ship) => {
      if (ship.position.includes(coord)) {
        ship.hit();
      }
    });
  };

  const allShipsSunk = () => ships.every((ship) => ship.isSunk());

  return {
    coordinates,
    recievedAttack,
    ships,
    targettedCoords,
    allShipsSunk,
    board,
  };
};

export default Gameboard;
