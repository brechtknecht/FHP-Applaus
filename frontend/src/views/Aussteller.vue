<template>
	<div class="aussteller">
		<!-- Navigation needs to dont be »ScrollActive« -->
		<!-- <Navigation :items="this.$root.$options.navigation" routerNav></Navigation> -->
		<Header class="header" :content="aussteller" contentIsGiven></Header>
		<section class="wrapper-content">
			<section class="content-inner">

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
									<strong class="content-title">WEB</strong>&nbsp;
									<em><a v-bind:href="absolvent.website">{{ absolvent.website }}</a></em>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="content-inner">
				<div class="images grid">
					<div class="image" v-for="image in images">
						<img :srcset="image.srcset"/>
					</div>
				</div>
			</section>
			<section class="content-inner">
				<div class="overview">
					<h3 class="subtitle dark">Weitere</h3>
					<h4 class="small-title">Abschlussarbeiten</h4>
				</div>
			</section>
		</section>
	</div>
</template>

<script>
import Navigation from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import ApplausData from '../../public/applaus2018.json'

export default {
	name: 'Aussteller',
	data() {
		let _aussteller = this.$root.$options.ausstellung.body.list[this.$route.params.id];

		return {
				aussteller: _aussteller,
		}
	},
	computed: {
		absolventen(){
			let _aussteller = this.aussteller;
			let _ref = _aussteller.authors.split(',');
			let _absolventen = [];

			_ref.forEach(function(key){
				_absolventen.push(this.$root.getAbsolvent(key));
			}, this.$root);

			return _absolventen;
		},
		betreuer(){
			let _aussteller = this.aussteller;
			let _betreuer = _aussteller.supervisors.split(',');

			return _betreuer;
		},
		studiengang(){
			let _studiengang = [];
			this.absolventen.forEach(function(absolvent){
				let _category = absolvent.category;
				switch(_category) {
					case "ID":
						_category ="Interfacedesign"
						break;
					case "KD":
						_category ="Kommunikationsdesgin"
						break;
					case "PD":
						_category ="Produktdesign"
						break;
					case "MD":
						_category ="Desgin"
						break;
					case "EMW":
						_category ="Europäische Medienwissenschaften"
						break;
					case "MEMW":
						_category ="Europäische Medienwissenschaften"
						break;
				}
				_studiengang.push(_category);
			});
			return _studiengang;
		},
		images() {
			return this.aussteller.images;
		}
	},
	components: {
		Navigation,
		Header
	},
	methods: {
		getDegree: function(category) {
			switch(category) {
					case "ID":
					case "KD":
					case "PD":
					case "EMW":
						return "BA";
						break;
						
					case "MD":
					case "MEMW":
						return "MASTER";
						break;
				}
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
	.wrapper-content {
		background: var(--color5);
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
				margin-right: .5rem;
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
			margin-bottom: .10rem;
		}

		.authors {
			.absolvent {
				margin-bottom: 1.5rem;
				strong {
					margin-right: .3rem;
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

	.author {
		display: block;
	}

	.images {
		.image img{
			width: 100%;
			max-width: 100%;
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


</style>
