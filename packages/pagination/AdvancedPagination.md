# `<AdvancedPagination>`

This is a refactored version of the `<Pagination>` component that uses slot functions to control how the navigtion is rendered

![advanced pagination example](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/pagination/examples/advanced.PNG)

**Example**:

```tsx
---
import { AdvancedPagination } from '@astro-bryceguy/pagination';
---
<nav style="display:flex;gap:4px;">
    <AdvancedPagination total="22" current="11">
        <f slot="active">{(page) => <span>{page.number}</span>}</f>
        <f slot="disabled">{() => <span>...</span>}</f>
        {(page) => <a href={page.href}>{page.number}</a>}
    </AdvancedPagination>
</nav>
```

**Output**:

```html
<nav style="display:flex;gap:4px;">
    <a href="/1">1</a>
    <a href="/2">2</a>
    <span>...</span>
    <a href="/9">9</a>
    <a href="/10">10</a>
    <span>11</span>
    <a href="/12">12</a>
    <a href="/13">13</a>
    <span>...</span>
    <a href="/21">21</a>
    <a href="/22">22</a>
</nav>
```


## Props

### `url`

**Type**: `string`

**Default**: `/`

`'${url}/${page.number}'`

root url for page link hrefs

url `blog/posts` creates links like `blog/posts/1`, `blog/posts/2`, `...`

### `total`

**Type**: `string | number`

Total number of pages

### `current`

**Type**: `string | number`

Current page number

### `start`

**Type**: `string | number`

**Default**: `2`

number of pages to display at the start

### `end`

**Type**: `string | number`

**Default**: `2`

number of pages to display at the end

### `middle`

**Type**: `string | number`

**Default**: `2`

number of pages to display on either side of the current active page

### `index`

**Type**: `boolean`

**Default**: `false`

The first link will link to the index instead of page 1

`href` will look like `${url}/` instead of `${url}/1`

### `commas`

**Type**: `boolean`

**Default**: `true`

uses commas in page numbers if true

### `collapse`

**Type**: `boolean`

**Default**: `true`

if true only the pages defined using the start, current, middle, and end props will be shown

if false a link element will appear for every page number in the total

## Slot Arguments

When rendering your navigation you have acces to a `page` object for every link

```tsx
<AdvancedPagination>
    {page => <a href={page.href}>{page.number}</a>}
</AdvancedPagination>
```

```ts
interface page {
    number: string; // Number of page
    href: string; // href to page
    // What type of link the page is
    slot: 'link'|'first'|'disabled'|'before'|'active'|'after'|'last';
}
```

## Slots

**Example**:

```tsx
<AdvancedPagination>
    <f slot="active">{page => <span>{page.number}</span>}</f>
    <f slot="disabled">{() => <span>...</span>}</f>
    {page => <a href={page.href}>{page.number}</a>}
</AdvancedPagination>
```

This example will create `<span>` element for the `active` link and the `disabled` spaces between links, All other slots fallback to the `default` slot function

### `default`

The default slot acts as a fallback, if a slot isnt defined it uses the default

### `link`

Targets any link that is not disabled, first, before, active, after, or last

### `first`

Targets the first link

### `disabled`

Targets the space between `first` `before`, and `after` `last`. Represents the pages not included in pagination

### `before`

Targets the links before the `active` link

### `active`

Target the current page's link

### `after`

Targets the links after the `active` link

### `last`

Targets the last link
