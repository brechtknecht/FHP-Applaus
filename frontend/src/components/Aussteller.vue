<template>
	<div class="wrapper">
		<h3 class="subtitle">{{ $root.numberOfExhibitiors }} Aussteller</h3>
		<div v-for="(item, key) in $root.$options.config.categoryorder" :class="key" class="category">
			<div class="title">
				<span>
					{{ item.slug }}
				</span>
				<h4>
					<em>
						{{ item.name }}
					</em>
				</h4>
			</div>
			<ausstellerGrid :categorySlug="item.slug" :content="content" />
		</div>
	</div>
</template>

<script>
import ausstellerGrid from './ausstellerGrid'

export default {
	name: 'Aussteller',
	data () {
		return {
		}
	},
	components: {
		austellerGrid
	},
	props: {
		content: Object
	}
}
</script>

<style lang="scss">
	.category {
		margin-bottom: 2.727272727rem;
		padding-top: 2.6rem;
		.title {
			text-align: center;
			margin-bottom: 2.25rem;
				span {
				font-family: johnston;
				font-style: normal;
				letter-spacing: .05em;
				line-height: 1.3rem;
				text-transform: uppercase;
				font-weight: 400;
				font-size: 1rem;
				text-decoration: none;
				margin: 0;
			}
			h4 {
				font-family: abril-text,serif;
				font-size: 1rem;
				font-weight: 400;
				text-decoration: none;
				line-height: 1.3rem;
				// cursor: pointer;
				margin: 0;
			}
		}
	}
</style>
