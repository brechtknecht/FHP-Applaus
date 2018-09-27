<template>
	<div id="start"  v-resize:debounce="resize" :style="this.$root.themeStyling">
		<Header
			v-if="$route.name == 'home'"
			class="header" 
			:content="this.$root.$options.config"
		/>
		<Navigation 
			:items="this.$root.$options.navigation" 
			:reactiveNav="reactiveNav"
		/>
		<!-- <transition name="routerTransition"> -->
			<router-view></router-view>
		<!-- </transition> -->
	</div>
</template>

<script>
import resize from 'vue-resize-directive'
import Navigation from '@/components/Nav.vue'
import Header from '@/components/Header.vue'

export default {
	name: 'Start',
	methods: {
		resize() {
			this.$root.viewportHeight = window.innerHeight;
			this.$root.viewportWidth = window.innerWidth;
		}
	},
	computed: {
		reactiveNav: function() {
			if(this.$route.path == '/') {
				return true;
			} else {
				return false;
			}
		}
	},
	ready() {
		console.log(this.$route.name);
	},
	directives: {
        resize,
    },
	components: {
		Navigation,
		Header
	},

}

</script>
<style lang="scss">
	.routerTransition-enter-active, .routerTransition-leave-active {
	 	transition: opacity 5s;
	}
	.routerTransition-enter, .routerTransition-leave-to {
	 	opacity: 0;
	}
	.routerTransition-enter-to, .routerTransition-leave {
		opacity: 1;
	 }


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
		margin-bottom: 1rem;
		margin-top: 0;
		letter-spacing: .15rem;
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
		margin-top: 1rem;
		margin-bottom: 0;
		font-weight: 400;
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

	a {
		color: var(--color4);
		border-bottom: 1px solid var(--color1);
		text-decoration: none;
		outline: 0;
		transition: border-color .3s;
		&:hover {
			border-color: var(--color4);
		}
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
