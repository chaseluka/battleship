import Ship from './ships';

const Gameboard = () => {
  const targettedCoords = [];
  const coordinates = (() => {
    const xAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const yAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    return { xAxis, yAxis };
  })();

  const ships = (() => {
    const carrier = Ship(5, coordinates);
    const battleship = Ship(4, coordinates);
    const cruiser = Ship(3, coordinates);
    const submarine = Ship(3, coordinates);
    const destroyer = Ship(2, coordinates);
    return {
      carrier,
      battleship,
      cruiser,
      submarine,
      destroyer,
    };
  })();

  const recievedAttack = (coord) => {
    /* const carrier = ships.carrier.position;
    const battleship = ships.battleship.position;
    const cruiser = ships.cruiser.position;
    const submarine = ships.submarine.position;
    const destroyer = ships.destroyer.position;
    if (carrier.includes(coord)) carrier.hit();
    if (battleship.includes(coord)) battleship.hit();
    if (cruiser.includes(coord)) cruiser.hit();
    if (submarine.includes(coord)) submarine.hit();
    if (destroyer.includes(coord)) destroyer.hit(); */
    Object.getOwnPropertyNames(ships).filter((ship) => {
      if (ship.position.includes(coord)) {
        ship.hit();
      }
      return targettedCoords.push(coord);
    });
  };

  return {
    coordinates,
    recievedAttack,
    ships,
    targettedCoords,
  };
};

export default Gameboard;
