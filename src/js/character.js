
const arr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Некорректные значения! Name должно быть строкой, длиной более 2 и менее 10 символов');
    } else if (arr.indexOf(type) === -1) {
      throw new Error('Некорректные значения! Нет такого типа персонажа');
    } else {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      if (type === 'Magician' || type === 'Daemon') {
        this.attack = 100;
        this.defence = 40;
      }
      // this.attack = attack;
      // this.defence = defence;
    }
  }
}

// levelUp() {
//   if (this.health > 0) {
//     this.level += 1;
//     this.attack = (this.attack * 0, 2) + this.attack;
//     this.defence = (this.defence * 0, 2) + this.defence;
//     this.health = 100;
//   } else throw new Error('Нельзя повысить левел умершего!');
// }

// damage(points) {
//   if (this.health >= 0) {
//     this.health -= points * (1 - this.defence / 100);
//   } else this.health = 0;
// }
