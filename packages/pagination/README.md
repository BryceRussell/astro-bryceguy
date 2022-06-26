# Astro Ryce Pagination

## How to use

__Install package:__

```
npm i astro-ryce/pagination
```

__Example:__

![Pagination](https://raw.githubusercontent.com/BryceRussell/astro-ryce/master/packages/pagination/examples/pagination.PNG)

```
<Pagination url="" total="99999" current="999" ends="2" middle="2"></Pagination>
<Pagination url="" total="99999" current="999" ends="2" middle="2" commas={false}></Pagination>
<Pagination url="" total="99" current="33" ends="1" middle="3"></Pagination>
<Pagination url="" total="99" current="66" ends="4" middle="1"></Pagination>
<Pagination url="" total="8" current="3" collapse={false}></Pagination>
<Pagination url="" total="99999" current="999" ends="2" middle="2" style={false}></Pagination>
```

## API

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

### ends
Type|Default|Description
---|---|---
string \| number|2|number of pages to display at start and end

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

### style
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
