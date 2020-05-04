<template lang="pug">
  .dropdown
    .dropdown__select(@click="showDropdown")
      .dropdown__select__text {{ text }}
      .dropdown__select__image(
        v-if="icon"
        :class="{'rotated':isDropdownVisible}"
      )
        img(src="../assets/image/070.svg")
    transition(name="slide")
      .dropdown__menu(
        v-if="isDropdownVisible"
      )
        .dropdown__menu__value(
          v-for="value in values"
          @click="selectedValue(value)"
        ) {{ value }}


</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"


@Component({
  components: {},
})
export default class Dropdown extends Vue {
@Prop({ default: true }) icon: boolean
@Prop({}) text: string
@Prop({ default: () => ([]) }) values: []

  isDropdownVisible = false

  showDropdown () {
    this.isDropdownVisible = !this.isDropdownVisible
  }

  selectedValue (value: string) {
    this.isDropdownVisible = false
    this.$emit('selectedValue', value)
  }


}
</script>

<style scoped lang="sass">

.dropdown
  width: fit-content
  cursor: pointer
  position: relative

  &__select
    display: flex
    color: black
    &__image
      padding: 0 6px 0 6px
      transition: transform .3s

  &__menu
    position: absolute
    transition: transform .4s ease-in-out
    transform-origin: top

    &__value
      background-color: white
      border: solid 1px #F2F4F6
      padding: 5px
      display: flex
      cursor: pointer
      &:hover
        background-color: #F2F4F6

.rotated
  transform: rotateX(180deg)
  transition: transform .3s

.slide-enter, .slide-leave-to
  transform: scaleY(0)

</style>
