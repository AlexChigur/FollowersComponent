<template lang="pug">
  .app
    conditions

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Conditions from "@/components/Conditions.vue";


@Component({
  components: {
    Conditions
  },
})
export default class App extends Vue {


}
</script>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400&display=swap')
.app
  font-family: 'Rubik'
  font-size: 12px
  max-width: 246px
  box-shadow: 0px 6px 32px rgba(152, 169, 188, 0.24), 0px 4px 8px rgba(119, 140, 162, 0.08)

</style>
