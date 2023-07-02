#!/usr/bin/env node

const numbers = 9;

console.time("-- SEND+MORE=MONEY");

let attempts = 0;

for (let M = 0; M <= numbers; M++) {
  for (let O = 0; O <= numbers; O++) {
    for (let N = 0; N <= numbers; N++) {
      for (let E = 0; E <= numbers; E++) {
        for (let Y = 0; Y <= numbers; Y++) {
          for (let S = 0; S <= numbers; S++) {
            for (let D = 0; D <= numbers; D++) {
              for (let R = 0; R <= numbers; R++) {
                attempts++;

                const letters = [S, E, N, D, M, O, R, Y];

                if (
                  M < 1 ||
                  letters.filter(
                    (item, index) => letters.indexOf(item) !== index
                  ).length
                ) {
                  continue;
                }

                const send = S * 1000 + E * 100 + N * 10 + D;
                const more = M * 1000 + O * 100 + R * 10 + E;
                const money = M * 10000 + O * 1000 + N * 100 + E * 10 + Y;

                if (send + more !== money) {
                  continue;
                }

                console.log(
                  `\n
                    Tentativas: ${attempts} vezes
                  \n\n
                    Resultado:\n
                      SEND:   ${send}\n
                      MORE:   ${more}\n
                              _____\n
                      MONEY: ${money}
                  \n\n`
                );

                console.timeEnd("-- SEND+MORE=MONEY");
                return;
              }
            }
          }
        }
      }
    }
  }
}
