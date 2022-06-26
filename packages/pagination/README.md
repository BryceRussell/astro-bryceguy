# Astro Ryce Pagination

A pagination component that uses [astro-json-element](https://github.com/BryceRussell/astro-json-element) to give you full control over every aspect of your pagination element

## How to use

__Install package:__

```
npm i astro-ryce/pagination
```

![Default](https://raw.githubusercontent.com/BryceRussell/astro-ryce/master/packages/pagination/examples/default.PNG)

```
//Default
<Pagination url="/posts" total="22" current="11" />
```

## API

### Slots

#### Default

Children will be slotted after all page elements by default

#### first

Use slot "first" to slot children in front of any page elements

### Props

```
export interface Props {
	url: string;
	total: string|number;
	current: string|number;
	ends?: string|number;
	middle?: string|number;
	button?: {};
	active?: {};
	disabled?: {};
	style?: boolean;
	commas?: boolean;
	collapse?: boolean;
	[attrs: string]: any;
}
```

### url
Type|Default|Description
---|---|---
string||root url for page link: "blog/posts" --> "blog/posts/1", "blog/posts/2", etc

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
[astro-json-element](https://github.com/BryceRussell/astro-json-element) object||define the default button element using [astro-json-element](https://github.com/BryceRussell/astro-json-element) objects

### active
Type|Default|Description
---|---|---
[astro-json-element](https://github.com/BryceRussell/astro-json-element) object||define the active button element using [astro-json-element](https://github.com/BryceRussell/astro-json-element) objects

### disabled
Type|Default|Description
---|---|---
[astro-json-element](https://github.com/BryceRussell/astro-json-element) object||define the disabled button element using [astro-json-element](https://github.com/BryceRussell/astro-json-element) objects

### defaults
Type|Default|Description
---|---|---
boolean|true|uses built in default styling if true

### commas
Type|Default|Description
---|---|---
boolean|true|uses commas in page numbers if true

### collapse
Type|Default|Description
---|---|---
boolean|true|if true only the pages defined using the current, ends, and middle props will be shown, if false an element will appear for every page in the total

### ...attrs
Type|Default|Description
---|---|---
[astro-json-element](https://github.com/BryceRussell/astro-json-element) object||all other props will define the div wrapper using [astro-json-element](https://github.com/BryceRussell/astro-json-element) object attributes

## Examples

![Pagination](https://raw.githubusercontent.com/BryceRussell/astro-ryce/master/packages/pagination/examples/pagination.PNG)

```
<Pagination url="/posts" total="22" current="11"></Pagination>
<Pagination url="/posts" total="22" current="11" start="5" end="1" middle="1"></Pagination>
<Pagination url="/posts" total="22" current="11" start="1" end="5" middle="1"></Pagination>
<Pagination url="/posts" total="22" current="11" start="5" end="5" middle="1"></Pagination>
<Pagination url="/posts" total="22" current="11" start="1" end="1" middle="5"></Pagination>
<Pagination url="/posts" total="9999" current="1000"></Pagination>
<Pagination url="/posts" total="9999" current="1000" commas={false}></Pagination>
<Pagination url="/posts" total="12" current="6" collapse={false}></Pagination>
<Pagination url="/posts" total="12" current="6" style="display:flex;gap:.5rem;" defaults={false}></Pagination>
<Pagination {...{
    url: "/posts",
    total: "9999",
    current: "1000",
    defaults: false,
    class: "flex items-center gap-1",
    button: {
        class: "relative flex-nowrap inline-flex items-center px-2 py-1 rounded-3xl border text-sm font-medium"
    },
    active: {
        class: "relative flex-nowrap inline-flex items-center px-2 py-1 rounded-3xl border border-green-800 text-sm font-medium bg-green-700 text-white"
    },
    disabled: {
        text: "-",
        class: "relative flex-nowrap inline-flex items-center px-2 py-1 rounded-3xl border text-sm font-medium opacity-25"
    },
}}></Pagination>
```
