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
			<SpoilerContent 
				:absolventenGroups="getAbsolventenGroups(item.slug)" 
				:spoilerOpen="spoilerActive[key]" 
				:spoilerID="key"
				:style="'--fullheight:'+spoilerHeight[key]+'px'"
			/>
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
				spoilerActive: [],
				spoilerHeight: []
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
	.spoilerToggle {
		width: 100%;
		cursor: pointer;
		display: block;
	}
	.spoilerToggle {
		position: relative;
		text-align: center;
		margin-bottom: 1.5rem;
		margin-top: 2.5rem;
		padding-bottom: 1rem;

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