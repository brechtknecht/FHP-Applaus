<template>
    <div :class="'absolvent' + absolventId">
      <h5> {{ $root.getAbsolvent(absolventId).forename }} {{ $root.getAbsolvent(absolventId).lastname }} </h5>
      <em class="absolvent-desc"> <abbr> {{ $root.getAbsolvent(absolventId).title }} ·</abbr> {{ $root.getAbsolvent(absolventId).undertitle }} </em>
      <slot />
    </div>
</template>

<script>
	export default {
		name: 'Absolvent',
		props: {
			absolventId: String,
     
    }
  }
</script>

<style lang="scss">
  .absolvent-desc {
    font-size: 1em;
    line-height: 1.4em;
  }
</style>
