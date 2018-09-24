<template>
	<footer>
		<div class="section" v-for="section in content.body" :key="section.template">
			<h4 v-if="section.name" v-html="section.name" ></h4>
			<div class="text" v-html="section.content"></div>
		</div>
	</footer>
</template>

<script>
	export default {
		props: {
			content: Object
		}
	}

</script>

<style lang="scss">
	#kontakt footer {
		display: flex;
		direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: flex-start;

		.section {
			flex-basis: calc(20% - 2.272727273rem);
							h4 {
					text-transform: uppercase;
					letter-spacing: .05em;
				}
			.text {
				font-size: .875rem;
				p {
					margin-bottom: 1.5em;
				}

			}
		}
	}
</style>