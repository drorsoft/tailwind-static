import type {Config} from 'tailwindcss'

export default {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {},
    },
    plugins: [],
    safelist: [{
        // display 6.08 kB
        pattern: /^(display|flex|grid|inline|block|contents|hidden|table|table-row|table-cell|flow-root|inline-block|inline-flex|inline-grid)/,
    }, {
        //position 1.00 kB
        pattern: /^(static|fixed|absolute|relative|sticky)/,
    }, {
        // width and height 11.20 kB
        pattern: /^(w-|h-|min-w-|min-h-|max-w-|max-h-)/,
    }, {
        // margins and paddings  26.23 kB
        pattern: /^(-?)(m-|mt-|mr-|mb-|ml-|mx-|my-|p-|pt-|pr-|pb-|pl-|px-|py-)/,
    }, {
        // position 8.77 kB
        pattern: /^(-?)(top|bottom|left|right)/,
    }, {
        // transition & animation  3.26 kB
        pattern: /^(duration-|ease-|delay|transition-|animate)/,
    }, {
        // border and shadow (no colors) 5.02 kB
        pattern: /^(border-\w(-\w)?$|shadow[\w-]{0,6}$)/,
    }, {
        // more display stuff 4.74 kB
        pattern: /^(col-|row-|overflow-)/,
    }, {
        //more stuff I needed  5.23 kB
        pattern: /^(visible|invisible|hidden|z-|order-|cursor|rotate|opacity)/,
    }, {
        //flex stuff
        pattern: /^(justify-|align|items-|self-|gap-)/,
    }, {
        //flex stuff
        pattern: /^(text-[\w-]{0,3}$|text-base)/,
    }],
    // not included: colors, inset, ring, shadow, stroke, text, transform,
    // translate, scale, rotate, skew,   outline, pointer, resize, select, sr-only,
    // not-sr-only, appearance, background,  divide, ring
} satisfies Config

