// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const alphabet = [
    {letter: "a",number: 11},
    {letter: "b",number: 21},
    {letter: "c",number: 31},
    {letter: "d",number: 41},
    {letter: "e",number: 51},
    {letter: "f",number: 12},
    {letter: "g",number: 22},
    {letter: "h",number: 32},
    {letter: "i",number: 42},
    {letter: "j",number: 42},
    {letter: "k",number: 52},
    {letter: "l",number: 13},
    {letter: "m",number: 23},
    {letter: "n",number: 33},
    {letter: "o",number: 43},
    {letter: "p",number: 53},
    {letter: "q",number: 14},
    {letter: "r",number: 24},
    {letter: "s",number: 34},
    {letter: "t",number: 44},
    {letter: "u",number: 54},
    {letter: "v",number: 15},
    {letter: "w",number: 25},
    {letter: "x",number: 35},
    {letter: "y",number: 45},
    {letter: "z",number: 55}
  ]

  function polybius(input, encode = true) {
    let oddTest = []
    for (let p =0; p < input.length; p++){
      if (input[p] !== " ") {
        oddTest.push(input[p])
      }
    }
    let oddTestNumber = oddTest.length
    let oddTester = oddTestNumber%2
    if (encode === false) {
      if (oddTester == 1) {
        return false
      }
    }
    let code = input.toLowerCase()
    let message = []
    if (encode === true) {
      for (let i = 0; i < code.length; i++){
        let result = alphabet.some((character) => character.letter == code[i])
        if (result == true) {
        let found = alphabet.find((character) => character.letter == code[i])
        message.push(found.number)
        } else {
          message.push(code[i])
        }
      }
    } else {
      let newCodeArray = []
      let newCode = ""
      for (let k = 0; k < code.length; k++){
        if (code[k] == " ") {
          newCodeArray.push("  ")
        } else {
          newCodeArray.push(code[k])
        }
        newCode = newCodeArray.join("")
      }
      for (let j = 0; j < newCode.length; j = j+2){
        if (newCode[j] == " "){
          message.push(" ")
        } else {
        let num = []
        let decode = []
        decode.push(newCode[j])
        decode.push(newCode[j+1])
        num.push(decode.join(""))
        if (num == 42) {
          message.push("(i/j)")
        } else {
        let found = alphabet.find((character) => character.number == num)
        message.push(found.letter)
          }
        }
      }
     }
    return message.join("")
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
