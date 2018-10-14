<template>
	<div class="aussteller">
		<!-- Navigation needs to dont be »ScrollActive« -->
		<!-- <Navigation :items="this.$root.$options.navigation" routerNav></Navigation> -->
		<Header class="header" :content="aussteller" contentIsGiven></Header>
		<section class="wrapper-content">
			<section class="content-inner" style="padding-bottom: 4.5rem;">

				<div class="body">

					<div class="section">
						<span class="content-title"> {{ aussteller.title }} </span>
						<span class="content-subtitle"> {{ aussteller.subtitle }} </span>

						<div class="betreuer">
								<span class="content-title">Betreuer</span>
								<em v-for="betreuer in betreuer" :key="betreuer.id">
									{{ betreuer }}
								</em>
							</div>
					</div>

					<div class="section">
						<div class="text">
							<p v-html="aussteller.content"></p>
						</div>
						<div class="authors">
							<div class="absolvent" v-for="(absolvent, index) in absolventen" :key="absolvent.id">
								<span class="absolventen-name">{{ absolvent.forename }} {{ absolvent.lastname }}</span>
								<p>
									<strong class="content-title">{{ getDegree(absolvent.category) }}</strong>&nbsp;
									<em>{{ studiengang[++index - 1] }}</em>
								</p>
								<p>
									<strong class="content-title">E-MAIL</strong>&nbsp;
									<em><a v-bind:href=" `mailto:${absolvent.email}` ">{{ absolvent.email }}</a></em>
								</p>
								<p>
									<strong v-if="absolvent.website" class="content-title">WEB</strong>&nbsp;
									<em><a v-bind:href="absolvent.website" target="_blank"> {{ absolvent.website }} </a></em>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="images" v-if="images.length > 0">
				<div class="images-grid-inner" :class="this.aussteller.template">
					<div class="image" v-for="image in images" :key="image.key">
						<img :srcset="image.srcset" :src="image.url" />
					</div>
				</div>
			</section>
			<section class="content-inner mobile-none">
				<div class="overview">
					<h3 class="subtitle dark">Weitere</h3>
					<h4 class="small-title">Abschlussarbeiten</h4>
				</div>

				<div class="tab-menu">
					<h3 class="tab" 
						v-for="(item, key) in $root.$options.config.categoryorder" :key="item.key"
						v-on:click="toggleTab(key, item.slug)"
						v-bind:class="{active: isActive[key]}">
						<span>
							{{ item.slug }}<br>
							<h4><em>{{ parseShort(item.name) }}</em></h4>
						</span>
					</h3>
				</div>

				<transition name="fade" mode="out-in">
					<ausstellerGrid 
						:categorySlug="this.currentGridView" 
						:content="$root.$options.ausstellung" class="ausstellerGrid"
						:key="this.currentGridView"
					/>
				</transition>

			</section>
		</section>
	</div>
</template>

<script>
import Navigation from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import ausstellerGrid from '../components/ausstellerGrid.vue'
import ApplausData from '../../public/applaus2018.json'

