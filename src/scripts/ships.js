const Ship = (length, coordinates) => {
  let hitCount = 0;
  const isSunk = () => hitCount === length || hitCount !== length;
  const hit = () => {
    hitCount += 1;
    return hitCount;
  };
  const generatePosition = (coord1, coord2) => {
    const fixed = coord1[Math.floor(Math.random() * 10)];
    const position = [];
    let randomStartIndex = Math.floor(Math.random() * 10);
    let backwardsStart = randomStartIndex;
    for (let i = 0; i < length; i += 1) {
      const nextLetter = coord2[randomStartIndex];
      randomStartIndex += 1;
      if (nextLetter === undefined) {
        const backwardsLetter = coord2[(backwardsStart -= 1)];
        position.unshift(`${fixed}${backwardsLetter}`);
      } else position.push(`${fixed}${nextLetter}`);
    }
    return position;
  };
  const position = (() => {
    const axis = Math.random() * 2;
    let shipPosition = '';
    if (axis <= 1) {
      shipPosition = generatePosition(coordinates.xAxis, coordinates.yAxis);
    } else {
      shipPosition = generatePosition(coordinates.yAxis, coordinates.xAxis);
    }
    return shipPosition;
  })();
  return {
    hit,
    isSunk,
    position,
    hitCount,
  };
};

export default Ship;
