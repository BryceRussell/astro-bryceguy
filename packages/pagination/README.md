# @astro-bryceguy/pagination (Deprecated)

### **NOTE**
This component is old and deprecated, you can find a better version of this component here: [astro-headless-ui](https://github.com/BryceRussell/astro-headless-ui)

---

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

## Examples

[Pagination Example](https://github.com/BryceRussell/pagination-example)

This example uses the `<Paginate>` and `<AdvancedPagination>` components to paginate a list of posts from the JSONPaceholder API

```tsx
---
import { Paginate, AdvancedPagination } from '@astro-bryceguy/pagination';

const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
---

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
        <meta name="generator" content={Astro.generator} />
        <title>Astro</title>
    </head>
    <body>
        <Paginate data={posts} size="10" page={Astro.params.page}>
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
                    <AdvancedPagination total={page.last} current={page.current} middle="1">
                        <f slot="active">{page => <span>{page.number}</span>}</f>
                        <f slot="disabled">{() => <span>...</span>}</f>
                        {page => <a href={page.href}>{page.number}</a>}
                    </AdvancedPagination>
                </nav>
            )}
        </Paginate>
    </body>
</html>
```
