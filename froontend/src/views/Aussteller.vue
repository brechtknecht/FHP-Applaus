<template>
	<div>
		<!-- Navigation needs to dont be »ScrollActive« -->
		<Navigation :items="this.$root.$options.navigation"></Navigation>
		<Header class="header" :content="aussteller" contentIsGiven></Header>
		
		{{ aussteller.title }}
		{{ aussteller.authors }}
		<p v-html="aussteller.content">
			
		</p>
	</div>
</template>

<script>
import Navigation from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import ApplausData from '../../public/applaus2018.json'

export default {
	name: 'Aussteller',
	data() {
		return {
				aussteller: this.$root.$options.ausstellung.body.list[this.$route.params.id]
		}
	},
	components: {
		Navigation,
		Header
	}
}
</script>
