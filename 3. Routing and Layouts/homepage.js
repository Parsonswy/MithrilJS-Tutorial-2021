const HomePage = {
	view: () => {
		return m('div', [
			m('h4', 'For all your checklist needs.'),
			m('ul', [
				m('li', m(m.route.Link, { href:'/checklist' }, 'Standard Checklist')),
			])
		]);
	}
}