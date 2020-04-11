import { format } from "./utils";
import * as testCases from "./test-cases/fix";

interface TestCases {
  [key: string]: string[];
}

const dictionary: TestCases = testCases;

describe("The plugin does its job", () => {
  for (let testCase in dictionary) {
    test(testCase, () => {
      const input = dictionary[testCase][0];
      const transformedOutput = dictionary[testCase][1];

      const { output, vanillaOutput } = format(input);

      expect(output).toBe(transformedOutput);
      expect(vanillaOutput).not.toBe(output);
    });
  }
});
