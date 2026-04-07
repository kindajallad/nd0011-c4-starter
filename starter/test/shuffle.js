/* global describe, it */
import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffles the indexes", () => {
  it("should change array order", () => {
    const arr = [1, 2, 3, 4];
    const result = shuffle([...arr]);
    expect(result).to.not.deep.equal(arr);
  });
  it("should return array with same length", () => {
    const arr = [1, 2, 3, 4];
    const result = shuffle([...arr]);
    expect(result.length).to.equal(arr.length);
  });
  it("should return the same values in array", () => {
    const arr = [1, 2, 3, 4];
    const result = shuffle([...arr]);
    expect(result).to.include.members(arr);
  });
});
