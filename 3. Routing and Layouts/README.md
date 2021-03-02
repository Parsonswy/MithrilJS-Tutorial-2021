# Segment 3 - Mithril Router and Effective Templating with Layouts
This segment of the series covers how to use the Mithril router to create an SPA and how you can use layouts for more flexibile templating and code reuse.

- **[Mithril's Router](https://mithril.js.org/route.html)** is the final peice to making a single page application. Up to this point we were easily able to changes to the page with Mithril's rendering engine through databinding and reacting to events on the page. Now we can do that, but do so in response to url changes so it appears to the user that they are changing pages and navigating a traditional website.

  See [index.html](https://github.com/Parsonswy/MithrilJS-Tutorial-2021/tree/main/3.%20Routing%20and%20Layouts/index.html) for our implementation with the Mithril router.

	```javascript
	/**
	 * Simple router example
	 */
	m.route.prefix = '#!'; // Default setting, changing to anything that doesn't involve the '#' will require server-side changes.
	m.route(document.body, '/', {
		'/': { // Our default route, uses the layout and slots in NavigationTree and Wikipage
			render: () => m(LayoutExample, m(NavigationTree), m(WikiPage)),
		},

		// Simple component syntax, no layout
		'/about-us': AboutUsPage,

		// Route with url parameter (dynamic segment). Renders employee profile for employee with id vnode.attrs.employee
		'/profile/:employee/settings': {
			render: (vnode) => m(ProfileSettings, { empId: vnode.attrs.employee })
		},
	});

	// To access empId in the ProfileSettings component
	const ProfileSettings = {
		view: (vnode) => {
			vnode.attrs.empId; // Will have value passed by vnode.attrs.employee above

			// Alternativly
			m.route.params.employee // Will also have the value, but
			/**
			 * This is generally not how you should access route parameters unless it will be very complicated
			 * to pass the value through several layers of components, and you're ok with the component only working
			 * on routes where the url parameter ':employee' is defined. If you use m.route.param.employee in a component,
			 * the component is rendered on a route where ':employee' is not set, your page might break if you don't account
			 * the value being undefined.
			 */
		},
	};

- **Layouts** are special kind of template that we make to create a general look or consistent 'outer shell' for our pages. A layout usually has common page elements in it like the header, navigation elements, and the footer. Layouts have slots in them where we can insert other templates dynamically. A given project may have many layouts depending on what you use them for and the size and design of the website.

  See [default-layout.js](https://github.com/Parsonswy/MithrilJS-Tutorial-2021/tree/main/3.%20Routing%20and%20Layouts/default-layout.js) for our layout implementation.

	```javascript
	/**
	 * A simple 2-pane layout
	 */
	const LayoutExample = {
		view: (vnode) => {
			return m('div.example-layout', [
				m('div.left-half'. vnode.children[0]),
				m('div.right-half'. vnode.children[1]),
			]);
		}
	}

	/**
	 * To use this layout...
	 */
	m(LayoutExample, [
		// This element goes into 'left-half'
		m(NavigationTree),

		//This element goes into 'right-half'
		m(WikiPage)
	]);
	```