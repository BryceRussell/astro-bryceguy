# @astro-bryceguy/pagination

This component is a fork/refactor of [https://github.com/iozcelik/SarissaPagination](https://github.com/iozcelik/SarissaPagination)

A pagination component that uses [astro-json-element](https://github.com/BryceRussell/astro-json-element) to give you full control over every aspect of your pagination element

[Tailwindcss](https://tailwindcss.com) is an easy way to style [astro-json-elements](https://github.com/BryceRussell/astro-json-element) without having to create global stylesheet or use inline styles

## Features

- Customize how many page numbers are shown at the start, middle, and end
- Fully customize every elements tag, text, innerHTML, and attributes using [astro-json-elements](https://github.com/BryceRussell/astro-json-element)
- Add commas to page numbers
- String number compatibility

## How to use

__Install package:__

```
npm i @astro-bryceguy/pagination
```

![Default](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/pagination/examples/default.PNG)

```
//Default styling
<Pagination url="/posts" total="22" current="11" defaults={true}></Pagination>
```

## Examples

![Pagination](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/pagination/examples/pagination.PNG)

```
<Pagination url="/posts" total="22" current="11" defaults={true}></Pagination>
<Pagination url="/posts" total="22" current="11" start="5" end="1" middle="1" defaults={true}></Pagination>
<Pagination url="/posts" total="22" current="11" start="1" end="5" middle="1" defaults={true}></Pagination>
<Pagination url="/posts" total="22" current="11" start="5" end="5" middle="1" defaults={true}></Pagination>
<Pagination url="/posts" total="22" current="11" start="1" end="1" middle="5" defaults={true}></Pagination>
<Pagination url="/posts" total="9999" current="1000" defaults={true}></Pagination>
<Pagination url="/posts" total="9999" current="1000" commas={false} defaults={true}></Pagination>
<Pagination url="/posts" total="12" current="6" collapse={false} defaults={true}></Pagination>
<Pagination url="/posts" total="12" current="6" style="display:flex;gap:.5rem;"></Pagination>
<!-- Custom Tailwindcss Example -->
<Pagination {...{
    url: "/posts",
    total: "9999",
    current: "1000",
    class: "flex items-center gap-1",
    button: {
        class: "relative flex-nowrap inline-flex items-center px-3 py-1 rounded-3xl border text-sm font-medium"
    },
    active: {
        class: "relative flex-nowrap inline-flex items-center px-3 py-1 rounded-3xl border border-purple-400 text-sm font-medium bg-purple-500 text-white"
    },
    disabled: {
        class: "leading-none flex items-center px-3"
    },
}}></Pagination>
```

## API

## Slots

### `Default`

Children will be slotted after all page number elements by default

### `before`

Slot children before all link elements

## API

### `url`

**Type**: `string`

root url for page link: `blog/posts` > `blog/posts/1, blog/posts/2`, etc

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

### `link`

**Type**: [astro-json-element](https://github.com/BryceRussell/astro-json-element)

Define default element for all links

### `active`

**Type**: [astro-json-element](https://github.com/BryceRussell/astro-json-element)

Define element for the active link

### `disabled`

**Type**: [astro-json-element](https://github.com/BryceRussell/astro-json-element)

Define element to display between start middle and end

### `first`

**Type**: [astro-json-element](https://github.com/BryceRussell/astro-json-element)

Define element for the first link

### `last`

**Type**: [astro-json-element](https://github.com/BryceRussell/astro-json-element)

Define element for the last link

### `defaults`

**Type**: `boolean`
**Default**: `false`

uses built in default styling if true

### `commas`

**Type**: `boolean`
**Default**: `true`

uses commas in page numbers if true

### `collapse`

**Type**: `boolean`
**Default**: `true`

if true only the pages defined using the start, current, middle, and end props will be shown

if link element will appear for every page number in the total

### `...attrs`

**Type**: [astro-json-element](https://github.com/BryceRussell/astro-json-element)

**Default**:
```
{
    tag: "div",
    style: defaults&&"display:flex;justify-content:center;align-items:center;gap:.25rem;",
}
```

use [astro-json-element](https://github.com/BryceRussell/astro-json-element) to define the main `div` element for your rating

