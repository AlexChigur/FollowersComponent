<template lang="pug">
  .followers-count
    .followers-count__values
      followers-item(value="2000")
    .followers-count__add-value
      followers-item(value="+ Add value")


</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FollowersItem from "@/components/FollowersItem.vue";

@Component({
  components: {
    FollowersItem
  },
})

export default class FollowersCount extends Vue {


}

</script>

<style scoped lang="sass">

.followers-count
  width: 100%
  display: flex
  flex-direction: column
  &__add-value
    /deep/
      .followers-item
        color: #6DD230
        &__container
          border: none

</style>