export default {
  name: 'Aussteller',
  data () {
		let _aussteller  = this.$root.$options.ausstellung.body.list[this.$route.params.id]
		let _currentGrid = _aussteller.category;
		let category     = this.$root.$options.config.categoryorder;
		
		let _index        = [];


		for (const key of Object.keys(category)) {
			if(category[key].slug == _currentGrid){
				_index[key] = true;
			} else if (category[key].slug == 'MASTER' && (_currentGrid == 'MEMW' || _currentGrid == 'MD')){
				_index[6] = true;
			}
		}

    return {
			aussteller: _aussteller,
			currentGridView: _currentGrid,
			isActive: _index
    }
  },
  computed: {
    absolventen () {
      let _aussteller = this.aussteller
      let _ref = _aussteller.authors.split(',')
      let _absolventen = []

      _ref.forEach(function (key) {
        _absolventen.push(this.$root.getAbsolvent(key))
      }, this.$root)

      return _absolventen
    },
    betreuer () {
      let _aussteller = this.aussteller
      let _betreuer = _aussteller.supervisors.split(',')

      return _betreuer
		},
    studiengang () {
			let _studiengang = []
      this.absolventen.forEach(function (absolvent) {
        let _category = absolvent.category
        switch (_category) {
          case 'ID':
            _category = 'Interfacedesign'
            break
          case 'KD':
            _category = 'Kommunikationsdesgin'
            break
          case 'PD':
            _category = 'Produktdesign'
            break
          case 'MD':
            _category = 'Desgin'
            break
          case 'EMW':
            _category = 'Europäische Medienwissenschaften'
            break
          case 'MEMW':
            _category = 'Europäische Medienwissenschaften'
            break
        }
        _studiengang.push(_category)
      })
      return _studiengang
    },
    images () {
      return this.aussteller.images
    }
  },
  components: {
    Navigation,
    Header,
	ausstellerGrid
	},
  methods: {
    getDegree: function (category) {
      switch (category) {
        case 'ID':
        case 'KD':
        case 'PD':
        case 'EMW':
          return 'BA'
          break

        case 'MD':
        case 'MEMW':
          return 'MASTER'
          break
      }
		},
		parseShort(name) {
			switch (name) {
				case 'Interfacedesign':
					return 'Interface\ndesign'
				case 'Kommunikationsdesign':
					return 'Kommunikations\ndesign'
				case 'Produktdesign':
					return 'Produkt\ndesign'
				case 'Europäische Medienwissenschaft':
					return 'Europäische \n Medienwissenschaft'
				case 'Design & Europäische Medienwissenschaft':
					return 'Design \n Master'
			}
			return name
		},
		toggleTab(key, slug){

			if(this.isActive[key]){
				return;
			}

			for(var i = 0; i < this.isActive.length; i++){
				this.isActive[i] = false;
			}

			this.$set(this.isActive, key, !this.isActive[key]);

			this.currentGridView = slug;
		}
  }
}
</script>
<style lang="scss">
	@import '@/scss/mediaqueries.scss';
	.body {
		display: flex;
		flex-direction: row;
		@include bp(M) {
			flex-direction: column;
		}
	}

	/* TRANSITIONS */
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}

	.wrapper-content {
		background: var(--color5);
	}

	.mobile-none {
		@include bp(M){
			display: none;
		}
	}

	.aussteller {

		.section {
			width: 50%;
			@include bp(M) {
				width: 100%;
			}

			& .betreuer {
				margin-top: 5rem;
				@include bp(M) {
					margin-top: 1.5rem;

				}
				em {
					display: block;
					margin-bottom: .4rem;
				}
			}
			&:first-child {
				margin-right: 2.272727273rem;
				text-align: right;
				@include bp(M) {
					text-align: left;
					// margin-left: 1rem;
					margin-right: 0;
				}
				& .forename {
					font-family: johnston;
					text-transform: uppercase;
				}
			}
			&:last-child {
				//margin-left: 1rem;
				text-align: left;
			}
		}
		.content-title {
			display: block;
			font-family: johnston;
			font-style: normal;
			letter-spacing: .05em;
			line-height: 1.3rem;
			text-transform: uppercase;
			font-weight: 400;
			font-size: .875rem;
			text-decoration: none;
			margin-top: .318rem;
			// margin-bottom: .10rem;
		}

		.content-subtitle {
			line-height: 1.5rem;
			margin-top: -0.5rem;
		}

		.authors {
			.absolvent {
				margin-bottom: 1.5rem;
				strong {
					// margin-right: .3rem;
				}
			}
			.absolventen-name {
				font-feature-settings: "smcp","c2sc";
				text-transform: uppercase;
				letter-spacing: .05em;
				line-height: 2rem;
			}
			.content-title {
				display: inline-block;
			}
			p {
				margin: 0;
			}
		}
	}
	.text {
		// word-wrap: break-word;
		// hyphens: auto;
	}
	.author {
		display: block;
	}
	.images {
		padding-top: 5rem;
		padding-bottom: 4.5rem;
		background: var(--color3);
	}

	.images-grid-inner {
		display: grid;
		grid-template-columns: 1fr;
		grid-row-gap: 2rem;
		grid-column-gap: 2rem;
		img {
			height: 100%;
		}
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: 50% 50%;
	}

	.thumbnail {
		grid-template-columns: 1fr 1fr;
		grid-auto-rows: auto;
		.image:first-child {
			display: none;
		}
		.image:nth-child(2) {
			grid-column: 1 / span 2;
		}
		.image:last-child,
		.image:nth-last-child(2):nth-child(odd) {
			grid-column: 1 / span 2;
		}
	}

	.imageBig {
		grid-template-columns: 1fr;
		.image:first-child {
			display: none;
		}
	}

	.imageSmall {
		grid-template-columns: 1fr 1fr;
		.image:first-child {
			display: none;
		}
		.image:last-child,
		.image:nth-last-child(2):nth-child(even) {
			grid-column: 1 / span 2;
		}	
	}

	.overview {
		.dark {
			color: var(--color4);
			margin-bottom: .75rem;
		}
		.small-title {
			font-size: 2.75rem;
			text-transform: uppercase;
			margin-bottom: 3rem;
			margin-top: 1.75rem;
			letter-spacing: .05em;
			text-align: center;
		}
	}
	.tab-menu {
		display: flex;
		justify-content: space-around;
		border-bottom: var(--color1) solid 3px;
		.tab {
			margin-bottom: 1.5rem;
			cursor: pointer;
			&:hover {
				span,
				h4 {
					color: var(--color1)
				}
			}
			span {
				position: relative;
				top: 12px;
				font-family: johnston;
				font-style: normal;
				line-height: 1.3rem;
				font-weight: 400;
				font-size: 1rem;
				opacity: .5;
				color: var(--color4);
				text-decoration: none;
				margin: 0;
				transition: color .2s;
		}
			h4 {
				font-family: abril-text,serif;
				font-size: 1rem;
				font-weight: 400;
				text-decoration: none;
				hyphens: auto;
				line-height: 1.3rem;
				color: var(--color4);
				opacity: .5;
				margin: 0;
				transition: color .2s;
				em {
					white-space: pre-wrap;
				}
			}
		}
		.active {
				span {
					top: 0;
					opacity: 1 !important;
					color: var(--color4);
				}
				h4 {
					opacity: 1 !important;
					color: var(--color4);
				}
				cursor: auto;
				--strokewidth: 3px;
				&:before {
					clear: both;
					content: "";
					position: relative;
			    border-style: solid;
			    border-width: calc(4 * var(--strokewidth)) calc(4 * var(--strokewidth)) 0;
			    border-color: var(--color1) transparent;
			    display: block;
			    width: 0;
			    z-index: 0;
			    left: 50%;
			    margin-left: calc(-4 * var(--strokewidth));
			    bottom: calc(-100% - 1.5rem);
			}
			&:after {
			    clear: both;
			    content: "";
			    position: relative;
			    border-style: solid;
			    border-width: calc(4 * var(--strokewidth) - calc(var(--strokewidth) - 1px)) calc(4 * var(--strokewidth) - calc(var(--strokewidth) - 1px)) 0;
			    border-color: var(--color5) transparent;
			    display: block;
					width: 0;
					bottom: calc(-1.5rem + var(--strokewidth) - 11px);
			    z-index: 1;
			    left: 50%;
			    margin-left: calc(-4 * var(--strokewidth) + calc(var(--strokewidth) - 1px) );
			}
		}
	}
	.ausstellerGrid {
		margin: 2rem 0;
	}
</style>
