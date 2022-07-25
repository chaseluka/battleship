/* eslint-disable jest/no-disabled-tests */
import Gameboard from '../scripts/gameboard';

describe('Test generating positon', () => {
  it('get position of ship', () => {
    const player = Gameboard();
    const here = player.ships[1].position;
    expect(player.ships[1].position).toBe(here);
  });
});
test('ships array lets me get name', () => {
  const player = Gameboard();
  expect(player.ships[0].name).toBe('carrier');
});
describe('Attacking tests', () => {
  it('attack hits', () => {
    const player = Gameboard();
    player.ships[1].hit();
    expect(player.ships[1].hitCount).toHaveLength(1);
  });
  it('declared attack hits a ships position', () => {
    const player = Gameboard();
    const thisTarget = player.ships[1].position[1];
    player.recievedAttack(thisTarget);
    expect(player.ships[1].hitCount).toHaveLength(1);
  });
  it('attacked list grows after every recieved attack', () => {
    const player = Gameboard();
    const thisTarget = player.ships[1].position[1];
    player.recievedAttack(thisTarget);
    player.recievedAttack(thisTarget);
    expect(player.targettedCoords).toHaveLength(2);
  });
  it('a ship is sunk', () => {
    const player = Gameboard();
    player.ships[1].hit();
    player.ships[1].hit();
    player.ships[1].hit();
    player.ships[1].hit();
    expect(player.ships[1].isSunk()).toBe(true);
  });
  it('all ships are sunk', () => {
    const player = Gameboard();
    player.ships.forEach((ship) => {
      const index = player.ships.indexOf(ship);
      for (let i = 0; i < player.ships[index].length; i += 1) {
        player.ships[index].hit();
      }
    });
    expect(player.allShipsSunk()).toBe(true);
  });
  it('all ships are not sunk', () => {
    const player = Gameboard();
    expect(player.allShipsSunk()).toBe(false);
  });
  it('ship recieves attacks until its sunk', () => {
    const player = Gameboard();
    const arr = player.ships[1].position;
    arr.forEach((coord) => {
      player.recievedAttack(coord);
    });
    expect(player.ships[1].isSunk()).toBe(true);
  });
});

test('get full board', () => {
  const player = Gameboard();
  expect(player.board).toHaveLength(100);
});
