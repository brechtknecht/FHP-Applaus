import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './scss/main.scss'
import 'normalize.css'
import VueScrollActive from 'vue-scrollactive'
import ApplausData from '../public/applaus2018.json'

Vue.use(VueScrollActive);

Vue.config.productionTip = false

new Vue({
  	router,
  	render: h => h(App),
	styling: ApplausData.config.styling,
	pages: ApplausData.pages,
	config: ApplausData.config,
	navigation: ApplausData.navigation,
	ausstellung: ApplausData.pages.ausstellung,
	absolventen: ApplausData.pages.absolventen,
	data: {
		viewportHeight: 0,
		viewportWidth: 0
	},
	methods: {
		
		extend: function(target) {
		    for(var i=1; i<arguments.length; ++i) {
		        var from = arguments[i];
		        if(typeof from !== 'object') continue;
		        for(var j in from) {
		            if(from.hasOwnProperty(j)) {
		                target[j] = typeof from[j]==='object'
		                ? extend({}, target[j], from[j])
		                : from[j];
		            }
		        }
		    }
		    return target;
		},

		getAbsolventFullname: function(id) {
			if( id in this.$options.pages.absolventen.body.list) {
				return {
					forename:	this.$options.pages.absolventen.body.list[id].forename,
					lastname: this.$options.pages.absolventen.body.list[id].lastname
				};
			}
		},
		getAbsolvent: function(id) {
			if(id in this.$options.pages.absolventen.body.list) {

				var absolvent = this.$options.pages.absolventen.body.list[id];

				if(!this.$options.pages.absolventen.body.list[id].title) {
					if(id in this.$options.pages.ausstellung.body.one2one) {
						var projekt = this.$options.pages.ausstellung.body.list[this.$options.pages.ausstellung.body.one2one[id]];
						absolvent = Object.assign(absolvent, {
							title: projekt.title,
							subtitle: projekt.subtitle,
							slug: projekt.slug
							});
					}
				}
				console.log(absolvent);
				return absolvent;
			}
		},
		randomProperty: function (obj) {
		    var keys = Object.keys(obj)
		    return obj[keys[ keys.length * Math.random() << 0]];
		}
	},
	computed: {
		themeStyling: function() {
			var jsonStyling = this.$options.styling;
			var result = Object.assign({
				'--viewportHeight': this.viewportHeight,
				'--viewportWidth': this.viewportWidth
			} ,jsonStyling);
			return result;

		},
		numberOfStudents: function() {
			return Object.keys(this.$options.absolventen.body.list).length;
		},
		numberOfExhibitiors: function() {
			return Object.keys(this.$options.ausstellung.body.list).length;
		}
	}
}).$mount('#app')

