<template>
  <svg xmlns="http://www.w3.org/2000/svg"
	:viewBox="viewBox"
	:class="iconName"
	:aria-labelledby="iconName"
	role="presentation">
	  <component :is="'icon-' + iconName"/>
  </svg>
</template>

<script>
import IconSignet from '../icons/IconSignet.vue'
import IconApplaus from '../icons/IconApplaus.vue'
import IconSignetNav from '../icons/IconSignetNav.vue'
import IconSignetBoxBottom from '../icons/IconSignetBoxBottom.vue'
import IconSignetBoxTop from '../icons/IconSignetBoxTop.vue'
import IconArrowDown from '../icons/IconArrowDown.vue'
import IconMap from '../icons/IconMap.vue'
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    viewBox: {
      type: [Number, String],
      default: '0 0 1 1'
    }
  },
  components: {
    IconApplaus,
    IconSignet,
    IconSignetNav,
    IconSignetBoxBottom,
    IconSignetBoxTop,
    IconArrowDown,
    IconMap
  }
}
</script>
