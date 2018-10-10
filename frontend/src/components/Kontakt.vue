<template>
	<div class="kontakte">
		text text text text
		<div class="map-wrapper">
			<icon-base icon-name="Map" viewBox="0 -136 1650 1200" />
		</div>
		<footer class="inner">
			<div class="section" v-for="section in content.body" :key="section.template">
				<h4 v-if="section.name" v-html="section.name" ></h4>
				<div class="text" v-html="section.content"></div>
			</div>
		</footer>
	</div>
</template>

<script>
import IconBase from './IconBase.vue'
export default {
  props: {
    content: Object
  },
  components: {
  	IconBase
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
		padding-top: 5.5rem;

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
	.map-wrapper {
		position: absolute;
		left: 0; right: 0;
		height: 30rem;
		overflow: hidden;
	}
	.Map {
		
		

		.mainColor {
			&[fill=none] {
				stroke: var(--color2);
			}
			&:not([fill=none]) {
				fill: var(--color2);
			}
		}
		.secColor {
			&[fill=none] {
				stroke: var(--color1);
			}
			&:not([fill=none]) {
				fill: var(--color1);
			}
		}
		.thirdColor {
			&[fill=none] {
				stroke: var(--color1);
			}
			&:not([fill=none]) {
				fill: var(--color1);
			}
			filter: brightness(80%) contrast(80%);
		}
		.fourthColor {
			&[fill=none] {
				stroke: var(--color1);
			}
			&:not([fill=none]) {
				fill: var(--color1);
			}
			filter: brightness(70%) contrast(70%);
		}	
	}
</style>
