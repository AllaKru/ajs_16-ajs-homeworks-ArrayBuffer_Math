
import MathChar from '../MathChar';


const demon = new MathChar('Oleg', 'Daemon');
const mag = new MathChar('Lora', 'Magician');

test('работа attack', () => {
  expect(demon.attack).toBe(100);
});
test('работа attack', () => {
  mag.attack = 9;
  mag.distance = 3;
  // mag.stoned = false;
  expect(mag.attack).toBe(7);
});
test('работа stoned', () => {
  mag.attack = 9;
  mag.distance = 3;
  mag.stoned = true;
  expect(mag.attack).toBe(0);
});
test('работа stoned', () => {
  mag.attack = 9;
  mag.distance = 3;
  mag.stoned = true;
  expect(mag.stoned).toBeTruthy();
});

test('создание объкта', () => {
  const demon1 = new MathChar('Oly', 'Daemon');
  expect(demon1).toEqual({
    attacked: 100,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Oly',
    type: 'Daemon',
    distance: 1,
    stone: false,
  });
});
