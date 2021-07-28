
import Character from './character';

export default class MathChar extends Character {
  constructor(name, type) {
    super(name, type);
    this.stone = false;
    this.distance = 1;
  }

  set stoned(value) { // записывает значение
    this.stone = value;
  }

  get stoned() { // возвращает значение
    return this.stone;
  }

  set attack(value) {
    this.attacked = value;
  }

  get attack() {
    //  let baseattack = this.attacked * (1.1 - this.distance * 10 / 100);
    let baseattack = this.attacked - this.attacked * (this.distance - 1) * 0.1;

    if (this.stone) {
      baseattack -= Math.log2(this.distance) * 5;
    }
    return baseattack > 0 ? Math.round(baseattack) : 0;
  }
}
