<template>
  <div class="header">

    <ul class="tab">
      <li>
        <i class="icon"></i>
      </li>
      <router-link tag="li" to="/mine">我的</router-link>
      <router-link tag="li" to="musichouse">音乐馆</router-link>
      <router-link tag="li" to="found">发现</router-link>
      <li>
        <i class="el-icon-plus"></i>
      </li>
    </ul>
    <el-input placeholder="搜索" prefix-icon="el-icon-search"></el-input>
  </div>
</template>
<style lang="less" scoped>
@import "~less/index.less";
.header {
    background-color: @background-color;
    width: 100%;
    font-size: 16px;
    text-align: center;
    padding-bottom: 10px;
    .tab {
        width: 100%;
        list-style: none;
        line-height: 50px;
        letter-spacing: -0.5em;
        li {
            display: inline-block;
            letter-spacing: normal;
            width: 20%;
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
