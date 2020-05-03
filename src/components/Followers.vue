<template lang="pug">
  .followers
    .followers__title
      .followers__title__image
        img(src="../assets/image/062arrow.svg")
      .followers__title__text
        | Followers
    .followers__main-block
      .followers__main-block__settings
        followers-settings
      .followers__main-block__count
        followers-count
    .followers__footer
      .followers__footer__description-block
        .followers__footer__description-block__text
          | Followers count is
      .followers__footer__value
        followers-item(value="< 2000")





</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import FollowersSettings from "@/components/FollowersSettings.vue"
import FollowersCount from "@/components/FollowersCount.vue"
import FollowersItem from "@/components/FollowersItem.vue";

@Component({
  components: {
    FollowersItem,
    FollowersCount,
    FollowersSettings
  },
})

export default class Followers extends Vue {


}

</script>

<style scoped lang="sass">

.followers

  &__title
    display: flex
    font-size: 10px
    padding: 12px
    color: #778CA2
    border-bottom: solid 1px #F2F4F6

    &__text
      padding-left: 4px

  &__main-block
    display: flex
    border-bottom: 1px dashed #E8ECEF

    &__settings
      width: 60%
      border-right: 1px dashed #E8ECEF
    &__count
      width: 40%

  &__footer
    display: flex

    &__description-block
      width: 60%
      border-right: 1px dashed #E8ECEF

      &__text
        padding: 12px 0 12px 12px

    &__value
      width: 40%
      /deep/
        .followers-item
          color: #FF4550
</style>
