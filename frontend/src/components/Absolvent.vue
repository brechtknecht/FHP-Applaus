<template>
    <div :class="'absolvent' + absolventId">
      
        <h5 v-if="absolventObject.website">
          <a :href="absolventObject.website">{{ absolventObject.forename }} {{ absolventObject.lastname }}</a>
        </h5>
      
      <h5 v-else>{{ absolventObject.forename }} {{ absolventObject.lastname }}</h5>
      
      <em class="absolvent-desc">{{ absolventObject.title }} · {{ absolventObject.subtitle }}</em>
      <slot />
    </div>
</template>

<script>
	export default {
		name: 'Absolvent',
		props: {
      absolventObject: Object,
			absolventId: String
    }
  }
</script>

<style lang="scss">
  h5 {
    line-height: 1.4;
  }
  .absolvent-desc {
    font-size: 1em;
    line-height: 1.4em;
    hyphens: auto;
  }
</style>
