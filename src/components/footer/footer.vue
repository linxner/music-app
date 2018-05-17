<template>
  <div class="footer">
    <ul class="player-min">
      <li class="singer-img"></li>
      <li class="song-and-singer">
        <span class="song-name">刚刚好</span>
        <br>
        <span class="singer-name">薛之谦</span>
      </li>
      <li class="placehold"></li>
      <li class="pause-btn">
        <i class="el-icon-caret-right"></i>
      </li>
      <li class="song-menu">
        <i class="iconfont icon-yinle"></i>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getAjax} from "../../assets/js/ajax";
  import {url} from "../../assets/js/url";

  export default {
 created(){
  this.$axios({
    method:'post',
    url:url.url,
  }).then(res=>{
    console.log('ok')
  })
 }

  }
</script>

<style scoped lang="less">
  @import "~less/index.less";

  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    .player-min {
      list-style: none;
      height: 70px;
      width: 100%;
      letter-spacing: -0.5em;
      li {
        vertical-align: top;
        width: 5%;
        height: 50px;
        display: inline-block;
        letter-spacing: normal;
        margin: 5px;
        color: #000;
      }
      .singer-img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #ccc;
        margin-left: 10px;
      }
      .song-and-singer {
        width: 30%;
        height: 50px;
        margin: 20px 10px;
        .song-name {
          font-size: 16px;
        }
        .singer-name {
          display: block;
          margin-top: 5px;
        }
      }

      .pause-btn {
        box-sizing: border-box;
        width: 50px;
        border: 3px solid @background-color;
        border-radius: 50%;
        font-size: 40px;
        text-align: center;
        line-height: 50px;
        color: @background-color;
        margin: 10px 20px 0;
      }
      .song-menu {
        margin: 18px 0;
        i {
          color: @background-color;
          font-size: 38px;
        }
      }
    }
  }
</style>
