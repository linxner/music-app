<template>
  <div class="footer">
    <div class="footer-wrape">
      <div class="img-min">
        <img src="" alt="">
      </div>
      <div class="another">
        <div class="song-singer">
          <span>刚刚好</span>
          <span>薛之谦</span>
        </div>
        <div class="pause-list">
          <span class="pause">
            <i class="el-icon-caret-right"></i>
          </span>
          <i class="icon iconfont icon-yinle"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from "../../assets/js/ajax";

export default {

}
</script>

<style scoped lang="less">
@import "~less/index.less";

.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99999999;
  background: #fff;
  .footer-wrape {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    .img-min {
      float: left;
      img {
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #333;
        margin-right: 20px;
      }
    }
    .another {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .song-singer {
        display: flex;
        align-items: center;
        flex-direction: column;
        line-height: 1.5;
      }
      .pause-list {
        display: flex;
        align-items: center;
        .pause {
          height: 35px;
          width: 35px;
          border-radius: 50%;
          border: 1px solid #409eff;
          text-align: center;
          margin-right: 15px;
          i {
            font-size: 25px;
            color: #409eff;
            line-height: 35px;
          }
        }
        i{
          font-size: 25px;
          color: #409eff;
        }
      }
    }
  }
}
</style>
