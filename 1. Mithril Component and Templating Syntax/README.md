# Segment 1 - Mithril Component and Templating Syntax
This segment will cover two key concepts in Mithril: Components and Vnodes. Many SPA or templating frameworks share these concepts so if you're framiliar with other implementations of this paradigm, many of the concepts probably transfer.

- **[Components](https://mithril.js.org/components.html)** are the unit of organization in Mithril. A component is similar to a class in object oriented programming. In Mithril, a component is like a template or blueprint that can be created zero or more times. Once rendered, a component 'becomes' a Vnode. You can think of components as existing primarly in code.

- **[Vnodes](https://mithril.js.org/vnodes.html)** are components that have been instantiated, meaning they have been rendered to the page and exist in memory. One component may have several coresponding vnodes. Each Vnode has its own state (variable values) and can use those values in it's `view()` method which is where the HTML template is defined. If you're framiliar with object oriented programming, vnodes are like instantiated objects.

- **[HTML to Hyperscript](https://arthurclemens.github.io/mithril-template-converter/?#)** is the website demoed for converting HTML markdown to Hyperscript.