// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const ogAlphabetArray = [
    {letter: "a",number: 0},
    {letter: "b",number: 1},
    {letter: "c",number: 2},
    {letter: "d",number: 3},
    {letter: "e",number: 4},
    {letter: "f",number: 5},
    {letter: "g",number: 6},
    {letter: "h",number: 7},
    {letter: "i",number: 8},
    {letter: "j",number: 9},
    {letter: "k",number: 10},
    {letter: "l",number: 11},
    {letter: "m",number: 12},
    {letter: "n",number: 13},
    {letter: "o",number: 14},
    {letter: "p",number: 15},
    {letter: "q",number: 16},
    {letter: "r",number: 17},
    {letter: "s",number: 18},
    {letter: "t",number: 19},
    {letter: "u",number: 20},
    {letter: "v",number: 21},
    {letter: "w",number: 22},
    {letter: "x",number: 23},
    {letter: "y",number: 24},
    {letter: "z",number: 25}
  ]
  
  const ogAlphabetString = "abcdefghijklmnopqrstuvwxyz"

  function substitution(oginput, alphabet, encode = true) {
    if (alphabet == undefined) return false
    if (alphabet.length !== 26) return false
    let checkCount = 0
    for (let m = 0; m < alphabet.length; m++){
      for (let n = 0; n < alphabet.length; n++){
        if (alphabet[m] == alphabet[n]){
          checkCount += 1
        }  
      }
    }
    if (checkCount > 26) return false
    let input = oginput.toLowerCase()
    if (encode === true){
      let encodeMessage = []
      for (let i = 0; i < input.length; i++){
        if (input[i] == " ") {
          encodeMessage.push(input[i])
        } else {
          let found = ogAlphabetArray.find((character) => character.letter == input[i])
        encodeMessage.push(alphabet[found.number])
        }
      }
      return encodeMessage.join("")
    } else {
      let alphabetDecode =[]
      for (let p = 0; p < alphabet.length; p++){
        alphabetDecode.push({letter: alphabet[p], number: p})
      }
      let decodeMessage = []
      for (let j = 0; j < input.length; j++){
        if (input[j] == " ") {
          decodeMessage.push(input[j])
        } else {
          let found = alphabetDecode.find((character) => character.letter == input[j])
          decodeMessage.push(ogAlphabetString[found.number])
        }
      }
      return decodeMessage.join("")
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
