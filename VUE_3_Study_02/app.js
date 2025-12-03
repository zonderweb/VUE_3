Vue.createApp({
	data: () => ({
		myHtml: '<h1>Vue 3 App</h1>',
		title: 'Data Title',
		person: {
			firstName: 'Atmos',
			lastName: 'Shimora',
			age: 44
		},
		items: [1, 2, 3, 4, 5, 6, 7]
	})


}).mount('#app')
