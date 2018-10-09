<template>
	<section :id="content.slug" class="wrapper" v-bind:class="IndexMod">
		<section class="content-inner">
				
				<h2 v-html="content.headertext" v-if="content.headertext" :class="content.template"></h2>

				<div class="body" v-if="content.template == 'applaus' || content.template == 'programm'">
					
					
					<div class="section" :class="section.name" v-for="section in content.body" :key="section.template">
						<div class="text" v-html="section.content"></div>
					</div>
				

				</div>

				<div v-if="content.template == 'ausstellung'">
					<aussteller :content="content"></aussteller>
				</div>

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
    IndexMod: function () {
      var state = this.$vnode.key % 2
      if (state < 1) {
        return 'bg-dark'
      } else {
        return 'bg-light'
      }
    }
  },
  created: function () {

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

			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: space-between;
			position: relative;

			@include bp(M) {
				flex-direction: column;
			}

			.section {
				width: calc(50% - 1.136363636rem);

				@include bp(M) {
					width: 100%;
				}

				&:nth-child(4) {
					position: absolute;
					bottom: 0;
					right: 0;

					@include bp(M) {
						position: inherit;
					}
				}

				@include bp(M) {
					&:nth-child(2) {
						order: 98;
					}
					&:nth-child(3) {
						order: 99;
					}
				}

			}
		}

</style>
