<template>
  <div id="app">
    <my-header></my-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from "./components/header/myheader"
import myFooter from "./components/footer/footer"
import { getAjax } from "./assets/js/ajax"

export default {
  // data(){
  //
  // },
  // props:[
  //
  // ],
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style>
</style>
