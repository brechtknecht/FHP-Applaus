<template>
	<div class="grid" :class="categorySlug">
		<ausstellerGridItem
			v-for="(aussteller, key) in getAusstellerGroups(categorySlug)"
			:key="categorySlug + key"
			:ausstellerContent="content.body.list[aussteller]"
			:aussteller="aussteller"
		/>
	</div>

</template>

<script>
import ausstellerGridItem from './ausstellerGridItem.vue'

export default {
  name: 'AusstellerGrid',
  data () {
    return {
    }
  },
  computed: {
  	sizes: function() {
  		return {
    		s: "(max-width: 1699px) "+$root.getImageCoverWidth()+",(max-width: 1219px) ,(max-width: 900px) ",
    		m: "",
    		l: ""
    	}
  	}
  },
  components: {
    ausstellerGridItem
  },
  props: {
    categorySlug: String,
    content: Object
  },
  methods: {
    getAusstellerGroups (category) {
      if (category == 'MASTER') {
        return this.content.body.groups.MEMW.concat(this.content.body.groups.MD)
      } else {
        return this.content.body.groups[category]
      }
    }
  }
}
</script>

<style lang="scss">
	@import '@/scss/mediaqueries.scss';
	.grid {
		--row-height: 9.090909091rem;
		--gap: 2.272727273rem;

		@include bp(XXL) {
			--row-height: 8.8125rem;
			--gap: 2.5rem;
		}
		@include bp(XL) {
			--row-height: 7rem;
			--gap: 1.428571429rem;

			.beschriftung {
				@include bp (XL) {
					.group {
						margin-top: 0;
						margin-bottom: 0;
					}
					.titel {
						line-height: 1.2rem;
						display: none;
					}
					.authoren {
						padding: 0;
					}
				}
				@include bp (M) {
					.group {
						margin-top: .8rem;
						margin-bottom: 2rem;
					}
					.titel {
						line-height: 1.4rem;
						display: inherit;
					}
					.authoren {
						padding: 0;
					}
				}
				
			}
		}
	}
@include bp(min-L) {
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		width: 100%;
		box-sizing: border-box;
		grid-auto-flow: row dense;
		grid-column-gap: var(--gap);
		grid-row-gap: var(--gap);
		grid-auto-rows: var(--row-height);

		.article {
			// grid-column-start: var(--x-start);
			// grid-column-end: span var(--x-delta);
			// grid-row-start: var(--y-start);
			// grid-row-end: span var(--y-delta);

			overflow: hidden;
			position: relative;
			z-index: 0;
			color: var(--color4);
			border: none;

			&.thumbSize--s {
				grid-column-end: span 1;
				grid-row-end: span 1;
			}
			&.thumbSize--m {
				grid-column-end: span 1;
				grid-row-end: span 2;
			}
			&.thumbSize--l {
				grid-column-end: span 2;
				grid-row-end: span 2;
			}

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
			.background {
				height: 100%;
				width: 100%;

				img {
					height: 100%;
					width: 100%;
					object-fit: cover;
				}
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
				.group, .noImage .group {
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
		height: calc(2 * var(--row-height));
		top: 50%;
		margin-top: calc(-1 * var(--row-height));

		.group {
			padding: 0 1.25rem;
			opacity: 0;
			transition: opacity .4s;
		}
		&.noImage .group {
			opacity: .5;
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
}
@include bp(M) {
	@include bp(min-M) { 
		.grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			width: 100%;
			box-sizing: border-box;
			grid-auto-flow: row dense;
			grid-column-gap: var(--gap);
			grid-row-gap: var(--gap);
			grid-template-rows: repeat(auto-fill);
			
			.article {
				grid-column-start: inherit !important;
				grid-row-start: inherit !important;
				grid-column-end: span 1 !important;
				grid-row-end: span 1 !important;
			}
		}
	}
}
	@include bp(M) {
		.article {
			border: 0;
			width: 100%;
			display: block;
			.background {
				padding-bottom: 66.6666%;
				position: relative;
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					position: absolute;
					z-index: 1;
				}
				.gradient {
					background: linear-gradient(to bottom, var(--gradient_col2-20perc) 0, var(--gradient_col2-20perc) 37%, var(--gradient_col2-35perc) 100%);
					position: absolute;
					width: 100%;
					height: 100%;
					z-index: 2;
					display: block;
				}
			}

			.vignette {
				display: none;
			}
			.gradient {
				display: none;
			}
		}
	}

	// ====================== GRID LAYOUT IMPROVEMENT ============================
	.ID .article:nth-child(3) {
		grid-column-start: 3;
		grid-row-start: 3;
	}
	// .EMW .article:nth-child(7) {
	// 	grid-column-start: 1;
	// 	grid-row-start: 3;
	// }
	.PD .article:nth-child(5) {
		grid-column-start: 1;
		grid-row-start: 3;
	}
	.MASTER .article:nth-child(8) {
		grid-column-start: 1;
		grid-row-start: 3;
	}	
	.MASTER .article:nth-child(9) {
		grid-column-start: 3;
		grid-row-start: 5;
	}
	.MASTER .article:nth-child(5) {
		grid-column-start: 3;
		grid-row-start: 1;
	}
	.KD .article:nth-child(5) {
		grid-column-start: 1;
		grid-row-start: 3;
	}
	.KD .article:nth-child(9) {
		grid-column-start: 1;
		grid-row-start: 5;
	}
	.KD .article:nth-child(11) {
		grid-column-start: 4;
		grid-row-start: 5;
	}
	// .category_6 a:nth-child(5) {
	// 	grid-column-start: 1;
	// 	grid-row-start: 1;
	// }

</style>