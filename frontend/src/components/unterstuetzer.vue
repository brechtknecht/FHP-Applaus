<template>

	<div class="wrapper" :class="content.template">
		<h3 class="subtitle">Dankeschön!</h3>
		<div class="container">
			<div class="item" v-for="item in content.body.images">
				<img 
					:src="item.src"
					:srcset="item.srcset"
					sizes=""
				/>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			content: Object
		}
	}
</script>

<style lang="scss">
@import '@/scss/mediaqueries.scss';

.unterstuetzer{
	.container {
		display: flex;
		flex-direction: row;
		width: 100%;
		position: relative;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 2.5rem;
	}
	.item {
			width: calc(100% / 5);
			opacity: .6;
			transition: opacity .3s;
			position: relative;
			text-align: center;
			@include bp(S) {
				width: calc(100% / 3);
				opacity: 1;
			}
			@include bp(XXS) {
				width: calc(100% / 2);
			}
			img {
				width: 7rem;
			}
			&:hover {
				opacity: 1;
			}
	}
}
</style>