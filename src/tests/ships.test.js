import Ship from '../scripts/ships';

describe('let objects increase hit count', () => {
  it('hit count adds one', () => {
    const carrier = Ship(5);
    expect(carrier.hit()).toBe(1);
  });
  it('sunk is true after a killing hit', () => {
    const destroyer = Ship(2);
    destroyer.hit();
    destroyer.hit();
    expect(destroyer.isSunk()).toBe(true);
  });
});
