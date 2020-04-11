import { format as prettierFormat } from "prettier";
import { resolve } from "path";

export const format = (input: string) => {
  const output = prettierFormat(input, {
    parser: "mdx",
    plugins: [resolve(__dirname, "..", "lib")],
  });

  const vanillaOutput = prettierFormat(input, {
    parser: "mdx",
  });

  return { output, vanillaOutput };
};
