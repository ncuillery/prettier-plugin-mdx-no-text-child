/*
 * Snippets that are correctly formatted. The plugin is
 * supposed to have no effect.
 */
export const NoTag = [
`# Header

This is the content.
`,
];

export const Tag = [
`# Header

<Info>

This is a info tag

</Info>

This is a paragraph
`,
];

export const TagAttributes = [
`# Header

<Info importance="low">

This is a info tag

</Info>

This is a paragraph
`,
];

export const StartWithTag = [
`<Info>

This is a info tag

</Info>

This is a paragraph
`,
];

export const EndWithTag = [
`# Header

<Info>

This is an info.

</Info>
`,
];

export const NestedTags = [
`# Header

<Info>

<Warning>

This is a warning inside an info.

</Warning>

</Info>

This is a paragraph.
`,
];

export const NestedTagsWithInnerContent = [
`# Header

<Info>

This is an info.

<Warning>

This is a warning inside an info.

</Warning>

</Info>

This is a paragraph.
`,
];

export const NoTagCodeBlock = [
`# Header

\`\`\`
<Info>
  Should not be formatted
<Info>
\`\`\`

This is the content.
`,
];

export const TagWithCodeBlock = [
`# Header

<Code>

\`\`\`
<Info>
  Should not be formatted
<Info>
\`\`\`

</Code>

This is the content.
`,
];

export const NoTagInlineCode = [
`# Header

This is the content with code: \`<Info>Info</Info>\`.
`,
];

export const TagWithInlineCode = [
`# Header

<Info>

This is a code example \`<Code>Should not be formatted</Code>\`.

</Info>

This is the content.
`,
];

export const SelfClosingTag = [
`# Header

<Info />

This is the content.
`,
];
