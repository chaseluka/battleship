/* eslint-disable jest/no-disabled-tests */
import Gameboard from '../scripts/gameboard';

describe('Test generating positon', () => {
  it('get position of ship', () => {
    const player = Gameboard();
    expect(player.ships.carrier.position).toHaveLength(5);
  });
  it('position returns an array', () => {
    const player = Gameboard();
    expect(player.ships.carrier.position).toBeInstanceOf(Array);
  });
  it('ships is an object', () => {
    const player = Gameboard();
    expect(player.ships).toBeInstanceOf(Object);
  });
});
test('include works', () => {
  const player = Gameboard();
  const thisTarget = player.ships.carrier.position[2];
  expect(player.ships.carrier.position.includes(thisTarget)).toBe(true);
});
test('attack hits a ships position', () => {
  const player = Gameboard();
  const thisTarget = player.ships.carrier.position[1];
  expect(player.recievedAttack(thisTarget)).toBe(1);
});
test('declared attack hits a ships position', () => {
  const player = Gameboard();
  const thisTarget = player.ships.carrier.position[1];
  expect(player.recievedAttack(thisTarget)).toBe(1);
});
test('attacked list grows after every recieved attack', () => {
  const player = Gameboard();
  const thisTarget = player.ships.carrier.position[1];
  player.recievedAttack(thisTarget);
  player.recievedAttack(thisTarget);
  expect(player.targettedCoords).toHaveLength(2);
});
