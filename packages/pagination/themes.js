export const inline = {
    container: {
        style: "font-family:Arial;display:flex;justify-content:center;align-items:center;gap:.25rem;"
    },
    link: {
        style: "position:relative;display:inline-flex;align-items:center;padding:.2rem.6rem;border-radius:.2rem;border: 1px solid #ccc;flex-wrap:nowrap;line-height:1.25rem;font-size:.875rem;font-weight:500;color:#000;",
        onmouseover: "this.style.textDecoration='underline';",
        onmouseout: "this.style.textDecoration='none';",
    },
    active: {
        style: "position:relative;display:inline-flex;align-items:center;padding:.2rem.6rem;border-radius:.2rem;border: 1px solid #ccc;flex-wrap:nowrap;line-height:1.25rem;font-size:.875rem;font-weight:500;border:1px solid #ccc;color:#0EA5E9;"
    },
    disabled: {
        text: "...",
        style: "position:relative;display:inline-flex;align-items:center;padding:.2rem.6rem;border-radius:.2rem;border: 1px solid #ccc;flex-wrap:nowrap;line-height:1.25rem;font-size:.875rem;font-weight:500;opacity:.25;",
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
            slot: "before",
            text: "Page",
            style: "font-weight:normal"
        },
        _of: {
            text: "of",
            style: "font-weight:normal"
        }
    },
    disabled: {
        text: ""
    },
    before: {
        text: "<",
        style: "font-family:monospace;padding: 0 0.5rem;border-radius:3px;border: 1px solid #ccc;font-weight:bold;font-size:1rem;"
    },
    after: {
        text: ">",
        style: "font-family:monospace;padding: 0 0.5rem;border-radius:3px;border: 1px solid #ccc;font-weight:bold;font-size:1rem;"
    },
}

export const tailwind = {
    container: {
        style: "display:flex;justify-content:center;align-items:center;gap:.25rem;"
    },
    link: {
        style: "cursor:pointer;position:relative;display:inline-flex;align-items:center;padding:.2rem.6rem;border-radius:.2rem;border: 1px solid #ccc;flex-wrap:nowrap;line-height:1.25rem;font-size:.875rem;font-weight:500;",
        onmouseover: "this.style.textDecoration='underline';",
        onmouseout: "this.style.textDecoration='none';",
    },
    active: {
        style: "cursor:pointer;position:relative;display:inline-flex;align-items:center;padding:.2rem.6rem;border-radius:.2rem;border: 1px solid #ccc;flex-wrap:nowrap;line-height:1.25rem;font-size:.875rem;font-weight:500;border:1px solid #ccc;color:#0EA5E9;",
        onmouseover: "this.style.textDecoration='underline';",
        onmouseout: "this.style.textDecoration='none';",
    },
    disabled: {
        text: "...",
        style: "cursor:pointer;position:relative;display:inline-flex;align-items:center;padding:.2rem.6rem;border-radius:.2rem;border: 1px solid #ccc;flex-wrap:nowrap;line-height:1.25rem;font-size:.875rem;font-weight:500;cursor:default;opacity:.25;",
    },
    first: {},
    before: {},
    after: {},
    last: {},
}