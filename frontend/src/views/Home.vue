<template>
	<div class="home">
		<Pages :items="this.$root.$options.pages"></Pages>
	</div>
</template>

<script>

import Pages from '@/components/Pages.vue';

export default {
  name: 'home',
  components: {
    Pages
  }
}
</script>
