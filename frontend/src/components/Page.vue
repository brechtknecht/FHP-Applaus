<template>
	<section :id="content.slug" class="wrapper" v-bind:class="IndexMod">
		<section class="content-inner">

				<h2 v-html="content.headertext" v-if="content.headertext" :class="content.template"></h2>

				<div class="body" v-if="content.template == 'applaus'">

					<div class="section" v-for="section in content.body" :key="section.template">
						<h4 v-if="section.name" v-html="section.name" ></h4>
						<div class="text" v-html="section.content"></div>
					</div>

				</div>

				<div v-if="content.template == 'ausstellung'">
					<aussteller :content="content"></aussteller>
				</div>	

				<!-- Use var absolventen — less data! Also you have check if the user is ausstelling or not.  -->
				<!-- When not, the title is saved directly to the absolventen page — when the user is a aussteller you have to look at the absolventen object  -->
				<!-- example: aussteller.vue -->

				<div v-else-if="content.template == 'absolventen'">
					<Absolventen :content="content"></Absolventen>
				</div>

				<div v-else-if="content.template == 'kontakt'">
					<Kontakt :content="content"></Kontakt>
				</div>

		</section>
	</section>
</template>

<script>
	import Aussteller from '@/components/Aussteller.vue'
	import Absolventen from '@/components/Absolventen.vue'
	import Kontakt from '@/components/Kontakt.vue'

	export default {
		name: 'Page',
		props: {
			content: Object
		},
		components: {
			Aussteller,
			Absolventen,
			Kontakt
		},
		computed: {
			IndexMod: function() {
				var state = this.$vnode.key % 2;
				if(state < 1 ) {
					return "bg-dark";
				} else {
					return "bg-light";
				}
				
			}
		},
		created: function(){
			
		}
	}
</script>

<style lang="scss">
	@import '@/scss/mediaqueries.scss';
	h2.applaus {
		margin-bottom: 3rem;
	}
	section.wrapper {
		// min-height: 100vh;
		&.landing {
			height: calc(100vh - 4rem - 1.5rem);
		}
		&.bg-dark {
			background: var(--color5)
		}
		&.bg-light {
			background: var(--color3)
		}
	}
	section.content-inner {
		padding-top: 5.5rem; 
		padding-bottom: 6rem;
		margin: 0 auto;
	}

		#applaus > section > .body {
			// Use Flexbox here -> original layout
			// display: grid;
			// grid-template-columns: 1fr 1fr;
			// grid-column-gap: 2rem;
			// word-wrap: break-word;

			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: space-between;
			@include bp(M) {
				flex-direction: column;
			}

			.section {
				width: calc(50% - 2rem);
				@include bp(M) {
					width: 100%;
				}
			}
		}

</style>