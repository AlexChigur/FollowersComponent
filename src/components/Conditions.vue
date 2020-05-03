<template lang="pug">
  .conditions
    .conditions__title
      | Conditions
    .conditions__followers
      followers



</template>

<script lang="js">
import { Component, Vue } from 'vue-property-decorator'
import Followers from "@/components/Followers";
@Component({
  components: {
    Followers
  },
})
export default class Conditions extends Vue {


}
</script>

<style scoped lang="sass">

.conditions
  &__title
    text-align: left
    border-radius: 4px 4px 0 0
    padding: 11px
    background-color: #FF7629
    position: relative
    font-weight: 500
    color: white
    letter-spacing: 0.6px
    &:before
      content: ''
      position: absolute
      width: 6px
      height: 6px
      border: solid #FF7629 2px
      border-radius: 10px
      background-color: white
      left: -4px
      top: 13px






</style>
