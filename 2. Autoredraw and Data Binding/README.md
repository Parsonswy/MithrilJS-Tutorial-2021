# Segment 2 - Mithril Autoredraw and Data Binding
This segment will touch on the heart of Mithril - the autoredraw system. The autoredraw system is what powers the data binding and reactivity concepts that make Javascript applet development easier and SPA's possible.

- **[Autoredraw](https://mithril.js.org/autoredraw.html)** is the process by which Mithril takes the template(s) you have created and gets them on the screen, and then continues to update them whenever variable or computed values are changed. Most reactivity frameworks are differentiated by how they trigger and perform this process. Mithril opts for an event-driven approach that with virtual DOM-diffing. That means that redraws happen based off of events rather than variable updates. Those events are:
	- An event listener attatched to a vnode is called.
	  ```javascript
		m('input[type=button]', {
			onclick: () => {
				doSometStuff();
				// A redraw would be scheduled for sometime afer the onclick() function finished executing
			},
		})
		```
	- [`m.redraw()`](https://mithril.js.org/redraw.html) is called.
	- An [`m.request()`](https://mithril.js.org/request.html) resolves.

	*A redraw would be scheduled* means that redraws are not sychronous. Redraws are more or less sychronized with `window.requestAnimaitonFrame()`. Mithril debounces redraw requests internally to make sure that the DOM is not being updated faster than is necessary. This generally just means as fast as the user's screen can update.

- Databinding just means tying the value of data stored in one place to a copy of that data somewhere else. In the web-page scenario this usually means tying the value of a variable to one or more display locations on the screen, or typing the value of something on the screen to a variable. Mithril handles the variable-to-screen scenario for us with autoredraw. The second one can be easily acheived through a handful of methods, the most straight forward being a native JS event listener.
	```javascript
	/*
		Two-way data-bind example
	*/
	const MyComponent = {
		oninit: (vnode) => {
			vnode.state.first_name = '',
		},

		view: (vnode) => {
			return m('input[type=text]', {
				// Whenever text is entered, the value in first_name will be updated
				oninput: (e) => { vnode.state.first_name = e.target.value; },

				/*
					With this, we can also update the value of first_name somewhere else,
					and then update the contents of the textbox after a redraw.
				*/ 
				value: vnode.state.first_name,
				/*
					Wait. It seems weird that we are updating first_name oninput, then triggering a redraw
					which updates value to be first_name.

					Yes, it is a bit strange, but is technically ok. Since the oninput value updates the
					value of first_name before the redraw tries to read the value of first_name when redering
					the view(), it means that this isn't actually a visible side-effect. The vnode diffing 
					process also means that input.value isn't technically updated because the oninput is what
					brought the virtual tree into sync with the actual tree. Their values are equal now so 
					the diff will see nothing to update and skip over that node.

					This can be useful for input validation though. Since your view() is automatically 
					redrawn everytime the user types in the textbox, you can easily change the look of
					the form based on the validity of user input. The same principle applies for styling 
					phone numbers with parenthesis and hyphens.
				*/
			})
		}
	}