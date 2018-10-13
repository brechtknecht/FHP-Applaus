<template>
	<div class="kontakte">
		<div class="map-wrapper">
			<div class="map-bubble">
				<h4>FH POTSDAM</h4>
				<em>Campus Fachhochschule<br>
				<abbr>Haus D</abbr>
				</em>Kiepenheuerallee 5<br>
				14469 Potsdam
			</div>
			<icon-base 
				icon-name="Map" 
				viewBox="0 -136 1650 1200" 
				:class="{ hide: $root.animation }"
				:style="'--color1_80:'+darken(colors['--color1'], 7)+'; --color1_70:'+darken(colors['--color1'], 17)"
			/>
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
import tinycolor from "tinycolor2"

export default {
  props: {
    content: Object
  },
  data() {
  	return {
  		colors: this.$root.$options.styling
  	}
  },
  methods: {
  	darken: function(color, by) {
  		return tinycolor(color).darken(by).desaturate(by)
  	}
  },
  components: {
  	IconBase
  }
}

</script>

<style lang="scss">
	@import '@/scss/mediaqueries.scss';

	#kontakt footer {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: flex-start;
		padding-top: 5.5rem;
		padding-bottom: 6rem;
		@include bp(M) {
			flex-direction: column;
		}
		.section {
			flex-basis: calc(20% - 2.272727273rem);
				h4 {
					text-transform: uppercase;
					letter-spacing: .05em;
					@include bp(M) {
						margin-bottom: .5rem;
					}
				}
			.text {
				@include bp(M) {
					font-size: 1rem;
					margin-bottom: 2.5rem;
				}
				p {
					margin-bottom: 1.5em;
					@include bp(M) {
						line-height: 1.5rem;
						margin-bottom: 0rem;
					}
				}	

			}
		}
	}
	.map-wrapper {
		width: 100%;
		height: 66vh;
		overflow: hidden;
		position: relative; 
		vertical-align: middle; 

		.map-bubble {
			box-sizing: border-box;
			// top: calc(2vh - 138px);
			margin: 0 auto;
			bottom: 32.8vh;
			position: absolute;
			left: 0; right: 0;
			width: 13.636363636rem;
			padding: 1.5rem 0;
			background-color: #fff;
			border-top: var(--color1) solid 3px;
			border-bottom: var(--color1) solid 3px;
			text-align: center;
			z-index: 2;
			line-height: 1.5;

			@include bp(HS) {
				display: none;
			}

			@include bp(XXL) { 
				display: block;
				@include bp(HXS) {
					display: none;
				}
			}

			// @include bp(S) { 
			// 	display: none;
			// }

			h4 {
				margin-bottom: .5rem;
				font-family: johnston,sans-serif;
				font-weight: 700;
				text-transform: uppercase;
				letter-spacing: .05em;
				font-style: normal;
			}
			abbr {
				padding-bottom: .545454545rem;
				display: block;
			}

			&::before {
				content: "";
			    position: absolute;
			    border-style: solid;
			    border-width: 12px 12px 0;
			    border-color: var(--color1) transparent;
			    display: block;
			    width: 0;
			    z-index: 0;
			    bottom: -15px;
			    left: calc((13.636363636rem / 2) - 12px);
			}
			&::after {
			    content: "";
			    position: absolute;
			    border-style: solid;
			    border-width: 10px 10px 0;
			    border-color: #fff transparent;
			    display: block;
			    width: 0;
			    z-index: 1;
			    bottom: -10px;
			    left: calc((13.636363636rem / 2) - 10px);
			}
		}
	}
	.Map {
		z-index: 1;
		position: absolute;
		/* Portrait */
		@media (orientation:portrait) {
		/* Portrait styles */
		height: 100%;
		min-width:100%;
		}
		/* Landscape */
		@media (orientation:landscape) {
		/* Landscape styles */
		min-height:100%;
		width: 100%;
		}
		left: 50%;
		top: 50%;
		transform: translateY(-50%) translateX(-50%);

		&.hide {
			display: none;
		}

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
				stroke: var(--color1_80);
			}
			&:not([fill=none]) {
				fill: var(--color1_80);
			}
			// filter: brightness(80%) contrast(80%);
		}
		.fourthColor {
			&[fill=none] {
				stroke: var(--color1_70);
			}
			&:not([fill=none]) {
				fill: var(--color1_70);
			}
			// filter: brightness(70%) contrast(70%);
		}	
	}
</style>
