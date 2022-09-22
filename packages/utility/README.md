# `@astro-bryceguy/utility`

A collection of misc Astro components

## `<Array>`

The Array component allows you to render elements using items from an array

**Example**:

```tsx
<Array
    each={posts}
    filter={i => i.frontmatter.draft !== true}
    sort={(a, b) => {a.frontmatter.date > b.frontmatter.date ? -1 : b.frontmatter.date > a.frontmatter.date ? 1 : 0}}
>
    {(i) => {
        <Post post={i}>
    }}
</Array>
```