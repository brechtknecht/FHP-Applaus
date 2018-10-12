<template>
	<router-link
			:to="'/aussteller/'+aussteller"
			class="article"
			:class="'thumbSize--'+ausstellerContent.thumbSize"
		>
			<div class="background">
				<div class="gradient_changer"/>
				<div class="gradient"/>
				 <!-- ATTENTION — ToDo ! Insert media queries here in this img tag! (sizes)  -->
				<img
					v-if="ausstellerContent.images[0]"
					:srcset="ausstellerContent.images[0].srcset"
					:src="ausstellerContent.images[0].url"
					sizes="1vw"
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
  	sizes: function() {
  		return {
    		s: "(max-width: 1699px) "+$root.getImageCoverWidth()+",(max-width: 1219px) ,(max-width: 900px) ",
    		m: "",
    		l: ""
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