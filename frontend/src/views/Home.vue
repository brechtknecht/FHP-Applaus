<template>
	<div class="home">
		<!-- <Header class="header" :content="this.$root.$options.config"></Header> -->
		<!-- <Navigation :items="this.$root.$options.navigation" reactiveNav></Navigation> -->
		<Pages :items="this.$root.$options.pages"></Pages>
	</div>
</template>

<script>
import Navigation from '@/components/Nav.vue'
import Pages from '@/components/Pages.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Navigation,
    Pages,
    Header
  }
}
</script>
