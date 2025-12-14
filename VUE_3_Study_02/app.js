Vue.createApp({
	data: () => ({
		myHtml: '<h1>Vue 3 App</h1>',
		title: 'Data Title',
		person: {
			firstName: 'Atmos',
			lastName: 'Shimora',
			age: 44
		},
		items: [1, 2, 3, 4, 5, 6],
	}),

	methods: {
		addItem(event) {
			this.items.unshift(this.$refs.myInput.value)
			this.$refs.myInput.value = ''
		},

		remove(idx) {
			this.items.splice(idx, 1)
		},

		log(item) {
			console.log('Log item: ', item)
		}
	},

	computed: {
		evenItems() {
			return this.items.filter(i => i % 2 === 0)
		}
	}


}).mount('#app')
