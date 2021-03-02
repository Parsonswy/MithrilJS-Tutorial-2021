const DefaultLayout = {
	view: (vnode) => {
		return m('div', [
			m('h2', 'Checklist Central'),
			m(m.route.Link, { href: '/'}, 'Home'),
			m('hr'),
			vnode.children,
		]);
	}
}