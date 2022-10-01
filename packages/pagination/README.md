# @astro-bryceguy/pagination

This is a collection of components for paginating data and creating link navigation

## `<Paginate>`

Paginate an array

Astro's `paginate()` function from `getStaticPaths()` inside of a component. 

[How do I use?](Paginate.md)

**Example**:

```tsx
<Paginate page="2" data={await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())}>
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

## `<Pagination>`

Create link navigation using objects

[How do I use?](Pagination.md)

**Example**:

```
<Pagination url="/posts" total="22" current="11" theme="inline"></Pagination>
```

**Note**: Recommended to use `<AdvancedPagination>`

## `<AdvancedPagination>`

Create link navigation using slots

[How do I use?](AdvancedPagination.md)

**Example**:

```tsx
<AdvancedPagination index total="22" current="11">
    <f slot="active">{(page) => <span>{page.number}</span>}</f>
    <f slot="disabled">{() => <span>...</span>}</f>
    {(page) => <a href={page.href}>{page.number}</a>}
</AdvancedPagination>
```
