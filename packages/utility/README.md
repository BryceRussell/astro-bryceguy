# `@astro-bryceguy/utility`(Deprecated)

### **NOTE**
This component is old and deprecated, you can find a better version of this component here: [astro-headless-ui](https://github.com/BryceRussell/astro-headless-ui)

---

A collection of misc Astro components

## `<Map>`

**Experimental**

A component based abtraction of JSX Mapping and the `Array.prototype` object, similar to SolidJS's `<For>` components

Pass an array of data, reverse/filter/sort it, iterate over it in a slot function

**Example**:

```tsx
<Map
    {...posts}
    filter={i => i.frontmatter.draft !== true}
    sort={(a, b) => {a.frontmatter.date > b.frontmatter.date ? -1 : b.frontmatter.date > a.frontmatter.date ? 1 : 0}}
>
    {(i) => {
        <Post post={i}>
    }}
</Map>
```
