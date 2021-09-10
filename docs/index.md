# About

WVUI-next is a re-scaffolding of https://github.com/wikimedia/wvui using Vue 3
and Vite. Right now, it's just a playground for experimenting with new
technologies.

## The Wikimedia Design System

This component library works in tandem with the [Wikimedia Design Style Guide](https://design.wikimedia.org/style-guide/components/links.html), which documents all of our
design standards and decisions.

## Important links

- [MediaWiki's Vue docs](https://www.mediawiki.org/wiki/Vue.js)
- [Learn about the Wikimedia Design Systems Team](https://www.mediawiki.org/wiki/Design_Systems_Team)
- [Our Phabricator board](https://phabricator.wikimedia.org/project/view/5183/)

## About VitePress

Here's some of the stuff you can do in markdown:

### Table of contents

You can put as many heading levels as you want in the sidebar, and you can also
add a table of contents to the page with a single line of markdown (and it's
configurable).

[[toc]]

### Vue in markdown

You can use any Vue features within markdown files. See components for examples.

### Importing code snippets

You can import code and display it, which might be useful for avoiding redundant
code blocks when both displaying a component and showing the code.

### Code blocks with line highlighting

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### Styled messages

These come with VitePress (and are using our color palette). You can also use
Vue components in markdown, so we could use our own Message Vue component once
it exists.

::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

### GitHub-style tables

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### Emoji

Totally necessary :joy_cat: :skull:
