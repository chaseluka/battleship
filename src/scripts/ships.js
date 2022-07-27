const Ship = (length, coordinates, name, availableCoords) => {
  const hitCount = [];
  const isSunk = () => hitCount.length === length;

  const hit = () => hitCount.push('x');

  const addCoordAtEnd = (...args) => {
    const push = args[0] ? args[1].push(`${args[3]}${args[2]}`) : args[1].push(`${args[2]}${args[3]}`);
    return push;
  };

  const addCoordAtStart = (...args) => {
    const unshift = args[0] ? args[1].unshift(`${args[3]}${args[2]}`) : args[1].unshift(`${args[2]}${args[3]}`);
    return unshift;
  };

  const updatePosition = (start, ...args) => {
    const updatedPosition = start ? addCoordAtStart(...args) : addCoordAtEnd(...args);
    return updatedPosition;
  };

  const generatePosition = (coord1, coord2, vert) => {
    const fixed = coord1[Math.floor(Math.random() * 10)];
    const position = [];
    let goFoward = Math.floor(Math.random() * 10);
    let goBack = goFoward;
    for (let i = 0; i < length; i += 1) {
      const flex = coord2[goFoward];
      goFoward += 1;
      if (flex === undefined) {
        const waningFlex = coord2[(goBack -= 1)];
        updatePosition(true, vert, position, fixed, waningFlex);
      } else updatePosition(false, vert, position, fixed, flex);
    }
    return position;
  };

  const getPosition = () => {
    const axis = Math.random() * 2;
    let shipPosition = '';
    if (axis <= 1) {
      shipPosition = generatePosition(coordinates.xAxis, coordinates.yAxis, false);
    } else {
      shipPosition = generatePosition(coordinates.yAxis, coordinates.xAxis, true);
    }
    return shipPosition;
  };

  const testPosition = (test) => test.every((coord) => availableCoords.includes(coord));

  const position = (() => {
    let shipPosition = getPosition();
    while (!testPosition(shipPosition)) {
      shipPosition = getPosition();
    }
    return shipPosition;
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
