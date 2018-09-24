<template>
	<div id="start"  v-resize:debounce="resize" :style="this.$root.themeStyling">
		 <router-view></router-view>
	</div>
</template>

<script>
import resize from 'vue-resize-directive'
export default {
	name: 'Start',
	methods: {
		resize() {
			this.$root.viewportHeight = window.innerHeight;
			this.$root.viewportWidth = window.innerWidth;
		}
	},
	directives: {
        resize,
    },
	components: {
	},

}

</script>
<style lang="scss">

	body {
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;	
	}

	#start {
		border-bottom: 1.5rem solid var(--color1);
		border-right: 1.5rem solid var(--color1);
		border-left: 1.5rem solid var(--color1);


		text-rendering: optimizeLegibility;
		font-family: abril-text;
		color: var(--color4);
	}

	h1 {
		color: var(--color1);
	}

	h2 {
		font-family: johnston;
		font-size: 2.75rem;
		line-height: 1.1em;
		text-transform: uppercase;
		text-align: center;
		margin-bottom: 3rem;
		margin-top: 0;
	}

	h4 {
		font-family: johnston;
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.5rem;
		margin: 0 0 1.5rem;
	}
	h3 {
		margin-bottom: 3rem;
		font-family: abril-text,serif;
		font-size: 1.25rem;
		font-style: italic;
		text-align: center;
		color: var(--color1);
		font-feature-settings: "onum";
	}
	h3.subtitle {
		margin-top: -2rem;
	}
	h5 {
		font-family: johnston;
		font-size: .875rem;
		font-style: normal;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: .05em;

		margin: .136363636rem 0 0;
	}

	p a {
		color: var(--color4);
		border-bottom-style: solid;
		border-width: 1px;
		border-color: var(--color1);
		text-decoration: none;
		outline: 0;
		cursor: pointer;
		text-align: left;
		white-space: nowrap;
	}

	p {
		font-family: abril-text,serif;
		line-height: 1.5;
		font-weight: 400;
		margin:0 0 1.4rem
	}

	abbr {
		font-family: abril-text,serif;
		font-style: normal;
		font-feature-settings: "smcp","c2sc";
		letter-spacing: .05em;
		border-bottom: 0!important;
	}
</style>
