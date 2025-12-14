const app = Vue.createApp({
	data() {
		return {
			title: 'Vue 3 Template'
		}
	},
	template: `
		<div class="card center">
			<h1>{{ title }}</h1>
			<button class="btn" @click="title='Click change Title'">Change</button>
		</div>
	`

})


app.mount('#app')
