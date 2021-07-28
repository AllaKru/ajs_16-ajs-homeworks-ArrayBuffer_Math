/* eslint-disable no-new */
import Character from '../character';

test('работа character - выброс ошибки', () => {
  expect(() => { new Character('O', 'Bowman'); }).toThrowError();
});
test('работа character - выброс ошибкт во втором случае', () => {
  expect(() => { new Character('Flex', 'Demon'); }).toThrowError();
});
test('работа character ', () => {
  const demon1 = new Character('Oly', 'Daemon');
  expect(demon1).toEqual({
    attack: 100,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Oly',
    type: 'Daemon',

  });
});
test('работа character ', () => {
  const mag1 = new Character('Oly', 'Zombie');
  expect(mag1).toEqual({

    health: 100,
    level: 1,
    name: 'Oly',
    type: 'Zombie',

  });
});
