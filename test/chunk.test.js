import { expect } from "chai";
import chunk from "../src/chunk.js";

describe("chunk", () => {

  it("should return [[1, 2], [3, 4], [5]] from ['a', 'b', 'c', 'd'], 2", () =>
    expect(chunk([1, 2, 3, 4, 5], 2)).to.eql([[1, 2], [3, 4], [5]])
  );

  it("should return [[1, 2, 3], [4, 5]] from ['a', 'b', 'c', 'd'], 3", () =>
    expect(chunk([1, 2, 3, 4, 5], 3)).to.eql([[1, 2, 3], [4, 5]])
  );

  it("should return [[1, 2, 3, 4, 5]] from ['a', 'b', 'c', 'd'], 6", () =>
    expect(chunk([1, 2, 3, 4, 5], 6)).to.eql([[1, 2, 3, 4, 5]])
  );
  it("should do nothing for an empty array", () =>
    expect(chunk([], 7)).to.eql([])
  );
  it("should check if the array is null", () =>
    expect(chunk(null, 1)).to.eql([])
  );
});