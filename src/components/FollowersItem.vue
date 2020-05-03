<template lang="pug">
  .followers-item
    .followers-item__container
      .followers-item__container__value {{ value }}
      .circle


</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {
  },
})

export default class FollowersItem extends Vue {
@Prop() value: number | string

}

</script>

<style scoped lang="sass">

.followers-item
  cursor: pointer
  &__container
    display: flex
    width: 100%
    align-items: center
    border-bottom: 1px dashed #E8ECEF
    justify-content: space-between

    &__value
      padding: 12px 0 12px 12px

.circle
  width: 6px
  height: 6px
  border: solid #FF7629 2px
  border-radius: 10px
  background-color: white
  transform: translateX(5px)

</style>
