# Video Index
1. [Mithril Component and Templating Syntax](https://youtu.be/PosZXyainoA)
2. [Autoredraw and Data Binding](https://youtu.be/ciEA61XCOjw)

# Prereiquites Knowledge Resources
If some of the HTML, CSS, or JS concepts in the videos were new to you, I encourge reviewing the linked content. It is a bit lengthy, but this knowledge is generally necessary in later segments and extends beyond just making SPAs. Resources are available in text & video format. Choose whichever you prefer.

**Videos**
- [An introduction to HTML & CSS](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G), by The Net Ninja.
- [An introduction to Javascript](https://www.youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc), by The Net Ninja.

**Text & Documentation**
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), by The MDN.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), by the MDN.
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), by the MDN.

W3Schools has slightly more digestable documentation and exercises for those less comfortable with the MDN material, but know that W3Schools pages sometimes lack detail and nuance that MDN includes. Both are valid references, but I recommend looking to MDN for more advanced or wholistic explinations.

- [HTML](https://www.w3schools.com/html/default.asp), by W3Schools.
- [CSS](https://www.w3schools.com/css/default.asp), by W3Schools.
- [Javascript](https://www.w3schools.com/js/default.asp), by W3Schools.

# What is Data Binding / Reactivity?
Linking an initial value to one or more dependent values, such that the dependent values are always sychronized with the initial value (one-way). In the case of a webpage, that usually means linking the value of a variable to something that gets updated on the screen. Everytime that value changes in Javascript, the value in the DOM and therefor the rendered page should change. For this specific implementation of data binding, Javascript expression to DOM, web developers usually use the term 'reactivity' or 'reactivity engine.' Angular, Mithril, React, and Vue are all examples of frameworks that function as 'reactivity engines' at _runtime_ and handle this process for you.

# What is a single page application (SPA)?
A single page application is a webpage who's entire content is created by code which relies on a reactivity engine to dynamically change page content. These changes can be as minor as replacing a single character or as major as replacing everything mounted by `document.body`. This extends to page navigation which is instead acheived by replacing significant portions of the DOM tree instead of actually navigating to a new HTML document. Using the 'hashbang' (#!) or browser history API it may still apear to the user like the page has changed because the URL in their browser has channged, but this is just a deception orchistrated by the reactivity engine.

# Mithril Embed Code
```html
<head>
	<script type="text/javascript" src="https://unpkg.com/mithril/mithril.js"></script>
</head>
```

# Preformatted code block in markdown
```
```javascript
console.log("hello world");
if (test) {
	// stuff
}
\``` # without the '\'.
```