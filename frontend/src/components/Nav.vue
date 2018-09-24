<template>

	<scrollactive id="nav" class="nav-main" v-on:itemchanged="onItemChanged" :offset="navheight" :exact="true" :alwaysTrack="true" :duration="800">
		<div class="nav-inner">
			<!-- <div class="bars"></div> -->
			<ul class="navigation">
				<transition name="signethide">
					<li v-show="signetshow" class="signet-item" :style="'--space:'+spaceBetween+'px'" :class="{ 'notReactive': !reactiveNav }">
						<a :href="relativePath + '#start'" class="signet-hiding is-active" :class="{ 'scrollactive-item': reactiveNav }">
							<icon-base icon-name="signet-nav" viewBox="0 0 220 215"/>
						</a>
					</li>
				</transition>
				<li v-for="item in items" @click="toggleMobileNav">
					<a :href="relativePath+'#'+item.slug" :title="item.title" :class="{ 'scrollactive-item': reactiveNav }">{{ item.title }}</a>
				</li>
				<a class="toggle" @click="toggleMobileNav">
					<i class="bars"></i>
				</a>
			</ul>

			<ul class="fakenav">
				<li class="signet-item">
					<a class="signet-hiding">
						<icon-base icon-name="signet-nav" viewBox="0 0 220 215"/>
					</a>
				</li>
				<li v-for="(item, index) in items" :id="'FakeNavItem'+index"><a>{{ item.title }}</a></li>
			</ul>

		</div>
	</scrollactive>

</template>

<script>
	import IconBase from './IconBase.vue'
	import VueScrollActive from 'vue-scrollactive'
	export default {
		name: 'Navigation',
		data() {
			return {
				navheight: 88,
				activeItem: Object,
				signetshow: false,
				spaceBetween: 0
			}
		},
		computed: {
			relativePath: function() {
				if(!this.reactiveNav) {
					return '../';
				}
			}
		},
		props: {
			items: Array,
			reactiveNav: Boolean
		},
		components: {
			IconBase,
			VueScrollActive
		},
		mounted() {
			this.navheight = document.getElementById("nav").clientHeight;
			this.getSpaceBetweenNavItems();
		},
		watch: {
			activeItem: function(check) {
					this.signetshow = this.activeItem && !this.activeItem.classList.contains('signet-hiding');
				
			}
		},
		methods: {
			getSpaceBetweenNavItems() {
				var firstel = document.getElementById("FakeNavItem0").getBoundingClientRect();
				var secondel = document.getElementById("FakeNavItem1").getBoundingClientRect();
				this.spaceBetween = secondel.x - (firstel.x + firstel.width);
			},
  			onItemChanged(event, currentItem, lastActiveItem) {
  				this.navheight = document.getElementById("nav").clientHeight;
  				this.activeItem = currentItem;
  				this.getSpaceBetweenNavItems();
  			},
			/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
			toggleMobileNav(event) {
				if(event.target.classList.contains('toggle') || event.target.classList.contains('bars') || event.target.classList.contains('responsive')){
					console.log("entered");
					var x = document.getElementById("nav");
					var listElements = x.getElementsByTagName('a');
					var list = x.getElementsByTagName('ul');

					if (x.className === "scrollactive-nav nav-main") {
						x.className += " responsive";
						for(var i = 0; i < listElements.length; i++){
							listElements[i].classList.toggle('responsive');
						}
						list[0].classList.toggle('show');
					} else {
						x.className = "scrollactive-nav nav-main";
						for(var i = 0; i < listElements.length; i++){
							listElements[i].classList.toggle('responsive');
						}
						list[0].classList.toggle('show');
					}
				}
			}
		}
		
	}



</script>

<style lang="scss">
	.nav-main {
		--signet-width: 2.6875rem;
		position: sticky;
		background: var(--color1);
		top: 0;
		height: 4rem;
		z-index: 10;
		.nav-inner > ul > li:last-child{
			display: none;
		}
	}

	/* When the screen is less than 1219 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
	.toggle {
		display: none;
	}
	@media screen and (max-width: 1219px) {
		.nav-inner {
			width: 100% !important;
		}
		.nav-main li {display: none;}
		.nav-main a.icon {
			width: 100%;
			display: block;
		}
		.nav-main {
			position: fixed;
			box-sizing: border-box;
			left: 0;
			right: 0;
			z-index: 10;
		}

		.toggle {
			position: absolute;
			top: 0;
			cursor: pointer;
			height: 100%;
			display: block;
			width: 100%;
			z-index: 2;
		}
	}

	svg.signet-nav {
		width: var(--signet-width);
		height: 100%;
	}
	.nav-inner {
		margin: 0 auto;
		height: 100%;
	}
	.signet-hiding {
		height: 100%;
	}
	.fakenav {
		margin-top: -4rem;
		z-index: 1;
		height: 0;
		overflow: hidden;
		.signet-item {
			display: none;
		}
	}
	.signethide-enter-active, .signethide-leave-active {
 		transition: width 0.75s, margin-left 0.75s, padding 0.75s, opacity 0.75s;
 		width: var(--signet-width);
 		margin-left: 0;
 		padding: 0 0 0 0;
 		opacity: 1;	
	}
	.signethide-enter, .signethide-leave-to {
	 	opacity: 0;
	 	width: 0;
	 	margin-left: calc(-3 * var(--signet-width));
	 	padding: 0 calc(3* var(--signet-width) - var(--space)) 0 0;
	 	
	}

	.bars {
		height: 3px;
		width: 30px;
		background: #fff;
		position: absolute;
		left: 50%;
		bottom: 50%;
		margin-left: -12px;
		&:after,
		&:before {
			content: '';
			display: block;
			height: 3px;
			width: 30px;
			background: #fff;
			position: absolute;
			left: 50%;
			margin-left: -15px;
			transform: rotate(0);
			transition: top .1s ease-out .25s,transform .1s ease-out
		}
		&:before {
			top: -6px;
		}
		&:after {
			top: 6px;
		}
	}

	.show {
		max-height: 400px !important;
	}

	.responsive {
		& .nav-inner {
			width: 100%;
		}
		& a {
			display: block;
		}
		& ul {
			padding-top: 4rem;
			padding-bottom: 1rem;
			flex-direction: column; 
		}
		& li {
			display: block;
			text-align: center;
			&:first-child {
				display: none;
			}
		}
		& .icon {
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
		}
		& .bars {
			background-color: transparent;
			&:before {
				top: 0;
				transform: rotate(-45deg);
				transition: top .1s ease-out,transform .1s ease-out .25s;
			}
			&:after {
				top: 0px;
				transform: rotate(45deg);
				transition: top .1s ease-out,transform .1s ease-out .25s;
			}
		}
	}

	ul {
		margin: 0;
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		max-height: 4rem;

		background: var(--color1);
		// overflow: hidden;
		transition: max-height .35s ease-out;
		z-index: 10;

		li {
			display: inline-block;
			height: 100%;
			align-items: center;
			display: flex;
			&.notReactive {
				display: block !important;
			}
			&:not(:first-child) a {
				font-family: johnston, sans-serif;
				font-weight: 700;
				text-transform: uppercase;
				letter-spacing: .05em;
				font-style: normal;
				color: var(--color3);
				line-height: 3rem;
				font-size: 1.063rem;
				text-decoration: none;
				margin-top: .2rem;

				&.is-active {
					color: var(--color4);
				}

				&:hover {
					color: var(--color4);
				}
			}
		}
	}
</style>