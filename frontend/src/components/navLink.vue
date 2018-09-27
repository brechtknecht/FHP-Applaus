<template v-if="reactiveNav">
	<a :href="to">
		<slot></slot>
	</a>
</template>
<template v-else>
	<router-link :to="to">
		<slot></slot>
	</router-link>
</template>
<script>
	export default {

		props: {
			reactiveNav: Boolean,
			to: String
		}
	}
</script>