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
		getAbsolventFullname: function(id) {
			if( id in this.$options.pages.absolventen.body.list) {
				return '<span class="forename">'+this.$options.pages.absolventen.body.list[id].forename + ' </span><span class="lastname">' + this.$options.pages.absolventen.body.list[id].lastname + '</span>';
			}
		},
		randomProperty: function (obj) {
		    var keys = Object.keys(obj)
		    return obj[keys[ keys.length * Math.random() << 0]];
		},

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

