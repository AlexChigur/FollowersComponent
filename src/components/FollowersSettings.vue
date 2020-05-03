<template lang="pug">
  .followers-settings
    .followers-settings__text
      | Followers count is
    .followers-settings__dropdown
      dropdown(
        text="Greater"
        :values="arr"
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
  arr = ['less', 'greater']

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

</style>
