<template>
  <div class="header">
    <ul class="tab">
      <li>
        <i class="iconfont icon-lanmu"></i>
      </li>
      <router-link tag="li" to="/mine">我的</router-link>
      <router-link tag="li" to="/musichouse">音乐馆</router-link>
      <router-link tag="li" to="/found">发现</router-link>
      <li>
        <i class="el-icon-plus"></i>
      </li>
    </ul>
    <el-input placeholder="搜索" prefix-icon="el-icon-search"></el-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHas: true
    }
  },
}
</script>
<style lang="less" scoped>
@import "~less/index.less";

.header {
  position: fixed;
  top: 0;
  background-color: @background-color;
  width: 100%;
  color: #fff;
  font-size: 1.6rem;
  text-align: center;
  padding-bottom: 10px;
  z-index: 9999;
  .tab {
    width: 100%;
    list-style: none;
    line-height: 50px;
    letter-spacing: -0.5em;
    li {
      display: inline-block;
      letter-spacing: normal;
      width: 20%;
      &:nth-of-type(1) {
        box-sizing: border-box;
        text-align: left;
        padding-left: 15px;
      }
      &:nth-of-type(5) {
        box-sizing: border-box;
        text-align: right;
        padding-right: 15px;
      }
    }
  }
  .el-input {
    width: 90%;
  }
}
</style>
