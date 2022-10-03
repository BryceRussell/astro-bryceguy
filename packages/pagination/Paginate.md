# `<Paginate>`

Astro has a [`paginate()`](https://docs.astro.build/en/reference/api-reference/#paginate) function when using the SSG `getStaticPaths()` method, but what if you want to use this function to paginate using SSR?

This component is designed to paginate an array of data using a dynamic rest route like `[...page].astro` which gets passed to the `page` prop like `page={Astro.params.page}`

**Note**: If you want paginate on the index page you must use a rest route `[...page].astro` otherwise you can use a regular route `[page].astro`

**Feature Log**:

- Added ability to target a page for alternative rendering using slots
- Compatible with `<Pagination>` and `<AdvancedPagination>` navigation components
- Works with dynamic routes `[...page].astro`
- Paginate an array of data

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

Number of items assigned to a page

### `page`

**Type**: `string | number`

**Default**: `1`

Number of page to display/render, designed to be used with a dynamic rest route `[...page].astro` and `Astro.params`

**Note**: You must use a rest route `[...page].astro` for index pages to work

**Example**:

```jsx
// src/pages/[...page].astro
<Paginate data={data} page={Astro.params.page}>
    ...
</Paginate>
```

## Slot Arguments

This component passes a `page` object as argument to slots

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

## Slots

### `default`

Default for rendering pages

**Example**:

```jsx
<Paginate>
    {page => (
        <section>
            { page.data.map(post => (
                <article>
                    ...
                </article>
            ))}
        </section>
    )}
</Paginate>
```

### `{number}`

Define a render alternative to the default by using a page number as a slot

**Example**:

In this example the first page of the pagination is completely replaced with a 'First Page' `<h1>`

```jsx
<Paginate>
    <f slot="1">{() => <h1>First Page</h1>}</f>
    {page => (
        <section>
            { page.data.map(post => (
                <article>
                    ...
                </article>
            ))}
        </section>
    )}
</Paginate>
```

## Creating Navigation

If you want to navigate your pagination using links you will have to add a `<Pagination>` or `<AdvancedPagination>` component inside your `<Paginate>` component

### Example

```jsx
// src/pages/posts/[...page].astro
<Paginate data={posts} page={Astro.params.page}>
    { page => (
        <section>
            { page.data.map(post => (
                <article>
                    <h2>{post.id} - {post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </section>
        <nav>
            <AdvancedPagination index url="/posts" total={page.last} current={page.current}>
                <f slot="active">{page => <span>{page.number}</span>}</f>
                <f slot="disabled">{() => <span>...</span>}</f>
                {page => <a href={page.href}>{page.number}</a>}
            </AdvancedPagination>
        </nav>
    )}
</Paginate>
```