<template lang="pug">
  .followers-count
    .followers-count__values
      followers-item(
        v-for="(element, index) in followers.elements"
        :element="element"
        :index="index"
        :elements="followers.elements"
        @deleteValue="deleteValue"
      )
    .followers-count__add-value(@click="addValue")
      followers-item(
        text="+ Add value"
        :is-editor="false"
      )


</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FollowersItem from '@/components/FollowersItem.vue'
import { followers } from "@/helpers/mock"
import { FollowersType } from "@/helpers/types"

@Component({
  components: {
    FollowersItem
  },
})

export default class FollowersCount extends Vue {
  followers: FollowersType = followers

  get lastItemFollowers () {
    return this.followers.elements[this.followers.elements.length - 1]
  }

  addValue () {
    const newValue = JSON.parse(JSON.stringify(this.lastItemFollowers))
    this.lastItemFollowers.onFail = { action:"fallthrough" }
    this.followers.elements.push(newValue)
  }

  deleteValue (index: number) {
    this.followers.elements.splice(index, 1)
  }
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
