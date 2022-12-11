import isPalindrome from "./index.js";

describe("isPalindrom ", () => {
  const palindrome = "racecar";
  const result = isPalindrome(palindrome);
  it("1: Check if the function correctly identifies palindrome strings", () => {
    expect(result).toBeTruthy();
  });
});

describe("isPalindrom ", () => {
  const nonPalindrome = "hello world";
  const result = isPalindrome(nonPalindrome);
  it("2: Check if the function correctly identifies non-palindrome strings", () => {
    expect(result).toBeFalsy();
  });
});

describe("isPalindrom ", () => {
  const emptyString = "";
  const result = isPalindrome(emptyString);
  it("3: Check if the function correctly handles empty strings", () => {
    expect(result).toBeTruthy();
  });
});

describe("isPalindrom ", () => {
  const oneCaracter = "a";
  const result = isPalindrome(oneCaracter);
  it("4: Check if the function correctly handles strings with only one character", () => {
    expect(result).toBeTruthy();
  });
});

describe("all string are Plindrom",() =>{
  const strs : string[] = ['redivider', 'deified', 'civic', 'radar', 'level', 'rotor', 'kayak', 'reviver', 'racecar', 'madam','','a'];
  const result = strs.map(isPalindrome);
  const expected = [true,true,true,true,true,true,true,true,true,true,true,true]
  it('5 check if all string are plaindrom',() =>{
    expect(result).toEqual(expected)
  })
})