// ARRANGE
const FizzBuzz = require("../src/fizzBuzz");

const subject = new FizzBuzz();

describe("FizzBuzz", () => {
  it("is expected to return a number if no game conditions are met", () => {
    // ACT - we use the software
    let result = subject.check(1)
    // ASSERT - we make sure that the result is what we expect it to be
    expect(result).toEqual(1)    
  });

  it("is expected to return 'fizz' if the number is divisable by 3", () => {
    // ACT - we use the software
    let result = subject.check(3)
    // ASSERT - we make sure that the result is what we expect it to be
    expect(result).toEqual('fizz')    
  });

  it("is expected to return 'buzz' if the number is divisable by 5", () => {
    // ACT - we use the software
    let result = subject.check(5)
    // ASSERT - we make sure that the result is what we expect it to be
    expect(result).toEqual('buzz')    
  });

  it("is expected to return 'fizz-buzz' if the number is divisable by 15", () => {
    // ACT - we use the software
    let result = subject.check(15)
    // ASSERT - we make sure that the result is what we expect it to be
    expect(result).toEqual('fizz-buzz')    
  });
});


