export const inline = {
    container: {
        style: "font-family:Arial;display:flex;justify-content:center;align-items:center;gap:.25rem;"
    },
    link: {
        style: "position:relative;display:inline-flex;align-items:center;padding:.2rem.6rem;border-radius:.2rem;border: 2px solid #F4F4F5;flex-wrap:nowrap;line-height:1.25rem;font-size:.875rem;font-weight:500;color:#000;",
        onmouseover: "this.style.color='#0284C7';",
        onmouseout: "this.style.color='#000';",
    },
    active: {
        style: "position:relative;display:inline-flex;align-items:center;padding:.2rem.6rem;border-radius:.2rem;border: 2px solid #F4F4F5;flex-wrap:nowrap;line-height:1.25rem;font-size:.875rem;font-weight:500;border-color:#0284C7;color:#0284C7;"
    },
    disabled: {
        text: "...",
        style: "position:relative;display:inline-flex;align-items:center;padding:.2rem.6rem;border-radius:.2rem;border: 2px solid #F4F4F5;flex-wrap:nowrap;line-height:1.25rem;font-size:.875rem;font-weight:500;opacity:.25;",
    },
    first: {},
    before: {},
    after: {},
    last: {},
}

export const simple = {
    container: {
        style: "display:flex;align-items:center;"
    },
    active: {
        style: "display:flex;align-items:center;gap:.5rem;margin: 0 3rem;font-weight:bold;",
        _page: {
            tag: "span",
            slot: "first",
            text: "Page",
            style: "font-weight:normal;"
        },
        _of: {
            tag: "span",
            text: "of",
            style: "font-weight:normal;"
        }
    },
    disabled: {
        text: ""
    },
    before: {
        text: "<",
        style: "font-family:monospace;padding: 0 0.5rem;border-radius:3px;border: 2px solid #F4F4F5;font-size:1rem;"
    },
    after: {
        text: ">",
        style: "font-family:monospace;padding: 0 0.5rem;border-radius:3px;border: 2px solid #F4F4F5;font-size:1rem;"
    },
}

export const tailwind = {
    container: {
        class: "font-[Arial] flex justify-center items-center gap-1"
    },
    link: {
        class: "relative inline-flex items-center flex-nowrap py-[.2rem] px-[.6rem] rounded-[3px] border-2 border-gray-100 text-sm text-black focus:border-sky-600 hover:text-sky-600",
    },
    active: {
        class: "relative inline-flex items-center flex-nowrap py-[.2rem] px-[.6rem] rounded-[3px] border-2 border-sky-600 text-sm text-sky-600",
    },
    disabled: {
        text: "...",
        class: "opacity-25 relative inline-flex items-center py-[.2rem] px-[.6rem] rounded-[3px] border-2 border-gray-100 text-sm text-black",
    },
    first: {},
    before: {},
    after: {},
    last: {},
}