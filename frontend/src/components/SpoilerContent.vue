<template>
	<div class="content" >
		<div class="column" v-for="(item, index) in absolventenGroups">
			<Absolvent
				v-for="absolvent in item"
				:absolventId="absolvent"
				:key="absolvent">
			</Absolvent>
		</div>
	</div>
</template>
<script>
	import Absolvent from '@/components/Absolvent.vue'

	export default {
		name: 'spoilerContent',
		props: {
			absolventenGroups: Object,
			spoilerOpen: Boolean
		},
		components: {
			Absolvent
		}
	}
</script>