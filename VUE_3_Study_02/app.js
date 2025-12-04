Vue.createApp({
	data: () => ({
		myHtml: '<h1>Vue 3 App</h1>',
		title: 'Data Title',
		person: {
			firstName: 'Atmos',
			lastName: 'Shimora',
			age: 44
		},
		items: [1, 2]
	}),

	methods: {
		addItem() {
			this.items.unshift(this.$refs.myInput.value)
			this.$refs.myInput.value = ''
		},
	},

	computed: {
		evenItems() {
			return this.items.filter(i => i % 2 === 0)
		}
	}


}).mount('#app')
