#!/usr/bin/env node

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Numerals {
  constructor(numerals = []) {
    this.numerals = [...numerals];
  }

  randomIndex() {
    if (this.numerals.length === 0) {
      return -1;
    }

    const randomIndex = randomIntFromInterval(0, this.numerals.length);

    return this.numerals[randomIndex] === undefined
      ? this.randomIndex()
      : randomIndex;
  }

  randomPop() {
    const randomIndex = this.randomIndex();

    if (randomIndex === -1) {
      return -1;
    }

    const numeral = this.numerals.splice(randomIndex, 1)[0];

    return numeral === undefined ? this.randomPop() : numeral;
  }
}

class Letters {
  constructor(
    _letters = {
      S: undefined,
      E: undefined,
      N: undefined,
      D: undefined,
      M: undefined,
      O: undefined,
      R: undefined,
      E: undefined,
      Y: undefined,
    }
  ) {
    this.S = _letters.S;
    this.E = _letters.E;
    this.N = _letters.N;
    this.D = _letters.D;
    this.M = _letters.M;
    this.O = _letters.O;
    this.R = _letters.R;
    this.E = _letters.E;
    this.Y = _letters.Y;
  }
}

(() => {
  let attempts = 0;
  let run = true;

  do {
    attempts++;

    const numerals = new Numerals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const letters = new Letters({
      S: numerals.randomPop(),
      E: numerals.randomPop(),
      N: numerals.randomPop(),
      D: numerals.randomPop(),
      M: numerals.randomPop(),
      O: numerals.randomPop(),
      R: numerals.randomPop(),
      Y: numerals.randomPop(),
    });

    const send = [letters.S, letters.E, letters.N, letters.D];
    const more = [letters.M, letters.O, letters.R, letters.E];
    const money = [letters.M, letters.O, letters.N, letters.E, letters.Y];

    console.log(`\n **** Tentativa: ${attempts} ****`, { send, more, money });

    try {
      if (money[0] < 1) {
        throw new Error("M tem que ser MAIOR ou IGUAL a 1");
      }

      const _sum1 = `${send[3] + more[3]}`.split("").reverse();

      if (money[4] !== parseInt(_sum1[0])) {
        throw new Error("Y tem que ser a unidade resultante de D + E");
      }

      const _sum2 = `${send[2] + more[2] + parseInt(_sum1[1] ?? 0)}`
        .split("")
        .reverse();

      if (money[3] !== parseInt(_sum2[0])) {
        throw new Error(
          "E tem que ser a unidade resultante de N + R ?(+ dezena de D + E)"
        );
      }

      const _sum3 = `${send[1] + more[1] + parseInt(_sum2[1] ?? 0)}`
        .split("")
        .reverse();

      if (money[2] !== parseInt(_sum3[0])) {
        throw new Error(
          "N tem que ser a unidade resultante de E + O ?(+ dezena de N + R)"
        );
      }

      const _sum4 = `${send[0] + more[0] + parseInt(_sum3[1] ?? 0)}`
        .split("")
        .reverse();

      if (money[1] !== parseInt(_sum4[0])) {
        throw new Error(
          "O tem que ser a unidade resultante de S + M ?(+ dezena de E + O)"
        );
      }

      if (money[0] !== parseInt(_sum4[1])) {
        throw new Error("M tem que ser a dezena resultante de S + M");
      }

      console.log(
        `\n
        Resultado:\n
           SEND:   ${send.join("")}\n
           MORE:   ${more.join("")}\n
                  _____\n
           MONEY: ${money.join("")}`
      );
      run = false;
    } catch (error) {
      console.error("\n -- Erro: ", error.message);
    }
  } while (run);
})();
