export const InlineTag = [
`# Header

<Info>This is an info.</Info>

This is a paragraph.
`,
`# Header

<Info>

This is an info.

</Info>

This is a paragraph.
`,
];

export const TabNoBlankLineAfterOpeningTag = [
// Input:
`# Header

<Info>
This is an info.

</Info>

This is a paragraph.
`,
// Output:
`# Header

<Info>

This is an info.

</Info>

This is a paragraph.
`,
];

export const TabNoBlankLineAfterClosingTag = [
// Input:
`# Header

<Info>

This is an info.

</Info>
This is a paragraph.
`,
// Output:
`# Header

<Info>

This is an info.

</Info>

This is a paragraph.
`,
];

export const NestedTagsNoBlankLineBetween = [
// Input:
`# Header

<Info>
<Warning>

This is a warning inside an info
</Warning>

</Info>

This is a paragraph.
`,
// Output:
`# Header

<Info>

<Warning>

This is a warning inside an info

</Warning>

</Info>

This is a paragraph.
`,
];

export const InlineTagNestedInTag = [
// Input:
`# Header

<Info>
<Warning>This is a warning inside an info</Warning>

</Info>

This is a paragraph.
`,
// Output:
`# Header

<Info>

<Warning>

This is a warning inside an info

</Warning>

</Info>

This is a paragraph.
`,
];

export const NestedInlineTags = [
// Input:
`# Header

<Info><Warning>This is a warning inside an info</Warning></Info>

This is a paragraph.
`,
// Output:
`# Header

<Info>

<Warning>

This is a warning inside an info

</Warning>

</Info>

This is a paragraph.
`,
];

export const SelfClosingTag = [
// Input:
`# Header
<Info />
This is a paragraph.
`,
// Output:
`# Header

<Info />

This is a paragraph.
`,
];

export const InlineTagWithSelfClosingTag = [
// Input:
`# Header

<Info><Warning /></Info>

This is a paragraph.
`,
// Output:
`# Header

<Info>

<Warning />

</Info>

This is a paragraph.
`,
];
