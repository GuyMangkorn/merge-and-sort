import { merge } from "../index";
let collection1:number[]
let collection2:number[]
let expectOutput:number[]

describe("merge and sorting array of number", () => {
  /**
   * input [] []
   * output []
   */
  test("empty input", () => {
    collection1 = []
    collection2 = []
    expectOutput = []

    expect(merge(collection1, collection2)).toEqual(expectOutput);
  });

  /**
   * input [2,3,4,5,7,10] [2,3,4,5,7,10]
   * output [2,2,3,3,4,4,5,5,7,7,10,10]
   */
  test("equal input", () => {
    collection1 = [2,3,4,5,7,10]
    collection2 = [2,3,4,5,7,10]
    expectOutput = [2,2,3,3,4,4,5,5,7,7,10,10]

    expect(merge(collection1, collection2)).toEqual(expectOutput);
  });

  /**
   * input [1,2,7,8,15] [2,3,4,6,7,9,10,25,26]
   * output [1,2,2,3,4,6,7,7,8,9,10,15,25,26]
   */
  test("random number case #1", () => {
    collection1 = [1,2,7,8,15]
    collection2 = [2,3,4,6,7,9,10,25,26]
    expectOutput = [1,2,2,3,4,6,7,7,8,9,10,15,25,26]

    expect(merge(collection1, collection2)).toEqual(expectOutput);
  });
});
