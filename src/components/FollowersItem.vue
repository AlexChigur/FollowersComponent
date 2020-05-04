<template lang="pug">
  .followers-item
    .followers-item__editor-container(v-if="element")
      .followers-item__editor-container__value
        input.followers-item__editor-container__value__input(
          v-model="inputValue"
        )
      .cross(
        v-if="isLastValue"
        @click="deleteValue"
      )
        img(src="../assets/image/cross.png")
      .circle
    .followers-item__container(v-else)
      .followers-item__container__text {{ text }}
      .circle

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ElementType } from "@/helpers/types"

@Component({
  components: {
  },
})

export default class FollowersItem extends Vue {
@Prop({ default: true }) isEditor: boolean
@Prop({}) text: string
@Prop({}) element: ElementType
@Prop({}) elements: []
@Prop({}) index: number

  get inputValue () {
    return this.element.condition.value
  }
  set inputValue (value: number) {
    Vue.set(this.element.condition, 'value', value)
  }

  get isLastValue (): boolean {
    return this.elements.length > 1
  }

  deleteValue () {
    this.$emit('deleteValue', this.index)
  }


}

</script>

<style scoped lang="sass">

.followers-item
  cursor: pointer
  &__editor-container
    display: flex
    width: 100%
    align-items: center
    border-bottom: 1px dashed #E8ECEF
    justify-content: space-between

    &__value
      padding: 12px 0 12px 12px
      &__input
        max-width: 50px
        border: none

  &__editor-container:hover
    .cross
      display: block

  &__container
    display: flex
    justify-content: space-between
    align-items: center
    &__text
      padding: 12px 0 12px 12px


.circle
  width: 6px
  height: 6px
  border: solid #FF7629 2px
  border-radius: 10px
  background-color: white
  transform: translateX(5px)

.cross
  display: none
  img
    width: 15px
    height: 15px

</style>
