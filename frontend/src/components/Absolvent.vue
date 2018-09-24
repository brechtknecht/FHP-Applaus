<template>
    <div :class="'absolvent-' + data.id">
      <h5> {{ data.forename }} {{ data.lastname }} </h5>
      <em class="absolvent-desc"> <abbr> {{ data.title }} ·</abbr> {{ data.undertitle }} </em>
    </div>
</template>

<script>
	export default {
		name: 'Absolvent',
		props: {
			data: Object
    },
    created(){
      // console.log(this.data);
    }
  }
</script>

<style lang="scss">
  .absolvent-desc {
    font-size: 1em;
    line-height: 1.4em;
  }
</style>
