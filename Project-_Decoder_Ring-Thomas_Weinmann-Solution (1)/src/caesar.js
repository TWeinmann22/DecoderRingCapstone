// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = [
    {letter: "a",number: 1},
    {letter: "b",number: 2},
    {letter: "c",number: 3},
    {letter: "d",number: 4},
    {letter: "e",number: 5},
    {letter: "f",number: 6},
    {letter: "g",number: 7},
    {letter: "h",number: 8},
    {letter: "i",number: 9},
    {letter: "j",number: 10},
    {letter: "k",number: 11},
    {letter: "l",number: 12},
    {letter: "m",number: 13},
    {letter: "n",number: 14},
    {letter: "o",number: 15},
    {letter: "p",number: 16},
    {letter: "q",number: 17},
    {letter: "r",number: 18},
    {letter: "s",number: 19},
    {letter: "t",number: 20},
    {letter: "u",number: 21},
    {letter: "v",number: 22},
    {letter: "w",number: 23},
    {letter: "x",number: 24},
    {letter: "y",number: 25},
    {letter: "z",number: 26}
  ]
  

  function caesar(input, shift, encode = true) {
    let code = input.toLowerCase()
    let message = []
    if (shift < -25) return false
    if (shift > 25) return false
    if (shift == 0) return false
    for (let i = 0; i < code.length; i++){
      let result = alphabet.some((character) => character.letter == code[i])
      if (result == true) {
        let found = alphabet.find((character) => character.letter == code[i])
        let count = found.number
        let countShifted = 0
        if (encode == true) {
          countShifted = count + shift
        } else {
          countShifted = count - shift
        }
        if (countShifted > 26) countShifted = countShifted - 26
        if (countShifted < 1) countShifted = countShifted + 26
        let newFound = alphabet.find((character) => character.number == countShifted)
        message.push(newFound.letter)
      } else {
        message.push(code[i])
      }
    }
    return message.join("")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
