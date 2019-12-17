import flags from "./Flags";

describe('Initial test case', () => {
   it('should have 0 peaks', () => {
       const flagsTotal = flags([]);
       expect(flagsTotal).toBe(0);
   });
});