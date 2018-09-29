<template>
	<div class="content" >
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
		props: {
			absolventenGroups: Object,
			spoilerOpen: Boolean,
			spoilerID: String
		},
		components: {
			Absolvent
		}
	}
</script>
<style lang="scss">
	.spoilerActive .content {
		height: var(--fullheight);
	}
	.content {
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