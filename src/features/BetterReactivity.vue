<template>
  <div class="hello" @click="test">test {{list }} {{ myObj }}</div>
</template>

<script>
import { ref } from 'vue'
export default {
     setup() {
    let list = ref([1, 2])
    let myObj = ref({ name: 'Preetish' })
    function myFun() {
      list.value[3] = 3
      myObj.value.last = 'HS'
      delete myObj.value.name
    }
    return { myFun, list, myObj }
  }
}
</script>