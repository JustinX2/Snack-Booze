const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("unrolls a 4x4 array correctly", function(){
    const squareArray = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const result = unroll(squareArray);
    expect(result).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });

  it("unrolls a 3x3 array correctly", function(){
    const smallerSquareArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const result = unroll(smallerSquareArray);
    expect(result).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
});
