<template>
  <div class="hot-recommend">
    <div class="rec-title">
      <span class="hot-rec-list">热门推荐歌单</span>
      <span class="rec-more">
        <a href="">
          <i class="el-icon-arrow-right"></i>
        </a>
      </span>
    </div>
    <slot></slot>
  </div>
</template>
<style lang="less" scoped>
.hot-recommend {
  margin-top: 10rem;
  width: 100%;
  color: #000;
  .rec-title {
    width: 100%;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 1.4rem;
    text-align: center;
    .rec-more {
      position: absolute;
      right: 0.8rem;
      height: 1.8rem;
      width: 1.8rem;
      box-sizing: border-box;
      border: 1px solid #666;
      border-radius: 50%;
      line-height: 1.8rem;
      a {
        display: block;
        width: 100%;
        text-align: center;
        i {
          display: inline-block;
        }
      }
    }
  }
  .rec-content {
    width: 100%;
    display: flex;
    margin-top: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    .rec-list {
      width: 33%;
      a {
        display: block;
        text-decoration: none;
        img {
          width: 100%;
          display: inline-block;
          height: auto;
        }
      }
      .rec-discripe {
        font-size: 1rem;
        line-height: 1.5;
        padding: 0.5rem 0 1rem 0.5rem;
      }
    }
  }
}
</style>
