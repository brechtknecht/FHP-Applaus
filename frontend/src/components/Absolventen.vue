<template>
	<div class="absolventen">
		<!-- <h1> {{ AbsolventenTitle }} </h1> -->
		<!-- <p> {{ AbsolventenHeadertext }} </p> -->
		<h3 class="subtitle">{{ $root.numberOfStudents }} Absolventen</h3>
		<div class="spoiler" v-for="(item, key) in categories"  v-bind:class="{ spoilerActive: spoilerActive[key] }">
			<a class="spoilerToggle" v-on:click="toggleSpoiler(key)"></a>
			<span> {{ item.slug }} </span>

			<h4><em> {{ item.name }} </em></h4> 
			<div class="grid" v-if="item.slug != 'MASTER'" v-bind:class="{ toggleSpoiler: spoilerActive[key]}">
				<Absolvent 
					v-for="absolvent in getAbsolventenGroups(item.slug)" 
					v-bind:data="content.body.list[absolvent]"
					:key="content.body.list[absolvent].id">
				</Absolvent>
			</div>
		</div>
	</div>
</template>

<script>
	import Absolvent from '@/components/Absolvent.vue'

	export default {
		name: 'Absolventen',
		data() {
			return {
				categories: this.$root.$options.config.categoryorder,
				spoilerActive: []
			}
		},
		components: {
			Absolvent
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
					return Object.assign(this.content.body.groups.MEMW, this.content.body.groups.MD);
				} else {
					return this.content.body.groups[category];
				}
			}

		} 
	}
</script>

<style lang="scss">
	.spoilerToggle {
		position: absolute;
		height: 3rem;
		width: 100%;
		left: 0;
		cursor: pointer;
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
	.absolventen {
		width: 80%;
		margin: 0 auto;
		.grid {
			display: grid;
			grid-auto-rows: auto;
			grid-template-columns: 1fr 1fr;
			max-height: 0;
			opacity: 1;
			overflow: hidden;
			transition: 250ms ease-out;
			text-align: left;
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
			div {
				padding-top: 3em;
				padding-bottom: 1.5em;
			}
		} 
		
	}
	.toggleSpoiler {
		opacity: 1 !important;
		max-height: 100px !important;
		overflow: none !important;
	}
	.spoiler {
		position: relative;
		border-bottom: 3px solid var(--color1);
		text-align: center;
		margin-bottom: 1.5rem;
		margin-top: 2.5rem;
		padding-bottom: 1rem;
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
			border-color: #fff transparent;
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