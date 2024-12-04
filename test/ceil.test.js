import { expect } from "chai";
import ceil from "../src/ceil.js";

describe("ceil", () => {
  it("should return 5", () =>
    expect(ceil(4.006)).to.eql(5)
  );

  it("should return 6.01", () =>
    expect(ceil(6.004, 2)).to.eql(6.01)
  );

  it("should return 6100", () =>
    expect(ceil(6040, -2)).to.eql(6100)
  );
});