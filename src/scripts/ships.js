const Ship = (length) => {
  let hitCount = 0;
  let sunk = false;
  const isSunk = () => {
    if (hitCount === length) {
      sunk = true;
    }
    return sunk;
  };

  const hit = () => {
    hitCount += 1;
    isSunk();
    return hitCount;
  };

  return { hit, isSunk };
};

export default Ship;
