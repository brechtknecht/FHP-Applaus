<template>
	<router-link
			:to="'/aussteller/'+aussteller"
			class="article"
			:class="'thumbSize--'+ausstellerContent.thumbSize+' indexAbsolute_'+ausstellerContent.index"
		>
			<div class="background">
				<div class="gradient_changer"/>
				<div class="gradient"/>
				 <!-- ATTENTION — ToDo ! Insert media queries here in this img tag! (sizes)  -->
				<img
					v-if="ausstellerContent.images[0]"
					:srcset="ausstellerContent.images[0].srcset"
					:src="ausstellerContent.images[0].url"
					:sizes="sizes"
				>
			</div>
				<span class="beschriftung" :class="{noImage: noImage(aussteller)}">
						<div class="vignette">
							<icon-base icon-name="signet-box-top" viewBox="0 0 220 66.621"/>
						</div>

						<div class="group">
							<div class="authoren">
								<h5 class="author" v-for="author in ausstellerContent.authors.split(',')">
									<span class="forename">{{$root.getAbsolventFullname(author).forename}} </span><span class="lastname">{{$root.getAbsolventFullname(author).lastname}}</span>
								</h5>
							</div>
							<em class="titel">
								{{ ausstellerContent.title }}
							</em>
						</div>

						<div class="vignette">
							<icon-base icon-name="signet-box-bottom" viewBox="0 0 220 66.621"/>
						</div>
				</span>
		</router-link>
</template>
<script>
import IconBase from './IconBase.vue'

export default {
  name: 'AusstellerGridItem',
  data () {
    return {
    }
  },
  	computed: {
  		aspectRatio: function() {
  			if( this.ausstellerContent.images.length > 0) {
  				return this.ausstellerContent.images[0].aspect_ratio
  			}
  		},
    	thumbSize: function() {
    		return this.ausstellerContent.thumbSize
    	},
	  	responsiveImageSizes: function() {

    		return {
				s: {
					normal: {
						w: 300,
						h: 200
					},
					xxl: {
						w: 215,
						h: 241
					},
					xl: {
						w: 147,
						h: 98
					},
					m: { //bis hier her px
						w: 308,
						h: 205
					},
					s: { //viewport units
						w: this.$root.viewportWidth,
						h: 0.66666 * this.$root.viewportWidth
					}
				},
				m: {
					normal: {
						w: 300,
						h: 450
					},
					xxl: {
						w: 215,
						h: 322
					},
					xl: {
						w: 147,
						h: 216
					},
					m: { //bis hier her px
						w: 308,
						h: 205
					},
					s: { //viewport units
						w: this.$root.viewportWidth,
						h: 0.66666 * this.$root.viewportWidth
					}
				},
				l: {
					normal: {
						w: 650,
						h: 450
					},
					xxl: {
						w: 470,
						h: 322
					},
					xl: {
						w: 314,
						h: 216
					},
					m: {
						w: 308,
						h: 205
					},
					s: {
						w: this.$root.viewportWidth,
						h: 0.66666 * this.$root.viewportWidth
					}
				}
    		}
	    },
	  	sizes: function() {
	  		if(this.ausstellerContent.images.length > 0){
		  		return "(max-width: 1699px) " + 
		  				this.$root.getImageCoverWidth(
		  					this.aspectRatio,
		  				 	this.responsiveImageSizes[this.thumbSize].xxl.w, 
		  				 	this.responsiveImageSizes[this.thumbSize].xxl.h
		  				 	)
		  				+ "px, (max-width: 1219px) " + 
		  				this.$root.getImageCoverWidth(
		  					this.aspectRatio,
		  				 	this.responsiveImageSizes[this.thumbSize].xl.w, 
		  				 	this.responsiveImageSizes[this.thumbSize].xl.h
		  				 	)
		  				+ "px, (max-width: 768px) " + 
		  				this.$root.getImageCoverWidth(
		  					this.aspectRatio,
		  				 	this.responsiveImageSizes[this.thumbSize].m.w, 
		  				 	this.responsiveImageSizes[this.thumbSize].m.h
		  				 	)
		  				+ "px, (max-width: 660px) " + 
		  				this.$root.getImageCoverWidth(
		  					this.aspectRatio,
		  				 	this.responsiveImageSizes[this.thumbSize].s.w, 
		  				 	this.responsiveImageSizes[this.thumbSize].s.h
		  				 	)
		  				+ "px, " + 
		  				this.$root.getImageCoverWidth(
		  					this.aspectRatio,
		  				 	this.responsiveImageSizes[this.thumbSize].normal.w, 
		  				 	this.responsiveImageSizes[this.thumbSize].normal.h
		  				 	)
		  				+ "px"	
	  		}
	  	}
  },
  components: {
    IconBase
  },
  props: {
   	aussteller: String,
    ausstellerContent: Object
  },
  methods: {
  	noImage: function(aussteller) {
  		return (typeof this.ausstellerContent.images[0] === "undefined") ? true : false;
  	}
  }
}
</script>