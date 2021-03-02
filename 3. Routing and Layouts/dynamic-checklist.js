const checklist = {
	list: [
		{
			text: 'Learn about HTML.',
			complete: false,
		},
		{
			text: 'Learn about CSS.',
			complete: false,
		},
		{
			text: 'Learn about Javascript.',
			complete: false,
		},
	],

	addItem(item) {
		if (item === undefined || item === null || item.length < 1) { return; }
		checklist.list.push({ text: item, complete: false });
	},

	checkItem(i) {
		if (checklist.list[i] === undefined || checklist.list[i] === null) { return; }
		checklist.list[i].complete = true;
	},
};

const DynamicChecklist = {
	oninit: (vnode) => {
		vnode.state.textfieldValue = '';

		if (vnode.attrs.items !== undefined && vnode.attrs.items !== null) {
			const items = vnode.attrs.items.split(',');
			items.forEach((item) => { checklist.addItem(item); })
		}
	},

	view: (vnode) => {
		/*
		let liVnodes = [];
		for(let i=0; i < checklist.list.length; i++) {
			liVnodes.push(
				m('li.checklist-item', {
						class: (checklist.list[i].complete)? 'complete' : '',
						key: i,
						onclick: () => { checklist.checkItem(i); },
					}, checklist.list[i].text)
			);
		}*/

		return [
			m('h3.page-title', 'Introduction to Mithril Checklist'),

			m('.checklist-module', [
				m('form', { onsubmit: (e) => { e.preventDefault(true); } }, [
					m('input[type=text].checklist-form-textfield', {
						placeholder: 'New todo item...',
						oninput: (e) => { vnode.state.textfieldValue = e.target.value; },
						onkeyup: (e) => {
							if (e.keyCode === 13) {
								checklist.addItem(vnode.state.textfieldValue);
								vnode.state.textfieldValue = '';
							}
						},
						value: vnode.state.textfieldValue,
					}),
					m('input[type=submit].checklist-form-submit', {
						onclick: () => {
							checklist.addItem(vnode.state.textfieldValue);
							vnode.state.textfieldValue = '';
						},
						value: 'Add Todo Item'	
					}),
				]),

				// m('ul.checklist-list', {}, liVnodes)
				m('ul.checklist-list', checklist.list.map((listItem, i) => { 
					return m('li.checklist-item', {
						/*
							In the video, I wrote this as 'checklist.list[i].complete'. While this obviously works,
							'listItem.complete' is the more correct version here since we're using map.
						*/
						class: (listItem.complete)? 'complete' : '',
						key: i,
						onclick: () => { checklist.checkItem(i); },
					}, listItem.text);
				}))
			])
		];
	},
};