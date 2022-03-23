// Write your tests here!

const expect = require("chai").expect
const { substitution } = require("../src/substitution")

describe ("substitution", () => {
  it("should return false if the alphabet given length does not equal 26", () => {
    let input = "message"
    let alphabet = "abcdef"
    let encode = true
     let expected = false
     let actual = substitution(input, alphabet, encode)
  expect(actual).to.equal(expected)
  })
  it("should correctly translates the given phrase, based on the alphabet given to the function", () => {
    let input = "message"
    let alphabet = "plmoknijbuhvygctfxrdzeswaq"
    let encode = true
     let expected = "ykrrpik"
     let actual = substitution(input, alphabet, encode)
  expect(actual).to.equal(expected)
  })
  it("should return false if there are any duplicate characters in the given alphabet", () => {
    let input = "message"
    let alphabet = "plmokniibuhvygctfxrdzeswaq"
    let encode = true
     let expected = false
     let actual = substitution(input, alphabet, encode)
  expect(actual).to.equal(expected)
  })
  it("should maintain spaces in the message, before and after encoding", () => {
    let input = "message message"
    let alphabet = "plmoknijbuhvygctfxrdzeswaq"
    let encode = true
     let expected = "ykrrpik ykrrpik"
     let actual = substitution(input, alphabet, encode)
  expect(actual).to.equal(expected)
  })
  it("should maintain spaces in the message, before and after decoding", () => {
    let input = "ykrrpik ykrrpik"
    let alphabet = "plmoknijbuhvygctfxrdzeswaq"
    let encode = false
     let expected = "message message"
     let actual = substitution(input, alphabet, encode)
  expect(actual).to.equal(expected)
  })
  it("should ignore capital letters", () => {
    let input = "MESSAGE"
    let alphabet = "plmoknijbuhvygctfxrdzeswaq"
    let encode = true
     let expected = substitution("message", alphabet, encode)
     let actual = substitution(input, alphabet, encode)
  expect(actual).to.equal(expected)
  })
})