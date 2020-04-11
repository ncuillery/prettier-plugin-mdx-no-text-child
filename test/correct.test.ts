import { format } from "./utils";
import * as testCases from "./test-cases/correct";

interface TestCases {
  [key: string]: string[];
}

const dictionary: TestCases = testCases;

describe("Correctly formatted texts are not changed", () => {
  for (let testCase in dictionary) {
    test(testCase, () => {
      const input = dictionary[testCase][0];
      const { output, vanillaOutput } = format(input);

      expect(vanillaOutput).toBe(input);
      expect(output).toBe(input);
    });
  }
});
