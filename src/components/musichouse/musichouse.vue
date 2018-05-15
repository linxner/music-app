<template>
  <div class="musichouse">
    <carousel></carousel>
    <Tabs></Tabs>
  </div>
</template>
<script>
import Carousel from "../carousel/carousel.vue";
import Tabs from "../tab/tab.vue";

export default {
  components: {
    Carousel,
    Tabs
  }
};
</script>

