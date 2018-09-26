<template>
    <div :class="'absolvent' + absolventId">
      <h5> {{ absolventObject.forename }} {{ absolventObject.lastname }} </h5>
      <em class="absolvent-desc"> <abbr> {{ absolventObject.title }} ·</abbr> {{ absolventObject.undertitle }} </em>
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
  .absolvent-desc {
    font-size: 1em;
    line-height: 1.4em;
  }
</style>
