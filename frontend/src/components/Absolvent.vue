<template>
    <div :class="'absolvent' + absolventId">

        <h5 v-if="absolventObject.slug">
          <router-link :to="'aussteller/'+absolventObject.slug">{{ absolventObject.forename }} {{ absolventObject.lastname }}</router-link>
        </h5>

      <h5 v-else>{{ absolventObject.forename }} {{ absolventObject.lastname }}</h5>

      <em class="absolvent-desc">{{ absolventObject.title }} <span v-if="absolventObject.subtitle"> · {{ absolventObject.subtitle }} </span></em>
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
