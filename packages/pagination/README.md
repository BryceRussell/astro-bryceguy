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
        text: "",
        class: "leading-none flex items-center px-3"
    },
}}></Pagination>
```

## API

## Slots

### Default

Children will be slotted after all page number elements by default

### first

Use slot "first" to slot children in front of all page number elements

## Props

```
export interface Props {
	url: string;
	total: string|number;
	current: string|number;
	start: string|number;
	end?: string|number;
	middle?: string|number;
	button?: {};
	active?: {};
	disabled?: {};
	defaults?: boolean;
	commas?: boolean;
	collapse?: boolean;
	[attrs: string]: any;
}
```

### url
Type|Default|Description
---|---|---
string||root url for page link: ```"blog/posts"``` -> ```"blog/posts/1", "blog/posts/2"```, etc

### total
Type|Default|Description
---|---|---
string \| number||total number of pages

### current
Type|Default|Description
---|---|---
string \| number||current page number

### start
Type|Default|Description
---|---|---
string \| number|2|number of pages to display at the start

### end
Type|Default|Description
---|---|---
string \| number|2|number of pages to display at the end

### middle
Type|Default|Description
---|---|---
string \| number|2|number of pages to display on either side of the current active page

### button
Type|Default|Description
---|---|---
[astro-json-element](https://github.com/BryceRussell/astro-json-element) object||define the default page number element using [astro-json-element](https://github.com/BryceRussell/astro-json-element) objects

### active
Type|Default|Description
---|---|---
[astro-json-element](https://github.com/BryceRussell/astro-json-element) object||define the active page number element using [astro-json-element](https://github.com/BryceRussell/astro-json-element) objects

### disabled
Type|Default|Description
---|---|---
[astro-json-element](https://github.com/BryceRussell/astro-json-element) object||define the disabled page number element using [astro-json-element](https://github.com/BryceRussell/astro-json-element) objects

### defaults
Type|Default|Description
---|---|---
boolean|false|uses built in default styling if true

### commas
Type|Default|Description
---|---|---
boolean|true|uses commas in page numbers if true

### collapse
Type|Default|Description
---|---|---
boolean|true|if true only the pages defined using the current, ends, and middle props will be shown, if false a page number element will appear for every page number

### ...attrs
Type|Default|Description
---|---|---
[astro-json-element](https://github.com/BryceRussell/astro-json-element) object||all other props will define the div wrapper using [astro-json-element](https://github.com/BryceRussell/astro-json-element) object attributes
