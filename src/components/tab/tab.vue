<template>
  <div class="tabs">
    <ul class="tablist">
      <li>
        <div><i class="iconfont icon-rentou"></i></div>
        <div>歌手</div>
      </li>
      <li>
        <div><i class="iconfont icon-paihang"></i></div>
        <div>排行</div>
      </li>
      <li>
        <div><i class="iconfont icon-lanmu1"></i></div>
        <div>分类歌单</div>
      </li>
      <li>
        <div><i class="iconfont icon-diantai"></i></div>
        <div>电台</div>
      </li>
      <li>
        <div><i class="iconfont icon-shipin"></i></div>
        <div>视频</div>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
  @import "~less/index";

  .tabs {
    position: relative;
    width: 93%;
    margin: 0 auto;
    background-color: #fff;
    .tablist {
      width: 100%;
      height: 70px;
      position: absolute;
      top: -5px;
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
        font-size: 16px;
        line-height: 1.8;
        cursor: pointer;
        .iconfont {
          color: @background-color;
          font-size: 25px;
        }
      }
    }
  }
</style>

