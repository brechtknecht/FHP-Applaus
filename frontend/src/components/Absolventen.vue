<template>
	<div class="absolventen">
		<!-- <h1> {{ AbsolventenTitle }} </h1> -->
		<!-- <p> {{ AbsolventenHeadertext }} </p> -->
		<h3 class="subtitle">{{ $root.numberOfStudents }} Absolventen</h3>
		<div class="spoiler" v-for="(item, key) in categories" v-bind:class="{ spoilerActive: spoilerActive[key] }">
			<div class="spoilerToggle" v-on:click="toggleSpoiler(key)">
				<span> {{ item.slug }} </span>
				<h4><em> {{ item.name }} </em></h4>
			</div>
			<SpoilerContent :absolventenGroups="getAbsolventenGroups(item.slug)" :spoilerOpen="spoilerActive[key]" />
		</div>
	</div>
</template>

<script>
	import SpoilerContent from '@/components/SpoilerContent.vue'

	export default {
		name: 'Absolventen',
		data() {
			return {
				categories: this.$root.$options.config.categoryorder,
				spoilerActive: []
			}
		},
		components: {
			SpoilerContent
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
	.spoilerToggle {
		width: 100%;
		cursor: pointer;
		display: block;
	}
	.spoilerActive {
		&:before{
			transform: rotate(180deg);
			bottom: -3px !important;
		} 

		&:after {
			transform: rotate(180deg);
			bottom: -5px !important;
		}
	}
	.column {	
		div {
			margin-top: 2rem;
		}
		margin-top: 2.25rem;
	    margin-bottom: 2.5rem;
	    flex: 0 1 calc(25% - 2.272727273rem);
	}
	.absolventen {
		margin: 0 auto;
		.content {
			display: flex;
			align-items: stretch;
			flex-wrap: nowrap;
			opacity: 1;
			overflow: hidden;
			transition: 250ms ease-out;
			text-align: left;
			justify-content: space-between;

			&:before {
				content: '';
				margin-top: 1rem;
				display: block;
				width: 24px;
				height: 3px;
				position: absolute;
				left: calc(50% - 12px);
				background: var(--color1);
			}
		} 
		
	}
	// .toggleSpoiler {
	// 	opacity: 1 !important;
	// 	max-height: calc(var(--size) * 9rem) !important;
	// 	overflow: none !important;
	// }
	.spoiler {
		position: relative;
		border-bottom: .136363636rem solid var(--color1);
		text-align: center;
		margin-bottom: 1.5rem;
		margin-top: 2.5rem;
		padding-bottom: 1rem;
		// overflow: hidden;
		&:before {
			content: '';
			position: absolute;
			border-width: 12px 12px 0;
			border-style: solid;
			border-color: var(--color1) transparent;
			display: block;
			width: 0;
			bottom: -12px;
			z-index: 0;
			left: 50%;
			background: transparent;
			margin-left: -12px;
		}
		&:after {
			clear: both;
			content: "";
			position: absolute;
			border-style: solid;
			border-width: 10px 10px 0;
			border-color: var(--color3) transparent;
			display: block;
			width: 0;
			z-index: 1;
			left: 50%;
			bottom: -8px;
			margin-left: -10px;
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