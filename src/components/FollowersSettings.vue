<template lang="pug">
  .followers-settings
    .followers-settings__text
      | Followers count
    .followers-settings__dropdown
      span.followers-settings__dropdown__article is
      dropdown(
        :text="text"
        :values="items"
        @selectedValue="selectedValue"
      )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Dropdown from "@/components/Dropdown.vue";

@Component({
  components: {
    Dropdown
  },
})

export default class FollowersSettings extends Vue {
  items = ['Less', 'Greater']
  text = 'Greater'

  selectedValue (value: string) {
    this.text = value
    this.$emit('selectedValue', value)
  }
}

</script>

<style scoped lang="sass">

.followers-settings
  font-size: 12px
  color: #778CA2
  padding: 14px 0 0 12px
  &__dropdown
    display: flex
    &:after
      content: "than"
    &__article
      padding-right: 2px

</style>
