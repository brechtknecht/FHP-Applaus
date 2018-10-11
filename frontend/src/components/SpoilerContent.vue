<template>
	<div class="spoilerContent" >
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
import { Easing, Tween, autoPlay } from 'es6-tween'

export default {
  name: 'spoilerContent',
  data() {
  	return {
  		spoilerHeight: 0
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
  	// spoilerOpen: function(state) {

  	// 	TweenLite.to(this.$data, 0.5, { spoilerHeight: this.spoilerOpenHeight });
  	// }
  }
}
</script>
<style lang="scss">
	.spoilerActive .spoilerContent {
		height: var(--fullheight);
	}
	.spoilerContent {
		position: relative;
		overflow: hidden;
		box-sizing: content-box;
		height: 0;
		transition: height .3s;
		
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

		}
		.column {
		    margin-bottom: 2.5rem;
		    flex: 0 1 calc(25% - 1.772727273rem);

		    div {
		    	margin-top: 2rem;
		    }
		}
	}
</style>
