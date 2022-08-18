const Ship = (length, name, availableCoords, random, selectedPosition) => {
  const hitCount = [];
  const isSunk = () => hitCount.length === length;

  const hit = () => hitCount.push('x');

  const generateRandomHorzPosition = () => {
    let index = Math.floor(Math.random() * 100);
    const position = [];
    for (let i = 0; i < length; i += 1) {
      if ((index % 10 === 0 && i > 0) || index > 99) break;
      position.push(index);
      index += 1;
    }
    return position;
  };

  const generateRandomVertPosition = () => {
    let index = Math.floor(Math.random() * 100);
    const position = [];
    for (let i = 0; i < length; i += 1) {
      if (index > 99) break;
      position.push(index);
      index += 10;
    }
    return position;
  };

  const getPosition = () => {
    const axis = Math.random() * 2;
    let shipPosition = '';
    if (axis <= 1) {
      shipPosition = generateRandomHorzPosition();
    } else {
      shipPosition = generateRandomVertPosition();
    }
    return shipPosition;
  };

  const positionIsAvailable = (test) => test.every((coord) => availableCoords.includes(coord));

  const positionEqualsLength = (shipPosition) => shipPosition.length === length;

  const randomPosition = () => {
    let shipPosition = getPosition();
    while (!positionIsAvailable(shipPosition) || !positionEqualsLength(shipPosition)) {
      shipPosition = getPosition();
    }
    return shipPosition;
  };

  const position = (() => {
    if (random) return randomPosition();
    return selectedPosition;
  })();
  return {
    hit,
    isSunk,
    name,
    length,
    position,
    hitCount,
  };
};

export default Ship;
