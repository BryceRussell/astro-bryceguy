# @astro-bryceguy/rating

A component that uses stars to display a rating for reviews, products, comments, etc

## Features

- Shows a rate (2/5, 7.5/10, etc) using stars
- Supports displaying half stars
- Uses astro-icon to serve star icon svgs
- Fully customize every elements tag, text, innerHTML, and attributes using [astro-json-elements](https://github.com/BryceRussell/astro-json-element)

__NOTE:__ astro-json-element objects can only be styled using inline styles or global stylesheets and classes, this project uses [Tailwindcss](https://github.com/withastro/astro/tree/main/packages/integrations/tailwind#readme) to make styling easier

## How to use

__Install:__

```
npm i @astro-bryceguy-rating
```

__Add to astro config:__

```
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
```


__Default Styling:__

![default](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/rating/examples/default.PNG)

```
<Rating rate="4.5" total="56" defaults={true}/>
```

## astro-icon

Use [astro-icons](https://github.com/natemoo-re/astro-icon#readme) to customize the icons

![hearts](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/rating/examples/hearts.PNG)

```
//Using tailwindcss classes to style
<Rating {...{
    rate: "4.5",
    max: "9",
    class: "flex items-center gap-1",
    icon: {
        active: {
            name: "line-md:heart-filled"
        },
        half: {
            name: "line-md:heart-filled-half"
        },
        inactive: {
            name: "line-md:heart"
        },
        class: "text-pink-300 w-4 h-4"
    }
}}/>
```

## API

#### `max`

**Type**: `string | number`
**Default**: `5`

Max number of stars to display

#### `rate`

**Type**: `string | number`
**Default**: `0`

A fraction of max, number of activated stars


#### `total`

**Type**: `string | number`


Total number of ratings

if `defaults` is true it creates a span element that displays the total: `(1,503)`

Use `_span` key to override the default span element with a astro-json-element child

Remove commas by setting `commas` to false

#### `icons`

**Type**: `object`

**Default**:
```
{
    tag: "div",
    style: icons&&"display:flex;align-items:center;",
    ...icons
}
```

#### `icon`

**Type**: `object`

**Default**:
```
{
    active: {
        name: "star-active"
    },
    half: {
        name: "star-half"
    },
    inactive: {
        name: "star-inactive"
    },
    style: `min-height:.5rem;min-width:.5rem;${defaults?"height:1rem;width:1rem;":""}`
}
```

Define the props that will be shared with all across all icon svgs

Define icon specific props using [astro-icon](https://github.com/natemoo-re/astro-icon#readme) for the `active`, `half`, and `inactive` icon props

The default icon names: `star-active`, `star-half`, and `star-inactive` take advantage of the [local icons](https://github.com/natemoo-re/astro-icon#local-icons) feature in astro-icon to serve a local icon svg by default


#### `commas`

**Type**: `boolean`
**Default**:`true`

Toggles commas on string numbers for the default span element `_span` when using the `total` prop and `defaults` set to true

#### `defaults`

**Type**: `boolean`
**Default**:`false`

If true use the built in default in-line styling and `_span` element for displaying total number of ratings

#### `...attrs`

**Type**: `{}`

Any of the other keys not above will be added as a prop to the main rating container's astro-json-element


## Examples

![custom_1](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/rating/examples/custom_1.PNG)

```
<Rating {...{
    rate: "3",
    max: "5",
    tag: "section",
    class: "flex flex-col-reverse items-center py-2 px-3 rounded-md bg-neutral-50 border border-blue-300",
    icon: {
        active: {
            name: "mdi:star"
        },
        half: {
            name: "mdi:star-half-full"
        },
        inactive: {
            name: "mdi:star-outline"
        },
        class: "text-blue-300 w-4 h-4"
    }
}}/>
```

![custom_2](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/rating/examples/custom_2.PNG)


```
<Rating {...{
    rate: "7.5",
    max: "10",
    class: "flex flex-col-reverse items-end gap-1 py-1 px-2 bg-neutral-50",
    _span: {
        tag: "span",
        text: "873",
        class: "text-xs text-blue-300"
    },
    icons: {
        class: "flex flex-row-reverse items-center"
    },
    icon: {
        half: {
            style: "transform:scale(-1, 1);"
        },
        class: "text-yellow-300 w-4 h-4"
    }
}}/>
```

![custom_3](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/rating/examples/custom_3.PNG)

```
<Rating {...{
    rate: "2.5",
    max: "5",
    class: "flex flex-row-reverse items-center gap-1 py-1 px-2 rounded-md border",
    _span: {
        tag: "span",
        text: "72",
        class: "text-xs text-blue-300"
    },
    icons: {
        class: "flex items-center"
    },
    icon: {
        active: {
            name: "mdi:star"
        },
        half: {
            name: "mdi:star-half-full"
        },
        inactive: {
            name: "mdi:star-outline"
        },
        class: "text-yellow-300 w-4 h-4",
    }
}}/>
```

![custom_4](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/rating/examples/custom_4.PNG)


```
<Rating {...{
    rate: "2.5",
    max: "3",
    class: "flex flex-col-reverse items-center py-1 px-2 rounded-md border border-pink-300",
    _span: {
        tag: "span",
        text: "Healthy!",
        class: "text-xs text-pink-300"
    },
    icon: {
        active: {
            name: "line-md:heart-filled"
        },
        half: {
            name: "line-md:heart-filled-half"
        },
        inactive: {
            name: "line-md:heart"
        },
        class: "text-pink-300 w-4 h-4"
    }
}}/>
```