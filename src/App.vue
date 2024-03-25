<script>
import AppComponent from "./components/AppComponent.vue";
import AppHeader from "./components/AppHeader.vue";
import SectionPost from "./components/SectionPost.vue";
import SectionStories from "./components/SectionStories.vue";
import SectionUser from "./components/SectionUser.vue";


import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	components: {
		AppComponent,
		AppHeader,
		SectionStories,
		SectionPost,
		SectionUser
	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.doThings();

		// axios.get("indirizzo").then(risultato => {
		// 	console.log(risultato);
		// }).catch(errore => {
		// 	console.error(errore);
		// });
	},
	methods: {
		doThings() {
			console.log("App.vue does things");
		}
	}
}
</script>

<template>
	<main>
		<AppHeader class="bgHeader" />
		<div class="d-flex bgWhite">
			<div class="container bgWhite">
				<div class="row">
					<div class="col-8">
						<SectionStories class="bgWhite" />
					</div>
					<div class="col-4">
						<SectionPost class="bgWhite" />
					</div>
				</div>
				<div class="row">

				</div>
			</div>
		</div>
		<SectionUser class="bgWhite" />
	</main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
	padding: 1rem;
}
.bgWhite{
	background-color: white;
}
.bgHeader{
	background-color: rgb(248, 248, 248)
}
</style>