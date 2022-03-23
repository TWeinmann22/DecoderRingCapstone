// Write your tests here!

const expect = require("chai").expect
const { polybius } = require("../src/polybius")

describe ("polybius", () => {
  it("when encoding should translate i to 42", () => {
    let input = "i"
    let encode = true
     let expected = "42"
     let actual = polybius(input, encode)
  expect(actual).to.equal(expected)
  })
  it("when encoding should translate j to 42", () => {
    let input = "j"
    let encode = true
     let expected = "42"
     let actual = polybius(input, encode)
  expect(actual).to.equal(expected)
  })
  it("when decoding should translate 42 to (i/j)", () => {
    let input = "42"
    let encode = false
     let expected = "(i/j)"
     let actual = polybius(input, encode)
  expect(actual).to.equal(expected)
  })
  it("should ignore capital letters", () => {
    let input = "A Message"
    let encode = true
     let expected = polybius("a message", encode)
     let actual = polybius(input, encode)
  expect(actual).to.equal(expected)
  })
  it("should maintain spaces while encoding", () => {
    let input = "A Message"
    let encode = true
     let expected = polybius("a message", encode)
     let actual = polybius(input, encode)
  expect(actual).to.equal(expected)
  })
  it("should maintain spaces while decoding", () => {
    let input = "42 42"
    let encode = false
     let expected = "(i/j) (i/j)"
     let actual = polybius(input, encode)
  expect(actual).to.equal(expected)
  })
})