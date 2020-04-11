import { format } from "./utils";
import * as testCases from "./test-cases/badformat";

interface TestCases {
  [key: string]: string[];
}

const dictionary: TestCases = testCases;

describe("The plugin doesn't alter vanilla MDX formatting", () => {
  for (let testCase in dictionary) {
    test(testCase, () => {
      const input = dictionary[testCase][0];
      const transformedOutput = dictionary[testCase][1];

      const { output, vanillaOutput } = format(input);

      expect(vanillaOutput).toBe(transformedOutput);
      expect(output).toBe(vanillaOutput);
    });
  }
});
