<template>
	<div class="spoilerContent" :style="'height:'+spoilerHeight+'px'">
		<div class="column-outer" :id="'spoilercontent-'+spoilerID">
			<div class="column" v-for="(item, index) in absolventenGroups">
				<Absolvent
					v-for="absolvent in item"
					:absolventObject="$root.getAbsolvent(absolvent)"
					:absolventId="absolvent"
					:key="absolvent">
				</Absolvent>
			</div>
		</div>
	</div>
</template>
<script>
import Absolvent from '@/components/Absolvent.vue'

export default {
  name: 'spoilerContent',
  data() {
  	return {
  		spoilerHeight: '0'
  		
  	}
  },
  props: {
    absolventenGroups: Object,
    spoilerOpen: Boolean,
    spoilerOpenHeight: Number,
    spoilerID: String
  },
  components: {
    Absolvent
  },
  watch: {
  	spoilerOpen: function(state) {
  		// var el = document.getElementById('spoilerContent_'+this.spoilerID);
  		// console.log(el);
  		this.spoilerHeight = this.spoilerOpenHeight;
  	}
  },
  methods: {
  	animationHappening: function(state) {
  		this.$root.animation = state
  	}
  }
}
</script>
<style lang="scss">
	@import '@/scss/mediaqueries.scss';

	.spoilerActive .spoilerContent {
		height: var(--fullheight);
	}
	.spoilerContent {
		position: relative;
		overflow: hidden;
		box-sizing: content-box;
		height: 0;
		transition: height .5s;
		
		.column-outer {
			display: flex;
			align-items: stretch;
			flex-wrap: nowrap;
			opacity: 1;
			overflow: hidden;
			text-align: left;
			justify-content: space-between;
			width: 100%;
			position: absolute;
			@include bp(M) {
				flex-direction: column;
			}
		}
		.column {
		    margin-bottom: 2.5rem;
			flex: 0 1 calc(25% - 1.772727273rem);
			@include bp(M) {
				margin-bottom: 0;
				&:last-child {
					margin-bottom: 2rem;
				}
			}
		    div {
		    	margin-top: 2rem;
		    }
		}
	}
</style>
