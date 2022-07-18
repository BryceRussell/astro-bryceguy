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

```
<Dropdown collapse={false}  is="section" id="default-text" text="Hidden Text">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non commodi repellat officiis dolorum quis magnam pariatur saepe dignissimos veniam? Perspiciatis culpa autem id vitae ducimus odit exercitationem commodi eos dolorum, magni, quos facilis repellat optio maxime sunt blanditiis similique architecto provident magnam illum. Eum quidem soluta pariatur vero, enim architecto?</p>
</Dropdown>
```

![Basic Navigation](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/dropdown/examples/default-navigation.PNG)

```
<Dropdown id="default-nav" text="Navigation">
    <a href="/">Link 1</a>
    <a href="/">Link 2</a>
    <a href="/">Link 3</a>
</Dropdown>
```

**Themes:**

Use built in themes or create your own

![Tailwind Navigation](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/dropdown/examples/tailwind-hamburger.PNG)

```
<Dropdown id="tailwind-hamburger" theme="tailwindHamburger">
    <a href="/">Home</a>
    <a href="/">Products</a>
    <a href="/">Services</a>
    <a href="/">About</a>
    <a href="/">Contact Us</a>
</Dropdown>
```

![Tailwind Textbox](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/dropdown/examples/tailwind-textbox.PNG)

```
<Dropdown theme="tailwind" collapse={false} is="section" id="tailwind-text" text="Tailwind Hidden Text">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non commodi repellat officiis dolorum quis magnam pariatur saepe dignissimos veniam? Perspiciatis culpa autem id vitae ducimus odit exercitationem commodi eos dolorum, magni, quos facilis repellat optio maxime sunt blanditiis similique architecto provident magnam illum. Eum quidem soluta pariatur vero, enim architecto?</p>
</Dropdown>
```


**Selection Input:**

![Tailwind Input](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/dropdown/examples/tailwind.PNG)

```
<Dropdown
    lock={true}
    theme="tailwind"
    id="tailwind-input"
    text="Tailwind Input"
    value="option-1"
    options={{
        'Option 1': 'option-1',
        'Option 2': 'option-2',
        'Option 3': 'option-3',
        'Option 4': 'option-4',
        'Option 5': 'option-5'
    }} 
/>
```

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


## Custom Theme Examples

![Custom Navigation](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/dropdown/examples/custom-navigation.PNG)
```
<Dropdown
    id="custom-nav"
    text="Settings"
    theme={{
        container: {
            class: 'group flex items-center',
        },
        toggle: {
            class: "relative flex items-end gap-1 px-3 py-1 rounded-sm border-2 select-none leading-none whitespace-nowrap text-lg marker:content-none after:inline-block after:leading-none after:font-mono after:font-bold after:text-sm after:content-['...'] focus-visible:outline-none focus:border-fuchsia-800 group-open:after:animate-pulse"
        },
        content: {
            class: 'z-10 absolute flex flex-col justify-start mt-1 rounded-sm bg-white border-2 border-gray-100 focus-within:border-fuchsia-800 focus-within:[&>*]:outline-none hover:[&>*]:bg-gray-100 focus:[&>*]:bg-gray-100'
        },
        options: {
            class: 'overflow-hidden px-2 py-0.5 hover:bg-neutral-100 text-left'
        }
    }}
>
    <a href="/" class="px-2 py-0.5 hover:bg-gray-50">Account</a>
    <a href="/" class="px-2 py-0.5 hover:bg-gray-50">Schedule</a>
    <a href="/" class="px-2 py-0.5 hover:bg-gray-50">General</a>
    <a href="/" class="px-2 py-0.5 hover:bg-gray-50">Files</a>
    <a href="/" class="px-2 py-0.5 hover:bg-gray-50">Theme</a>
</Dropdown>
```

![Custom Textbox](https://raw.githubusercontent.com/BryceRussell/astro-bryceguy/master/packages/dropdown/examples/custom-textbox.PNG)

```
<Dropdown
    collapse={false}
    is="section"
    id="custom-text"
    text="Hidden Textbox"
    theme={{
        container: {
            class: 'group flex items-center w-6/12',
        },
        toggle: {
            class: "flex items-center gap-1 px-2 pt-0.5 pb-1 bg-fuchsia-800 rounded-md group-open:rounded-t-md group-open:rounded-b-none select-none leading-none whitespace-nowrap text-white text-xl marker:content-none before:inline-block before:leading-none before:font-mono before:font-bold before:content-['>'] focus-visible:outline-none group-open:before:rotate-90"
        },
        content: {
            class: 'flex flex-col justify-start bg-white rounded-b-md border-2 border-fuchsia-100 text-fuchsia-900 focus-within:border-fuchsia-800 [&>*]:px-2 [&>*]:py-0.5 [&>*]:text-left focus-within:[&>*]:outline-none'
        },
        options: {}
    }}
>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis culpa facilis nesciunt harum assumenda, velit quidem, quas quasi quod excepturi dolorum. Eos fugiat obcaecati quae in, iste nobis fugit cumque quos vitae totam! A sunt corrupti blanditiis, sequi perferendis quos earum. Sit nihil provident dolor? Aspernatur dolorum eos fuga.</p>
</Dropdown>
```
