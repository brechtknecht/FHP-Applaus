<template>
	<div class="aussteller">
		<!-- Navigation needs to dont be »ScrollActive« -->
		<Navigation :items="this.$root.$options.navigation"></Navigation>
		<Header class="header" :content="aussteller" contentIsGiven></Header>
		
		<section class="content-inner">

			<div class="body">

				<div class="section">
					<div class="text">
						<p>
							<span class="author" v-for="author in aussteller.authors.split(',')" v-html="$root.getAbsolventFullname(author)"></span>
						</p>
					</div>
				</div>

				<div class="section">
					<div class="text" v-html="aussteller.content"></div>
				</div>

			</div>
		</section>
			
		</p>
	</div>
</template>

<script>
import Navigation from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import ApplausData from '../../public/applaus2018.json'

export default {
	name: 'Aussteller',
	data() {
		return {
				aussteller: this.$root.$options.ausstellung.body.list[this.$route.params.id]
		}
	},
	components: {
		Navigation,
		Header
	}
}
</script>
<style lang="scss">
	.body {
		display: flex;
		flex-direction: row;
	}

	.section {
		width: 50%;
		&:first-child {
			margin-right: .5rem;
			text-align: right;
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

	.author {
		display: block;
	}
</style>
