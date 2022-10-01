# `<Pagination>`

This component was ori a fork/refactor of [https://github.com/iozcelik/SarissaPagination](https://github.com/iozcelik/SarissaPagination)

A pagination component that uses [astro-json-element](https://github.com/BryceRussell/astro-json-element) to give you full control over every aspect of your pagination element

[Tailwindcss](https://tailwindcss.com) is an easy way to style [astro-json-elements](https://github.com/BryceRussell/astro-json-element) without having to create global stylesheet or use inline styles

## Changes

- Added `index` prop sets the first link's `href` to `${url}/` instead of `${url}/1`
- Added a `wrapper` object to `theme` prop for wrapping links in a parent element
- Added tailwind theme, update/fixed inline theme
- Made url optional default to `/{page_number}`
- Added tab navigation option
- Added ability to load built in themes using a string of its name
- Moved `link`, `active`, `disabled`, `first`, `before`, `after`, and `last` props into the `theme` prop

## Features

- Customize how many page numbers are shown at the start, middle, and end
- Themes
- Fully customize every elements tag, text, innerHTML, and attributes using [astro-json-elements](https://github.com/BryceRussell/astro-json-element)
- Add commas to page numbers
- String number compatibility

## How to use

__Install package:__

```
npm i @astro-bryceguy/pagination
```

**Built in tailwindcss themes**:

If your using a built in theme that uses tailwind, add the package to your tailwindcss config so it picks up the classes

```
{
    content: ['./node_modules/@astro-bryceguy/**/*.js']
}
``` 

**Using**:

![Default](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/pagination/examples/default.PNG)

```
//Default styling
<Pagination url="/posts" total="22" current="11" theme="inline"></Pagination>
```

## Examples

![Examples](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/pagination/examples/examples.PNG)

```
<Pagination url="/posts" total="12" current="6"></Pagination>
<Pagination url="/posts" total="22" current="11" theme="inline"></Pagination>
<Pagination url="/posts" total="22" current="11" start="5" end="1" middle="1" theme="inline"></Pagination>
<Pagination url="/posts" total="22" current="11" start="1" end="5" middle="1" theme="inline"></Pagination>
<Pagination url="/posts" total="22" current="11" start="5" end="5" middle="1" theme="inline"></Pagination>
<Pagination url="/posts" total="22" current="11" start="1" end="1" middle="5" theme="inline"></Pagination>
<Pagination url="/posts" total="9999" current="1000" theme="inline"></Pagination>
<Pagination url="/posts" total="9999" current="1000" commas={false} theme="inline"></Pagination>
<Pagination url="/posts" total="12" current="6" collapse={false} theme="inline"></Pagination>
<Pagination url="/posts" total= "11" current= "5" start="0" end="0" middle="1" theme="simple"/>
```

## Slots

```
<container>
    <slot name="first" />
    {page links}
    <slot />
</container>
```

## API

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

The first link will link to the index instead of page 1, `href` will look like `${url}/` instead of `${url}/1`

### `tab`

**Type**: `boolean`

**Default**: `true`

Add tabindex="0" to all links except active and disabled links

### `commas`

**Type**: `boolean`

**Default**: `true`

uses commas in page numbers if true

### `collapse`

**Type**: `boolean`

**Default**: `true`

if true only the pages defined using the start, current, middle, and end props will be shown

if false a link element will appear for every page number in the total

### `...attrs`

**Type**: [astro-json-element](https://github.com/BryceRussell/astro-json-element)

use astro-json-element to define the container element for your rating, overwrites theme prop container object

**Example**: `<Pagination tag="div" id="page-navigation"/>`

### `theme`

**Type**: `string | {}`

**Themes**: `inline`, `simple`, `tailwind`

Theme objects allow you to customize your elements with [astro-json-element](https://github.com/BryceRussell/astro-json-element) props and attributes

**Custom Theme**: 

```
theme = {
    container?: {};
    wrapper?: {};
    link?: {};
    active?: {};
    disabled?: {};
    first?: {};
    before?: {};
    after?: {};
    last?: {};
}
```

#### `container` 

Define the element that contains all other elements

#### `wrapper`

Define an element that wraps all `link` elements

#### `link`

Define default link element

#### `active`

Define currently active link element

#### `disabled`

Define the element displayed between start middle and end

#### `first`

Define the first link element

#### `before`

Define the link element before the active link element


#### `after`

Define the link element after the active link element

#### `last`

Define last link element

## Custom Theme Examples

![Custom Examples](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/pagination/examples/custom-examples.PNG)

```
<Pagination url="/posts" total="9999" current="1000"
    theme={{
        container: {
            class: "flex items-center gap-1"
        },
        link: {
            class: "relative flex-nowrap inline-flex items-center px-3 py-1 rounded-3xl border text-sm font-medium"
        },
        active: {
            class: "relative flex-nowrap inline-flex items-center px-3 py-1 rounded-3xl border border-purple-400 text-sm font-medium bg-purple-500 text-white"
        },
        disabled: {
            text: "",
            class: "leading-none flex items-center px-3"
        }
    }}
/>
<Pagination url="/posts" total="31" current="9" start="1" end="1" middle="3"
    theme={{
        container: {
            style: "display:flex;align-items:center;gap:.25rem;"
        },
        active: {
            style: "cursor:pointer;position:relative;display:inline-flex;align-items:center;padding:.2rem.6rem;background-color:#0EA5E9;border-radius:50%;flex-wrap:nowrap;line-height:1.25rem;font-size:.875rem;font-weight:500;color:white;",
        },
        link: {
            style: "cursor:pointer;position:relative;display:inline-flex;align-items:center;padding:.2rem.6rem;flex-wrap:nowrap;line-height:1.25rem;font-size:.875rem;font-weight:500;"
        },
        first: {
            text: "<",
            style: "font-family:monospace;padding: 0 0.5rem;border-radius:50%;border: 1px solid #ccc;font-weight:bold;font-size:1rem;"
        },
        last: {
            text: ">",
            style: "font-family:monospace;padding: 0 0.5rem;border-radius:50%;border: 1px solid #ccc;font-weight:bold;font-size:1rem;"
        },
        disabled: {
            text: ""
        }
    }}
/>
```