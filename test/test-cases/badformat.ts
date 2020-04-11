/*
 * Those snippets are not formatted correctly but the formatting
 * issues do not concerned by the plugin.
 * There are here to enforce that the plugin has no side effect.
 */
export const NoTag = [
// Input:
`# Header

This is a paragraph`,
// Expected:
`# Header

This is a paragraph
`,
];

export const NoTagNoBlankLine = [
// Input:
`# Header
This is a paragraph
`,
// Output:
`# Header

This is a paragraph
`,
];

export const TagMissingLineBreak = [
// Input:
`# Header
<Info>

This is an info.
</Info>

This is a paragraph
`,
// Output:
`# Header

<Info>

This is an info.

</Info>

This is a paragraph
`,
];

export const ExtraLineBreaks = [
// Input:
`# Header



<Info>




This is an info.




</Info>




This is a paragraph



`,
// Output:
`# Header

<Info>

This is an info.

</Info>

This is a paragraph
`,
];
