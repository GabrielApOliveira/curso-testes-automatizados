const StringManipulations = require('./atividade1');

let str = "";
let strM = "";

describe("String Manipulations class", () => {

  beforeAll(() => {
    str = "Bond. James Bond";
    strM = new StringManipulations(str);
  });

  test("should returns first substring that matches the given string", () => {
    const output = "Bond";
    expect(strM.findFirstMatch("Bond")).toEqual(output);
  });

  test("should returns last substring that matches the given string", () => {
    const output = "Bond";
    expect(strM.findLastMatch("Bond")).toEqual(output);
  });

  test("should returns substring between two given other strings", () => {
    const output = "James";
    expect(strM.substringBetweenMatches("Bond.", "Bond")).toEqual(output);
  });

  test("should returns string made of the first 2 and the last 2 chars of original string", () => {
    const output = "Bond";
    expect(strM.both_ends()).toEqual(output);
  });

  test("should return a string where all occurences of its first char have been changed to '*', except do not change the first char itself", () => {
    const output = "Bond. James *ond";
    expect(strM.fix_start('Bond')).toEqual(output);
  });

  test("should returns empty strings", () => {
    const output = "";
    expect(strM.findFirstMatch("Pierce")).toEqual(output);
    expect(strM.findLastMatch("Pierce")).toEqual(output);
    expect(strM.substringBetweenMatches("Pierce", "Brosnan")).toEqual(output);

    str = "07";
    strM = new StringManipulations(str);
    expect(strM.both_ends()).toEqual(output);
  });
});
