# `<Paginate>`

Astro has a [`paginate()`](https://docs.astro.build/en/reference/api-reference/#paginate) function when using the SSG `getStaticPaths()` method, but what if you want to use this function to paginate using SSR?

This component uses Astros `paginate()` function to split an array and expose a `page` object as an argument to a function in the `default` slot

**Example**:

```tsx
---
import { Paginate } from '@astro-bryceguy/pagination';
---

<Paginate page={Astro.params.page} data={await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())}>
    {page => (
        <section>
            { page.data.map(post => (
                <article>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </section>
    )}
</Paginate>
```

## Props

### `data`

**Type**: `any[]`

Array of data to split into pages

### `size`

**Type**: `string | number`

**Default**: `10`

Number of items in a page's data array

### `page`

**Type**: `string | number`

**Default**: `1`

Current page number

## Slot Arguments

This component passes a `page` object as argument to `default` slot

```tsx
<Paginate>
    {page => (
        ...
    )}
</Paginate>
```

```ts
interface page {
    data: any[]; // Array of data for the current page
    start: number; // Index of first item on current page
    end: number; // Index of last item on current page
    size: number; // How many items per-page
    total: number; // The total number of items across all pages
    current: number; // The current page number, starting with 1
    last: number; // The total number of pages
}
```