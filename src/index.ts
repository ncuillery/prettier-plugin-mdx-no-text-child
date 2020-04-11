import prettierMdx from "prettier/parser-markdown";
import { AST, Parser } from "prettier";
import { Node } from "unist";

const mdxParser = prettierMdx.parsers.mdx;

// Stronger type than the generic `AST` from Prettier (alias of `any`)
interface ASTNode extends Node {
  value: string;
  children?: ASTNode[];
}

interface MdxParser {
  mdx: Parser;
}

const collectNodes = (accumulator: ASTNode[], node: ASTNode) => {
  if (node.type === "jsx" && node.value.indexOf(">") !== node.value.length) {
    accumulator.push(node);
  }

  if (node.children) {
    node.children.forEach((node: ASTNode) => collectNodes(accumulator, node));
  }

  return accumulator;
};

const insertLineBreaks = (text: string, node: ASTNode) => {
  // Insert 2 line breaks to handle inline tags as well. It produces
  // unnecessary line breaks but Prettier's printer will remove them.
  const updatedNodeValue = node.value
    .replace(/</g, "\n\n<")
    .replace(/>/g, ">\n\n");

  return (
    text.substring(0, node.position!.start.offset) +
    updatedNodeValue +
    text.substring(node.position!.end.offset!)
  );
};

export const parsers: MdxParser = {
  mdx: {
    ...mdxParser,
    preprocess: (text, options) => {
      // 1. Parse the text with the original MDX parser
      const ast: ASTNode = mdxParser.parse(text, prettierMdx.parsers, options);

      // 2. Collect the tag with immediate text content
      const nodes = collectNodes([], ast);

      // 3. Sort by descending offset
      nodes.sort(
        (a, b) => b.position!.start.offset! - a.position!.start.offset!
      );

      // 4. Insert blank lines to separate the tag from its content
      let updatedText = text;
      nodes.forEach((node: AST) => {
        updatedText = insertLineBreaks(updatedText, node);
      });

      return updatedText;
    },
  },
};
