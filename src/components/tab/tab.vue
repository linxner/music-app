<template>
  <div class="tabs" ref="tabs">
    <ul :class="{tablist:add,abs:!add}">
      <router-link tag="li" to="singer">
        <div>
          <i class="iconfont icon-rentou"></i>
        </div>
        <div>歌手</div>
      </router-link>
      <router-link tag="li" to="rank">
        <div>
          <i class="iconfont icon-paihang"></i>
        </div>
        <div>排行</div>
      </router-link>
      <router-link tag="li" to="ablum">
        <div>
          <i class="iconfont icon-lanmu1"></i>
        </div>
        <div>分类歌单</div>
      </router-link>
      <router-link tag="li" to="radio">
        <div>
          <i class="iconfont icon-diantai"></i>
        </div>
        <div>电台</div>
      </router-link>
      <router-link tag="li" to="video">
        <div>
          <i class="iconfont icon-shipin"></i>
        </div>
        <div>视频</div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      thisTop: 0,
      add: true
    }
  },
  mounted() {
    $(window).scroll(function () {
      this.thisTop = $(window).scrollTop()
      this.add = this.thisTop > 3 ? false : true
    }.bind(this))
  },
  methods: {
  
  }
}
</script>
<style lang="less" scoped>
@import "~less/index";

.tabs {
  position: relative;
  width: 93%;
  margin: 0 auto;
  background-color: #fff;
  z-index: 99;
  .tablist {
    width: 93%;
    height: 70px;
    position: fixed;
    top: 227px;
    margin: 0 auto;
    list-style: none;
    letter-spacing: -0.5em;
    background-color: #fff;
    text-align: center;
    box-shadow: 3px 3px #eee;
    padding: 10px 0;
    li {
      width: 20%;
      display: inline-block;
      letter-spacing: normal;
      color: #000;
      font-size: 1.4rem;
      line-height: 1.8;
      cursor: pointer;
      .iconfont {
        color: @background-color;
        font-size: 2.5rem;
      }
    }
  }
  .abs {
    width: 100%;
    height: 70px;
    position: absolute;
    top: 0;
    right: 0;
    list-style: none;
    letter-spacing: -0.5em;
    background-color: #fff;
    text-align: center;
    box-shadow: 3px 3px #eee;
    padding: 10px 0;
    li {
      width: 20%;
      display: inline-block;
      letter-spacing: normal;
      color: #000;
      font-size: 1.4rem;
      line-height: 1.8;
      cursor: pointer;
      .iconfont {
        color: @background-color;
        font-size: 2.5rem;
      }
    }
  }
}
</style>

