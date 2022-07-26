import Ship from '../scripts/ships';
// null. Tests in gameboard.test.js
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
  it('sunk is false before a killing hit', () => {
    const destroyer = Ship(4);
    destroyer.hit();
    destroyer.hit();
    expect(destroyer.isSunk()).toBe(false);
  });
});
