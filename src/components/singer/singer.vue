<template>
    <div class="singer">
        <div class="singer-t">
            <div class="s-title">
                <i class="el-icon-arrow-left"></i>
                <div class="my-singer">
                    <span>歌手</span>
                    <span>我的</span>
                </div>
                <i class="el-icon-search"></i>
            </div>
        </div>
        <div class="s-key">
            <scroll class="key-menu">
                <ul class="key-list" :scrollX="true">
                    <li v-for="item in area" :key="item.id">{{item.name}}</li>
                </ul>
            </scroll>
            <scroll class="key-menu" :scrollX="true">
                <ul class="key-list">
                    <li v-for="item in sex" :key="item.id">{{item.name}}</li>
                </ul>
            </scroll>
            <scroll class="key-menu" :scrollX="true">
                <ul class="key-list">
                    <li v-for="item in genre" :key="item.id">{{item.name}}</li>
                </ul>
            </scroll>
        </div>
        <div class="search-nav">
            <span>热</span>
        </div>
        <div>
            <div class="singer-menu">
                <ul class="singer-list">
                    <li v-for="item in singerList" :key="item.id">
                        <img v-lazy="item.singer_pic" alt="">
                        <div class="singer-name">
                            <span>{{item.singer_name}}</span>
                            <i class="el-icon-arrow-right"></i>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="loading-wrapper" v-show="!singerList.length">
                <loading></loading>
            </div>
        </div>
    </div>
</template>
<script>
import Scroll from 'common/scroll/bscroll'
import { url } from "assets/js/url"
import { getData } from "assets/js/ajax"
import Loading from 'common/loading/loading'

export default {
    data() {
        return {
            data: [],
            singerList: [],
            area: [],
            genre: [],
            sex: []
        }
    },
    created() {
        setTimeout(() => {
            this._getData()
        }, 20);

    },
    mounted() {

    },
    methods: {
        _getData() {
            getData(url.singer.url).then((res) => {
                this.data = res.singerList.data.singerlist
                this.singerList = res.singerList.data.singerlist
                this.area = res.singerList.data.tags.area
                this.genre = res.singerList.data.tags.genre
                this.sex = res.singerList.data.tags.sex
            })

        }
    },
    components: {
        Scroll,
        Loading
    }
}
</script>
<style lang="less" scoped>
@import "~less/variable.less";

.singer {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;
  background-color: #fff;
  color: #000;
  font-size: 1.6rem;
  overflow: hidden;
  .singer-t {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999999;
    background-color: #fff;
    padding: 0 10px;
    box-sizing: border-box;
    .s-title {
      height: 70px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .my-singer {
        width: 50%;
        height: 32px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        justify-content: space-around;
        border: 1px solid #171717;
        span {
          width: 50%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          &:first-child {
            border-right: 1px solid #171717;
          }
          &:hover {
            background-color: #171717;
            color: #fff;
          }
        }
      }
      i {
        font-size: 2.4rem;
        font-weight: bold;
      }
    }
  }
  .s-key {
    width: 100%;
    margin-top: 70px;
    position: relative;
    box-sizing: border-box;
    padding: 0 10px;
    background-color: #f4f4f4;
    font-size: 1.3rem;
    .key-menu {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      white-space: nowrap;
      li {
        display: inline-block;
        padding: 10px 10px;
        line-height: 2;
      }
      .active {
        color: @background-color;
      }
    }
  }
  .search-nav {
    width: 100%;
    background-color: #eaeaea;
    line-height: 2;
    box-sizing: border-box;
    padding: 0 20px;
    font-size: 1rem;
  }
  .singer-menu {
    width: 100%;
    font-size: 1.2rem;
    box-sizing: border-box;
    .singer-list {
      width: 100%;
      padding: 0 5px 0 20px;
      box-sizing: border-box;
      list-style: none;
      li {
        width: 100%;
        line-height: 5;
        display: flex;
        align-items: center;
        img {
          display: block;
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
          background-color: #ccc;
          margin-right: 20px;
        }
        .singer-name {
          width: 85%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          border-bottom: 1px solid #eaeaea;
          font-size: 1.3rem;
        }
      }
    }
  }
}
</style>
