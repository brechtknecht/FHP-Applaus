<template>
	<div class="absolventen">
		<!-- <h1> {{ AbsolventenTitle }} </h1> -->
		<!-- <p> {{ AbsolventenHeadertext }} </p> -->
		<h3 class="subtitle">{{ $root.numberOfStudents }} Absolventen</h3>
		<div class="spoiler" v-for="(item, key) in categories" v-bind:class="{ spoilerActive: spoilerActive[key] }">
			<div class="spoilerToggle" v-on:click="toggleSpoiler(key)">
				<span> {{ item.slug }} </span>
				<h4><em> {{ item.name }} </em></h4>
				<div class="subbar short" />
			</div>
			<SpoilerContent 
				:absolventenGroups="getAbsolventenGroups(item.slug)" 
				:spoilerOpen="spoilerActive[key]" 
				:spoilerID="key"
				:style="'--fullheight:'+spoilerHeight[key]+'px'"
			/>
			<div class="subbar long" />
		</div>
	</div>
</template>

<script>
	import SpoilerContent from '@/components/SpoilerContent.vue'
	import IconBase from './IconBase.vue'
	export default {
		name: 'Absolventen',
		data() {
			return {
				categories: this.$root.$options.config.categoryorder,
				spoilerActive: [],
				spoilerHeight: []
			}
		},
		components: {
			SpoilerContent,
			IconBase
		},
		props: {
			content: Object
		},
		created: function(){
			// Testing for getting the correct Keys
            // console.log(Object.getOwnPropertyNames(this.AbsolventenData.EMW));            
            // console.log(this.content.body);

		},
		methods: {
			toggleSpoiler(key){
				let height = document.getElementById('spoilercontent-'+key).offsetHeight;
				this.$set(this.spoilerHeight, key, height);
				this.$set(this.spoilerActive, key, !this.spoilerActive[key]);
			},
			getAbsolventenGroups(category) {
				if(category == 'MASTER') {
					var reeturn = Object.assign(this.content.body.groups.MEMW, this.content.body.groups.MD);
				} else {
					
					var reeturn = this.content.body.groups[category];
					
				}
				var groups = {
					0: {},
					1: {},
					2: {},
					3: {}
				};

				Object.keys(reeturn).forEach(function(key) {
					var absolvent = reeturn[key].toString();
					groups[key % 4][Object.keys(groups[key % 4]).length] = absolvent;
				});

				return groups;
			}

		} 
	}
</script>

<style lang="scss">
	.subbar {
		--strokewidth: 3px;
		display: block;
		height: var(--strokewidth);
		margin: 0 auto;
		bottom: calc( -1 * var(--strokewidth));
		background: var(--color1);
		position: absolute;
		left: 0;
		right: 0;
		&.short {
			width: calc(8 * var(--strokewidth));
		}
		&.long {
			width: 100%;
			&:before {
			    content: "";
			    position: absolute;
			    border-style: solid;
			    border-width: calc(4 * var(--strokewidth)) calc(4 * var(--strokewidth)) 0;
			    border-color: var(--color1) transparent;
			    display: block;
			    width: 0;
			    z-index: 0;
			    left: 50%;
			    margin-left: calc(-4 * var(--strokewidth));
			    bottom: calc(-4 * var(--strokewidth));
			}
			&:after {
			    clear: both;
			    content: "";
			    position: absolute;
			    border-style: solid;
			    border-width: calc(4 * var(--strokewidth) - calc(var(--strokewidth) - 1px)) calc(4 * var(--strokewidth) - calc(var(--strokewidth) - 1px)) 0;
			    border-color: #fff transparent;
			    display: block;
			    width: 0;
			    z-index: 1;
			    left: 50%;
			    margin-left: calc(-4 * var(--strokewidth) + calc(var(--strokewidth) - 1px) );
			}
		}
	}
	.spoilerActive .subbar.long {
		&:before {
			transform: rotate(180deg);
			bottom: var(--strokewidth);
		}
		&:after {
			transform: rotate(180deg);
			bottom: 0;
		}
	}
	.spoiler {
		position: relative;
	}
	.spoilerToggle {
		cursor: pointer;
		position: relative;
		text-align: center;
		padding-bottom: 1.1rem;
		padding-top: 2.6rem;
		transition: color .25s; 

		&:hover {
			color: var(--color1);
		}

		& > span {
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
		& > h4 {
			font-family: abril-text,serif;
			font-size: 1rem;
			font-weight: 400;
			text-decoration: none;
			line-height: 1.3rem;
			cursor: pointer;
			margin: 0; 
		}
	}
</style>