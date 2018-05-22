<template>
  <div class="musichouse">
    <div class="slider-wraper" v-if="slider.length">
      <carousel>
        <div v-for="item in slider" :key="item.id" class="sliderlist">
          <a href="#">
            <img :src="item.pic_info.url" alt="">
          </a>
        </div>
      </carousel>
    </div>
    <div class="tab">
      <tabs></tabs>    
    </div>
    <recommend>
      <div class="rec-content">
        <div class="rec-list" v-for="item in hots">
          <a href=""><img :src="item.cover" alt=""></a>
          <div class="rec-discripe">
            <span>{{item.title}}</span>
          </div>
        </div>
      </div>
    </recommend>
  </div>
</template>
<script>
import Carousel from "../carousel/carousel.vue";
import Tabs from "../tab/tab.vue";
import { getData } from "assets/js/ajax";
import { url } from "assets/js/url";
import Recommend from 'components/recommend/recommend'

export default {
  data() {
    return {
      slider: [],
      hots: []
    }
  },
   components: {
    Carousel,
    Tabs,
    Recommend
  },
  created() {
    this._getData();
  },
  methods: {
    _getData() {
      getData(url).then((res) => {
        this.slider = res.focus.data.content
        this.hots = res.recomPlaylist.data.v_hot.splice(0,6)
      })
    }
  }
};
</script>
  
<style lang="less" scoped>
.musichouse {
  width: 100%;
  .slider-wraper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
}
</style>
