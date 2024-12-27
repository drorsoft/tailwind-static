# Tailwind-static


## Motivation
While  working on a legacy project was looking for a way to add Tailwind CSS to the project without the need to install the whole package.

## Recommended way

The official  [recommended option is from a CDN](https://tailwindcss.com/docs/installation/play-cdn).


## Problems

I don't like it for several reasons, mainly that I don't have autocomplete options in my IDE, and that I don't want to add another CDN To the site.

## Optional solution

This repo is a simple way to add Tailwind CSS to your project without the need to install the whole package.
You can use the `tailwind.css` and compile only some utils classes. 

Use it only if there is no other option.

## How to use it

1. Clone the repo
2. Run `npm install`
3. Edit the `tailwind.config.js` file to add the classes you want to use 
4. Run `npm run build`
5. Copy the `output/tailwind-utils.css` file to your project

## Configuraion

So what we're ended up doing was compiling down just the classes we needed. 
I'll write my findings in case it could help anyone.

You can get tailwind to compile classes that are not in you project by using the [safelist](https://tailwindcss.com/docs/content-configuration#using-regular-expressions) option in the configuration.
it's possible to define regular expression that tells Tailwind what to compile anyway. I started another blank project with up to date node (v20).

So when I compiled ALL the classes, I got a css file of 22Mb.

I've tried different patterns to include so the file could contain just the "basic" 
(very subjective) things I needed, and with the following patterns, I got a file of 6.08 kB.

```typescript
export default {
  content: ['./index.html'],
  theme: {
    extend: {},
  }, 
  plugins: [], 
  safelist: [{
    // display 6.08 kB
    pattern: /^(display|flex|grid|inline|block|contents|hidden|table|table-row|table-cell|flow-root|inline-block|inline-flex|inline-grid)/,
  }, 
{
    //position 1.00 kB
    pattern: /^(static|fixed|absolute|relative|sticky)/,
}, 
{
    // width and height 11.20 kB
    pattern: /^(w-|h-|min-w-|min-h-|max-w-|max-h-)/,
}, 
{
    // margins and paddings  26.23 kB
    pattern: /^(-?)(m-|mt-|mr-|mb-|ml-|mx-|my-|p-|pt-|pr-|pb-|pl-|px-|py-)/,
}, 
{
    // position 8.77 kB
    pattern: /^(-?)(top|bottom|left|right)/,
}, 
{
    // transition & animation  3.26 kB
    pattern: /^(duration-|ease-|delay|transition-|animate)/,
}, 
{
    // border and shadow (no colors) 5.02 kB
    pattern: /^(border-\w(-\w)?$|shadow[\w-]{0,6}$)/,
}, 
{
    // more display stuff 4.74 kB
    pattern: /^(col-|row-|float|clear|overflow-)/,
}, 
{
    //more stuff I needed  5.23 kB
    pattern: /^(visible|invisible|hidden|z-|order-|cursor|rotate|opacity)/,
}],
};
```
The complete CSS file size was: 56.79 kB │ gzip: 10.85 kB and that is something I could live with.

I added some more classes as time went by, but the file size is still under 100kB.

