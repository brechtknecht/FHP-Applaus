<template>
	<main>
		<Page v-for="(content, key, index) in items" :content="content" :key="index"></Page>
	</main>
</template>

<script>
	import Page from '@/components/Page.vue'
	
	export default {
		name: 'Pages',

		components: {
			Page
		},
		props: {
			items: Object
		}
	}
</script>