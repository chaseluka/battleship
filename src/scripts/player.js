const Player = (oppBoard) => {
  let previousAttackHit = false;
  const targetShip = []; // keep hit list of targetted ship for intelligent cpu attack
  const oppShips = [5, 4, 3, 3, 2]; // lengths for opponent ships for intelligent cpu attack

  const openSqrs = []; // squares that can be targetted
  for (let i = 0; i < 100; i += 1) {
    openSqrs.push(i);
  }

  const randomAttack = () => Math.floor(Math.random() * openSqrs.length);

  const updateOpenSqrs = (attack) => openSqrs.splice(attack, 1);

  const findInOpenSqrs = (coord) => openSqrs.indexOf(coord);

  const direction = () => {
    if (targetShip[0] - targetShip[1] > -5 && targetShip[0] - targetShip[1] < 5) return true;
    return false;
  };

  // determine if ship is horizontal or vertical after registering two hits on the ship
  const shipHorizontal = () => {
    let horizontal = false;
    if (targetShip.length > 1) horizontal = direction();
    return horizontal;
  };

  // remove from openSqrs both a sunk ships coords and surrounding coords
  const getIndexesOfShip = () => {
    const indexList = [];
    targetShip.forEach((coord) => {
      const indexes = oppBoard.getIndexes(coord);
      indexes.forEach((index) => indexList.push(index));
    });
    return indexList;
  };

  const cleanUpOpenSqrs = () => {
    const toRemove = getIndexesOfShip();
    toRemove.forEach((index) => {
      const coord = findInOpenSqrs(index);
      if (coord !== -1) {
        updateOpenSqrs(coord);
      }
    });
  };

  // hit around coord
  const above = (index) => index - 10;
  const below = (index) => index + 10;
  const left = (index) => index - 1;
  const right = (index) => index + 1;

  // determine location of coord to prevent silly attacks
  // thinking the ship has spilled over the side of the board
  const coordFarLeft = (coord) => coord % 10 === 0;
  const coordFarRight = (coord) => (coord - 9) % 10 === 0;
  const coordAtTop = (coord) => coord < 10;
  const coordAtBottom = (coord) => coord > 89;

  const isShipSunk = () => targetShip.length === oppShips[0];
  // remove from oppShips list
  const sinkShip = () => oppShips.splice(oppShips.indexOf(targetShip.length), 1);

  // intelligent cpu attack. Once a 'hit' is registered, attack sourrounding coords.
  // Upon a second 'hit', determine ship direction and hit directional squares around hit list.
  // repeat for length of largest remaining opponent ship. Note direction will generally go left
  const intelligentAttack = (goBackToFirstHit) => {
    let index = targetShip[0];
    if (targetShip.length > 1 && !goBackToFirstHit) {
      index = targetShip[targetShip.length - 1];
    }
    let attack = '';
    if (isShipSunk()) {
      // if ship is sunk start a random attack and reset logic
      sinkShip();
      cleanUpOpenSqrs();
      attack = openSqrs[randomAttack()];
      previousAttackHit = false;
      targetShip.splice(0, targetShip.length);
    } else if (openSqrs.includes(above(index)) && !coordAtTop(index) && !shipHorizontal()) {
      attack = above(index);
    } else if (openSqrs.includes(below(index)) && !coordAtBottom(index) && !shipHorizontal()) {
      attack = below(index);
    } else if (openSqrs.includes(left(index)) && !coordFarLeft(index)) {
      attack = left(index);
    } else if (openSqrs.includes(right(index)) && !coordFarRight(index)) {
      attack = right(index);
    } else if (attack === '' && index !== targetShip[0] && goBackToFirstHit === false) {
      attack = intelligentAttack(true);
      // if no available moves and targetted ships hit count does not equal largest remianing ship,
      // go to opposite direction. // Generally hits go up/left based on verticality.
      // If unavailable, start over allow going down or right.
    } else if (isShipSunk() || attack === '') {
      // Same as above, but conditionally allow previous conditions to be carried out
      sinkShip();
      cleanUpOpenSqrs();
      attack = openSqrs[randomAttack()];
      previousAttackHit = false;
      targetShip.splice(0, targetShip.length);
    }
    return attack;
  };

  const attackOpponent = (coord, attackIndex) => {
    if (oppBoard.recievedAttack(coord)) {
      previousAttackHit = true;
      targetShip.push(coord);
    }
    updateOpenSqrs(attackIndex);
    return coord;
  };

  const cpuAttack = () => {
    // if previous attack hit, then carry out intelligent attack
    const atkIndex = previousAttackHit ? findInOpenSqrs(intelligentAttack(false)) : randomAttack();
    const coord = openSqrs[atkIndex];
    attackOpponent(coord, atkIndex);
    return coord;
  };

  const playerAttack = (coord) => attackOpponent(coord, findInOpenSqrs(coord));

  const opponentIsDefeated = () => oppBoard.allShipsSunk();

  return {
    attackOpponent,
    openSqrs,
    randomAttack,
    oppBoard,
    updateOpenSqrs,
    cpuAttack,
    playerAttack,
    opponentIsDefeated,
  };
};

export default Player;
