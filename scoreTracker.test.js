
const { getScore }  = require("./scoreTracker.js");
describe("Bowling Game Utilities", () =>
  describe("Calculating Current Score", () => {
    it("Should throw an error when frame size is not 10", () => {
      expect(() => {
        getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 3, 3, 3, 3, 3]);
      }).toThrow("array size is not correct");
    });
    it("should return score if the input is all open frame",()=>{
      expect(getScore([ 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6 ])).toBe(90);    
    });
    it("should return score when input consist of strike frames", () => {
      const result = getScore([1, 1, 2, 3, 4, 5, 4, 5, 5, 3, 3, 2, 3, 4, 5, 5, 3, 7, 10, 10, 4]);
      expect(result).toEqual(101);
    });
    it("Should return 30 when rolls are [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]", () => {
      const result = getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
      expect(result).toBe(30);
    });
    it("Should return 16 when rolls are [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]", () => {
      const result = getScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      expect(result).toEqual(16);
    });   
  })
);

// 10, 10 ,10, 10, 10, 10, 10, 10, 10, 10, 10, 10
// 3, 5, 1 ,5 ,7 ,1 ,10, 1, 6, 10, 6, 2, 1, 2, 0, 5 ,8 ,1
// 9, 1, 5, 0, 3, 0, 8, 1, 6, 4, 7, 2, 7, 1, 6, 3, 10 ,4 ,4