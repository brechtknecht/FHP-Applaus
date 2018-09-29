<template>
	<section class="wrapper" :class="{ 'aussteller': contentIsGiven}">

		<section class="content-inner" v-if="!contentIsGiven">

				<icon-base icon-name="signet" viewBox="0 0 300 155" />

				<div class="group">				
					<icon-base icon-name="applaus" viewBox="0 0 234 36.5" />
					<p class="sub-title" v-html="content.headertext" />
				</div>
		</section>

		<section class="content-inner wide" v-else>

				<div class="group">
					<div class="author" v-for="(author, index) in content.authors.split(',')" :class="{ colaboration: content.authors.split(',').length > 1 }">
						<span class="forename">{{$root.getAbsolventFullname(author).forename}} </span><span class="lastname">{{$root.getAbsolventFullname(author).lastname}}</span>
					</div>

				</div>

				<div class="group">				
					<h2 class="title">{{content.title}}</h2>
					<h3 class="subtitle">{{content.subtitle}}</h3>
				</div>
		</section>

		<teaser :contentIsGiven="contentIsGiven" :content="content.images"/>
	</section>
</template>

<script>
	import IconBase from './IconBase.vue'
	import Teaser from './Teaser.vue'
	export default {
		name: 'Page',
		props: {
			content: Object,
			contentIsGiven: Boolean 
		},

		components: {
			IconBase,
			Teaser
		}
	}
</script>

<style lang="scss">
	@import '@/scss/mediaqueries.scss';

	section.wrapper.header {
		position: relative;
		height: calc(100vh - 4rem - 1.5rem);
		overflow: hidden;
		border-top: 1.5rem solid var(--color1);

		@include bp(XL) {
			border: none;
			height: calc(100vh - 4rem);
			margin-top: 4rem;
		}

		&.aussteller {
			border: none;
			height: calc(100vh - 4rem);
		} 
		section.content-inner {
			padding: 0 0 0;
		}
	}
	.content-inner.wide {
		width: 100%;
	}
	.header .author {
		text-align: center;
		color: var(--color3);

		&.colaboration {
			height: 6.227272727rem;
			.forename {
				display: inline;
				margin-bottom: 0;
			}
			.lastname {
				display: inline;
			}
		}
		.forename {
			font-size: 5.75rem;
			font-style: italic;
			line-height: 1.1em;
			font-feature-settings: "dlig";
			animation: fading 1s ease-in .2s backwards;
			display: block;
			margin-bottom: .86rem;
		}
		.lastname {
			animation: fading 1s ease-in .5s backwards;
			font-size: 5.5rem;
			line-height: 1.1em;
		    font-family: johnston,sans-serif;
		    font-weight: 700;
		    text-transform: uppercase;
		    letter-spacing: .05em;
		    font-style: normal;
		    display: block;		    
		}
	}

	svg.signet {
		fill: var(--color3);
	}
	svg.applaus {
		fill: var(--color3);
	}

	.header {
		display: flex;

		.group .title {
			animation: fading 1s ease-in .8s backwards;
			margin: 3.545454545rem 0 1rem;
			font-size: 1.5rem;
			line-height: 1.75rem;
			color: var(--color3);
		}
		.group .subtitle {
			animation: fading 1s ease-in 1.1s backwards;
			font-size: 1.375rem;
		    line-height: 1.3em;
		    font-weight: 600;
		    font-style: italic;
		    color: var(--color3);
		}
	}

	.header .content-inner {

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 3;

		svg {
			animation: fading 1s ease-in .5s backwards;
			animation-iteration-count: 1;
			animation-direction: forwards;
		}
		svg.signet {
			// width: 13.75rem;
			height: 7.07rem;
			margin: -5rem 0 4.3636rem;
			// padding: 0 0 12.4674286%;
			animation-delay: 0ms;
		}
		svg.applaus {
			width: 35rem;
			animation-delay: 600ms;
			margin: 0 auto 2rem;
		}
		&  p {
			color: var(--color3);
			margin: 0;
			line-height: 1.3em;
			font-style: italic;
			font-size:1.375rem;
			text-align: center;
			animation: fading 1s ease-in .5s backwards;
			animation-delay: 900ms;
			font-weight: 600;
		}
	}
</style>