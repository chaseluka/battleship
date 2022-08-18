const Player = (oppBoard) => {
  const availableSquares = [];
  for (let i = 0; i < 100; i += 1) {
    availableSquares.push(i);
  }

  const randomAttack = () => Math.floor(Math.random() * availableSquares.length);

  const updateAvailableSquares = (attack) => availableSquares.splice(attack, 1);

  const findInAvailableSquares = (coord) => availableSquares.indexOf(coord);

  const attackOpponent = (coord, attackNum) => {
    oppBoard.recievedAttack(coord);
    updateAvailableSquares(attackNum);
    return coord;
  };

  const cpuAttack = () => {
    const attackNum = randomAttack();
    const coord = availableSquares[attackNum];
    attackOpponent(coord, attackNum);
    return coord;
  };

  const playerAttack = (coord) => attackOpponent(coord, findInAvailableSquares(coord));

  const opponentIsDefeated = () => oppBoard.allShipsSunk();

  return {
    attackOpponent,
    availableSquares,
    randomAttack,
    oppBoard,
    updateAvailableSquares,
    cpuAttack,
    playerAttack,
    opponentIsDefeated,
  };
};

export default Player;
