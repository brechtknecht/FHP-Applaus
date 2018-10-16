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
import IconUniPotsdam from '../icons/IconUniPotsdam.vue'
import IconFhPotsdam from '../icons/IconFHPotsdam.vue'
import IconSignetNav from '../icons/IconSignetNav.vue'
import IconArrowPrev from '../icons/IconArrowPrev.vue'
import IconArrowNext from '../icons/IconArrowNext.vue'
import IconSignetBoxBottom from '../icons/IconSignetBoxBottom.vue'
import IconSignetBoxTop from '../icons/IconSignetBoxTop.vue'
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
    IconUniPotsdam,
    IconFhPotsdam,
    IconSignetBoxBottom,
    IconSignetBoxTop,
    IconMap,
    IconArrowNext,
    IconArrowPrev
  }
}
</script>
