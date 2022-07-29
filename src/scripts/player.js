const Player = (oppBoard) => {
  const availableSqaures = [];
  oppBoard.board.forEach((coord) => {
    availableSqaures.push(coord);
  });

  const randomAttack = () => Math.floor(Math.random() * availableSqaures.length);

  const updateAvailableSquares = (attack) => availableSqaures.splice(attack, 1);

  const findInAvailableSquares = (coord) => availableSqaures.indexOf(coord);

  const attackOpponent = (coord, attackNum) => {
    oppBoard.recievedAttack(coord);
    updateAvailableSquares(attackNum);
    return coord;
  };

  const cpuAttack = () => {
    const attackNum = randomAttack();
    const coord = availableSqaures[attackNum];
    attackOpponent(coord, attackNum);
    return coord;
  };

  const playerAttack = (coord) => attackOpponent(coord, findInAvailableSquares(coord));

  const opponentIsDefeated = () => oppBoard.allShipsSunk();

  return {
    attackOpponent,
    availableSqaures,
    randomAttack,
    oppBoard,
    updateAvailableSquares,
    cpuAttack,
    playerAttack,
    opponentIsDefeated,
  };
};

export default Player;
