
export const inline = {
    container: {
        style: 'display:flex;flex-direction:column;'
    },
    toggle: {
        style: 'cursor:pointer;position:relative;padding:.2rem .5rem .25rem .5rem;border-radius:5px;border: 2px solid #E5E7EB;user-select:none;white-space:nowrap;line-height:1;'
    },
    content: {
        style: "z-index:10;position:absolute;margin-top:.25rem;display:flex;flex-direction:column;gap:3px;padding:1px;background-color:#fff;border-radius:5px;border:2px solid #E5E7EB;"
    },
    options: {
        style: "user-select:none;padding:.2rem .5rem;"
    }
}

export const tailwind = {
    container: {
        class: 'group flex items-center hover:!bg-transparent',
    },
    toggle: {
        class: "cursor-pointer flex items-center gap-1 px-2 pb-1 pt-0.5 rounded-md border-2 select-none leading-none whitespace-nowrap marker:content-none before:inline-block before:leading-none before:font-mono before:font-bold before:text-md before:content-['>'] focus-visible:outline-none focus:border-sky-600 hover:border-sky-600 group-open:before:rotate-90"
    },
    content: {
        class: 'z-10 absolute flex flex-col justify-start h-auto mt-1 p-0.5 bg-white rounded-md border-2 focus-within:border-sky-600 [&>*]:rounded-[4px] [&>*]:px-2 [&>*]:py-0.5 [&>*]:text-left focus-within:[&>*]:outline-none hover:[&>*]:bg-neutral-100 focus:[&>*]:bg-neutral-100',
    },
    options: {}
}

export const tailwindHamburger = {
    container: {
        class: 'group flex items-center',
    },
    toggle: {
        class: "cursor-pointer relative flex items-center gap-1 px-2 pt-0.5 pb-1 rounded-md border-2 select-none leading-none whitespace-nowrap text-lg text-sky-600 marker:content-none before:leading-none before:text-3xl before:content-['☰'] focus-visible:outline-none focus:border-sky-600 group-open:border-sky-600 group-open:delay-1000 group-open:ease-linear group-open:animate-pulse"
    },
    content: {
        class: 'text-center z-10 overflow-hidden absolute flex flex-col justify-start mt-1 rounded-md bg-white border-2 focus-within:border-sky-600 [&>*]:px-2 [&>*]:py-0.5 focus-within:[&>*]:outline-none hover:[&>*]:bg-neutral-100 focus:[&>*]:bg-neutral-100'
    },
    options: {}
}