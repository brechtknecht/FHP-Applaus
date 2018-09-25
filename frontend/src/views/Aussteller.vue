<template>
	<div class="aussteller">
		<!-- Navigation needs to dont be »ScrollActive« -->
		<Navigation :items="this.$root.$options.navigation"></Navigation>
		<Header class="header" :content="aussteller" contentIsGiven></Header>
		
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
						<div class="absolvent" v-for="absolvent in absolventen" :key="absolvent.id">
							<span class="absolventen-name"> {{ absolvent.forename }} {{ absolvent.lastname }}</span>
							<p> 
								<strong class="content-title"> {{ absolvent.category }} </strong>
								<em> </em>
							</p>
							<p>
								<strong class="content-title"> E-MAIL </strong>
								<em> <a v-bind:href=" `mailto:${absolvent.email}` "> {{ absolvent.email }} </a> </em>
							</p>
							<p>
								<strong class="content-title"> WEB </strong>
								<em> <a v-bind:href="absolvent.website"> {{ absolvent.website }} </a> </em>
							</p>
						</div>
					</div>
				</div>

			</div>
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
		}
	},
	components: {
		Navigation,
		Header
	}
}
</script>
<style lang="scss">
	@import '@/scss/mediaqueries.scss';

	.body {
		display: flex;
		flex-direction: row;
		@include bp(L) {
			flex-direction: column;
		}
	}

	.aussteller{
		.section {
			width: 50%;
			@include bp(L) {
				width: 100%;
			}
			& .betreuer {
				margin-top: 5rem;
				@include bp(L) { 
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
				@include bp(L) {
					text-align: left;
					margin-left: 1rem;
					margin-right: 0;
				}
				& .forename {
					font-family: johnston;
					text-transform: uppercase;
				}
			}
			&:last-child {
				margin-left: 1rem;
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
</style>
