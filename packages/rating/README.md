# @astro-bryceguy/rating

A component that uses stars to display a rating for reviews, products, comments, etc

## Features

- Shows a rate (2/5, 7.5/10, etc) using stars
- Supports displaying half stars
- Uses astro-icon to serve star icon svgs
- Fully customize every elements tag, text, innerHTML, and attributes using [astro-json-elements](https://github.com/BryceRussell/astro-json-element)

__NOTE:__ astro-json-elements can only be styled using inline styles or global stylesheets with classes, use [Tailwindcss](https://github.com/withastro/astro/tree/main/packages/integrations/tailwind#readme) for easy styling

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
```
<Rating max="10" rate="10" total="1289" defaults={true}/>
```

## astro-icon

Define the ```active```, ```half```, and ```inactive``` stars [astro-icons](https://github.com/natemoo-re/astro-icon#readme) properties inside of the ```icon``` prop

```
//Uses tailwindcss to style
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

## Examples

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