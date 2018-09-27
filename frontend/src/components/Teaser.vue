<template>
	<div class="teaser">
		<div class="meta-data-inner" v-if="!contentIsGiven">
			<a :href="'aussteller/'+teaser.slug">
				<span class="authors">
					<span v-for="author in teaser.authors.split(',')">
						<span class="forename">{{ $root.getAbsolventFullname(author).forename }} </span> <span class="lastname">{{ $root.getAbsolventFullname(author).lastname }}</span><br>
					</span>
				</span>
				<span class="title">
					{{ teaser.title }}
				</span>
			</a>
		</div>

		<div class="gradient" />
		<!-- ATTENTION — ToDo ! Insert media queries here in this img tag! (sizes) -->
		<img class="teaser-image" :src="backgroundImage[0].url" :srcset="backgroundImage[0].srcset" sizes="100vw">
	</div>
</template>

<script>
	export default {
		props: {
			content: Array,
			contentIsGiven: Boolean
		},
		mounted() {
			// console.log(this.backgroundImage[0].url);
		},
		computed: {
			backgroundImage: function() {
				if(this.contentIsGiven) {
					return this.content;
				} else {
					return this.teaser.images;
				}
			},
			teaser: function() {
				return this.$root.randomProperty(this.$root.$options.pages.ausstellung.body.list);
			}
		}
	}

</script>

<style lang="scss">
	.teaser {
		position: absolute;
		overflow: hidden;
		top: 0; left: 0; bottom: 0; right: 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column; 
		justify-content: flex-end;

		.meta-data-inner {
			margin: 0 auto;
			position: relative;
			z-index: 9;
			margin-bottom: 2rem;
			a {
				text-decoration: none;
				border: none;
			}
			.authors span, .title {
				color: var(--color3);
				font-family: johnston,sans-serif;
				font-size: .75rem;
				margin: 0;
				line-height: 0rem;
				font-style: normal;
			}
			.authors {
				margin-bottom: 0; 
			}
			.authors span {
				text-transform: uppercase;
				letter-spacing: .05rem;
			}
		}
	}
	.gradient {
		position: absolute;
		top: 0; left: 0; bottom: 0; right: 0;
		background: linear-gradient(var(--gradient_col2-11perc) 0, var(--gradient_col2-11perc) 1%,var(--gradient_col2-90perc) 84%,	var(--color2) 100%);
		z-index: 1;
	}
	.teaser-image {
		position: absolute;
		top: 0; left: 0; bottom: 0; right: 0;
		height: 100%;
		width: 100%;
		object-fit: cover;
		z-index: 0;
	}
</style>