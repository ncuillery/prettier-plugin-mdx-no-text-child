![CI](https://github.com/ncuillery/prettier-plugin-mdx-no-text-child/workflows/CI/badge.svg?branch=master)

# Usage

Add this plugin as a dev dependency:

<table>
  <thead><tr><th>NPM</th><th>Yarn</th></tr></thead>
<tbody>
<tr>
<td>

```shell
$ npm i --dev prettier-plugin-mdx-no-text-child
```

</td>
<td>

```shell
yarn add -D prettier-plugin-mdx-no-text-child
```

</td>
</tr>
</tbody>
</table>

And that's it, Prettier will automatically load the plugin based on the package name (`prettier-plugin-*`).

# General Purpose

MDX is a markdown extension that allows insertion of JSX inside the Markdown markup. This is especially useful for referencing custom component.

Example:

```mdx
# This is the header

<Info>

This is an info block.

</Info>
```

In MDX, the line break after the opening tag is meaningful and define what the child node is:

<table>
<tbody>
<tr><th>MDX markup</th><th>JSX result</th></tr>
<tr>
<td>
        
```mdx
<Info>

This is a **paragraph**.

</Info>
```

</td>
<td>
        
```jsx
<Info>
  <p>
    This is a <strong>paragraph</strong>.
  </p>
</Info>
```

</td>
</tr>
<tr><th>MDX markup</th><th>JSX result</th></tr>
<tr>
<td>
        
```mdx
<Info>
This is **not** a paragraph.
</Info>
```

</td>
<td>
        
```jsx
<Info>
  This is **not** a paragraph.
</Info>
```

</td>
</tr>
</tbody>
</table>

As custom components are often used in MDX to wrap other elements (i.e. an image with a caption), this behavior leads to mistakes and unexpected results.

Example:

<table>
<tbody>
<tr><th>MDX markup</th><th>JSX result</th></tr>
<tr>
<td>
        
```mdx
<Info>
This is not a **paragraph**.

But **this one** is.
</Info>

````

</td>
<td>

```jsx
<Info>
  This is not a **paragraph**.
  <p>
    But <strong>this one</strong> is.
  </p>
</Info>
````

</td>
</tr>
</tbody>
</table>

See this issue for more context: https://github.com/mdx-js/mdx/issues/628

## Prettier

Prettier supports MDX since the version 1.15.0. By default, Prettier formats the previous example as is:

```diff
<Info>
This is not a **paragraph**.

But **this one** is.
+
</Info>
```

Prettier inserts a line break before the closing tag, but it doesn't insert a line break after the opening tag because it would change the meaning of the code (and Prettier is only about formatting).

Well, this plugin does:

```diff
<Info>
+
This is not a **paragraph**.

But **this one** is.
+
</Info>
```

# Roadmap

This is a 0.x version because this plugin is currently just smart enough to suit my own needs.

To enter 1.0, it needs to be more flexible and have options to exclude specific tags, or insert line breaks only if there are multiple children.

It more need more test cases, there are a LOT of untested situations where the formatting can go wrong.
