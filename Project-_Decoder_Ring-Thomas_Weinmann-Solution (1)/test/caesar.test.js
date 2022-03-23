// Write your tests here!

const expect = require("chai").expect
const { caesar } = require("../src/caesar")

describe ("caesar", () => {
  it("should return false if shift value is equal to zero", () => {
    let input = "message"
    let shift = 0
     let expected = false
     let actual = caesar(input, shift)
  expect(actual).to.equal(expected)
  })
  it("should return false if shift value is less than -25", () => {
    let input = "message"
    let shift = -26
     let expected = false
     let actual = caesar(input, shift)
  expect(actual).to.equal(expected)
  })
  it("should return false if shift value is greater than 25", () => {
    let input = "message"
    let shift = 26
     let expected = false
     let actual = caesar(input, shift)
  expect(actual).to.equal(expected)
  })
  it("should return false if shift value is not present", () => {
    let input = "message"
    let shift = ""
     let expected = false
     let actual = caesar(input, shift)
  expect(actual).to.equal(expected)
  })
  it("should ignore capital letters", () => {
    let input = "ZebraMagazine"
    let shift = 3
     let expected = "cheudpdjdclqh"
     let actual = caesar(input, shift)
  expect(actual).to.equal(expected)
  })
  it("should ignore letters that go past the end of the alphabet", () => {
    let input = "z"
    let shift = 3
     let expected = "c"
     let actual = caesar(input, shift)
  expect(actual).to.equal(expected)
  })
  it("should maintain spaces and other nonalphabetic symbols in the message", () => {
    let input = "a123! !"
    let shift = 3
     let expected = "d123! !"
     let actual = caesar(input, shift)
  expect(actual).to.equal(expected)
  })
})