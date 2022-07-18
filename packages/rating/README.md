# @astro-bryceguy/dropdown

A dropdown component made using XElement

## Features

- Use the `options` prop to create a selection input
- Tab accessible
- Toggle focus locking
- Toggle collapse on focus lost
- Customizable
- Themes

## How to use

**Install:**

```
npm i @astro-bryceguy/dropdown
```

**Basic Dropdowns:**

![Basic Textbox](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/dropdown/examples/default-textbox.PNG)

![Basic Navigation](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/dropdown/examples/default-navigation.PNG)

**Themes:**

Use built in themes or create your own

![Tailwind Navigation](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/dropdown/examples/tailwind-hamburger.PNG)

![Tailwind Textbox](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/dropdown/examples/tailwind-textbox.PNG)


**Selection Input:**

![Tailwind Input](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/dropdown/examples/tailwind.PNG)

## Styling

**Using Props**:

Style your drop down using the `theme` prop using built in themes making your own

**Using a stylesheet**:

You can also import a style sheet using the following selectors for a global dropdown style

```
//All dropdown toggles
summary {
    display: flex;
    align-items: center;
    gap: .2rem;
}

//Remove default marker
summary::marker {
    content: none;
}

//Create custom marker
summary::before {
    content: '>';
    display: inline-block;
    font-family: monospace;
    font-weight: bold;
    font-size: 1.25rem;
}

//Style custom marker if open
details[open] summary::before {
    transform: rotate(90deg);
}

summary:focus {
    border-color: red;
}

//Style content element if focused
summary + *:focus-within {
    border-color: red;
}
```

## API

#### `is`

**Type**: `string`

**Default**: `menu`

Defines the tag for the dropdown's content element (the element being hidden)

#### `id`

**Type**: `string`

Set the id of the dropdown, used to create id for toggle and content elements

#### `text`

**Type**: `string`

Set the text inside of the toggle element

#### `value`

**Type**: `string`

Set the value of the dropdown, use `id` prop to retrieve value

`document.getElementByID('id').value`

#### `options`

**Type**: `{}`

Each key/value pair creates a button inside of the content element turning the dropdown into a user input with selectable options

`key`: Defines the name/text inside of the button
`value`: Defines the value that will be applied to the dropdown element

#### `lock`

**Type**: `boolean`

**Default**: `false`

Focus lock, if using tab to navigate you cannot leave dropdown unless you close it, tab navigation loop

#### `collapse`

**Type**: `boolean`

**Default**: `true`

Close dropdown when focus is lost

#### `theme`

**Type**: `string | {}`

Built in themes: `inline`, `tailwind`, `tailwindHamburger`

or make your own:

```
{
    container: {},
    toggle: {},
    content: {},
    options: {}
}
```

Customize the attributes of each elemenet inside of your drop down

```
<details {...container}>
    <summary {...toggle}>
    </summary>
    <{is} {...content}>
        <Button {...options}></Button>
    <{is}>
</details>
```


## Examples

![Custom Navigation](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/dropdown/examples/custom-navigation.PNG)

![Custom Textbox](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/dropdown/examples/custom-textbox.PNG)
