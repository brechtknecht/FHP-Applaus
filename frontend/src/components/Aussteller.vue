<template>
	<div class="wrapper">
		<h3 class="subtitle">{{ $root.numberOfExhibitiors }} Aussteller</h3>
		<div v-for="(item, key) in $root.$options.config.categoryorder" :class="key" class="category">
			<div class="title">
				<span>
					{{ item.slug }}
				</span>
				<h4>
					<em>
						{{ item.name }}
					</em>
				</h4>
			</div>


			<div class="grid">
				<router-link 
					:to="'/aussteller/'+aussteller" 
					v-for="(aussteller, key) in getAusstellerGroups(item.slug)" 
					:style="'--y-start:' + grid[item.slug][key].y + '; --x-start:' + grid[item.slug][key].x + '; --y-delta:' + grid[item.slug][key].dy + '; --x-delta:' + grid[item.slug][key].dx"
					:key="item.slug"
					class="article"
				>
						<span class="beschriftung">

								<div class="vignette">
									<icon-base icon-name="signet-box-top" viewBox="0 0 220 66.621"/>
								</div>

								<div class="group">
									<div class="authoren">
										<h5 class="author" v-for="author in content.body.list[aussteller].authors.split(',')">
											<span class="forename">{{$root.getAbsolventFullname(author).forename}} </span><span class="lastname">{{$root.getAbsolventFullname(author).lastname}}</span>
										</h5>
									</div>
									<em class="titel">
										{{ content.body.list[aussteller].title }}
									</em>
								</div>
								
								<div class="vignette">
									<icon-base icon-name="signet-box-bottom" viewBox="0 0 220 66.621"/>
								</div>


						</span>
						<div class="gradient_changer"/>
						<div class="gradient"/>
						 <!-- ATTENTION — ToDo ! Insert media queries here in this img tag! (sizes)  -->
						<img :srcset="content.body.list[aussteller].images[0].srcset" :src="content.body.list[aussteller].images[0].url" sizes="50vw"> 	
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import IconBase from './IconBase.vue'
	
	export default {
	name: 'Aussteler',
	data() {
		return {
			grid: {
				"ID": {
					0: {
						x: 1,
						y: 1,
						dx: 2,
						dy: 1
					},
				},
				"PD": {
					0: {
						x: 1,
						y: 1,
						dx: 2,
						dy: 2
					},
				},
				"KD": {
					0: {
						x: 1,
						y: 1,
						dx: 2,
						dy: 2
					},
				},
				"EMW": {
					0: {
						x: 1,
						y: 1,
						dx: 2,
						dy: 2
					},
				},
				"MASTER": {
					0: {
						x: 1,
						y: 1,
						dx: 2,
						dy: 2
					},
					1: {
						x: 3,
						y: 1,
						dx: 1,
						dy: 2
					},
					2: {
						x: 4,
						y: 1,
						dx: 1,
						dy: 2
					},
				}
			}
		}
	},
	components: {
		IconBase
	},
	props: {
		content: Object,
	},
	methods: {
		getAusstellerGroups(category) {
			if(category == 'MASTER') {
				return this.content.body.groups.MEMW.concat(this.content.body.groups.MD);
			} else {
				return this.content.body.groups[category];
			}
		}
	}
}
</script>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-auto-rows: 9.090909091rem;
		grid-column-gap: 2.272727273rem;
		grid-row-gap: 2.272727273rem;
		width: 100%;
		box-sizing: border-box;
		.article {	
			grid-column-start: var(--x-start);
			grid-column-end: span var(--x-delta);
			grid-row-start: var(--y-start);
			grid-row-end: span var(--y-delta);
			overflow: hidden;
			position: relative;
			z-index: 0;
			color: var(--color4);
			border: none;

			.gradient {
				background: linear-gradient(to bottom, var(--gradient_col2-20perc) 0, var(--gradient_col2-20perc) 37%, var(--gradient_col2-35perc) 100%);
				position: absolute;
				width: 100%;
				height: 100%;
			}
			.gradient_changer {
				background: linear-gradient(to bottom, var(--gradient_col1-70perc) 0, var(--gradient_col1-70perc) 37%, var(--gradient_col1-80perc) 100%);
				position: absolute;
				width: 100%;
				height: 100%;
				opacity: 0;
				transition: opacity .75s;
			}
			img {
				height: 100%;
				width: 100%;
				object-fit: cover;
			}
			&:hover {

				.gradient_changer {
					opacity: 1;
				}
				.vignette {
					opacity: 1;
					&:first-child {
						// padding-bottom: 5rem;
						margin-top: 1rem;
					}
					&:last-child {
						// padding-top: 5rem;
						margin-bottom: 1rem;
					}
				}
				.group {
					opacity: 1;
				}

			}
		}
	}
	.vignette {
		opacity: 0;
		transition: margin .4s, opacity .4s;
		&:first-child {
			// padding-bottom: 7rem;
			margin-top: 0;
		}
		&:last-child {
			// padding-top: 7rem;
			margin-bottom: 0;
		}
		svg {
			position: relative;
			width: 5.625rem;
			margin: 0 auto;
		}
	}	
	.beschriftung {
		position: absolute;
		z-index: 2;
		left: 0; 
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-align: center;
		height: 18.6363rem;
		top: 50%;
		margin-top: - 9.31815rem;

		.group {
			padding: 0 1.25rem;
			opacity: 0;
			transition: opacity .4s;
		}
		.authoren {
			padding: 0 0 .5rem;
			h5 {
				margin: 0;
				line-height: 1.3rem;
				font-size: .875rem;
				font-weight: 700;
				text-transform: uppercase;
				letter-spacing: .05em;
				font-style: normal;
			}
		}

	}
	.category {
		margin-bottom: 2.727272727rem;
		padding-top: 2.6rem;
		.title {
			text-align: center;
			margin-bottom: 2.25rem;
				span {
				font-family: johnston;
				font-style: normal;
				letter-spacing: .05em;
				line-height: 1.3rem;
				text-transform: uppercase;
				font-weight: 400;
				font-size: 1rem;
				text-decoration: none;
				margin: 0;
			} 
			h4 {
				font-family: abril-text,serif;
				font-size: 1rem;
				font-weight: 400;
				text-decoration: none;
				line-height: 1.3rem;
				// cursor: pointer;
				margin: 0; 
			}
		}
	}
</style>