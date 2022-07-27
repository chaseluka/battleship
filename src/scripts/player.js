const Player = (oppBoard) => {
  const availableSqaures = [];
  oppBoard.board.forEach((coord) => {
    availableSqaures.push(coord);
  });

  const randomAttack = () => {
    const attack = Math.floor(Math.random() * availableSqaures.length);
    return attack;
  };

  const updateAvailableSquares = (attack) => {
    availableSqaures.splice(attack, 1);
  };

  const attackOpponent = () => {
    const attackNum = randomAttack();
    const coord = availableSqaures[attackNum];
    oppBoard.recievedAttack(coord);
    updateAvailableSquares(attackNum);
    return coord;
  };

  return {
    attackOpponent,
    availableSqaures,
    randomAttack,
    oppBoard,
    updateAvailableSquares,
  };
};

export default Player;
