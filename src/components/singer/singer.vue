<template>
    <transition name="slide">
        <div class="singer">
            <div class="singer-t">
                <div class="s-title">
                    <i class="el-icon-arrow-left" @click="back"></i>
                    <div class="my-singer">
                        <span @click="onact">歌手</span>
                        <span @click="onact">我的</span>
                    </div>
                    <i class="el-icon-search"></i>
                </div>
            </div>
            <scroll :data="data" class="slide-wrapper">
                <div>
                    <div class="s-key">
                        <scroll class="key-menu">
                            <ul class="key-list" :scrollX="true">
                                <li v-for="item in area" :key="item.id" @click="active">{{item.name}}</li>
                            </ul>
                        </scroll>
                        <scroll class="key-menu" :scrollX="true">
                            <ul class="key-list">
                                <li v-for="item in sex" :key="item.id" @click="active">{{item.name}}</li>
                            </ul>
                        </scroll>
                        <scroll class="key-menu" :scrollX="true">
                            <ul class="key-list">
                                <li v-for="item in genre" :key="item.id" @click="active">{{item.name}}</li>
                            </ul>
                        </scroll>
                    </div>
                    <div class="search-nav">
                        <span></span>
                    </div>
                    <div>
                        <div class="singer-menu">
                            <ul class="singer-list">
                                <li v-for="item in singerList" :key="item.id" @click="selectSinger(item)">
                                    <img v-lazy="item.singer_pic" alt="">
                                    <div class="singer-name">
                                        <span>{{item.singer_name}}</span>
                                        <i class="el-icon-arrow-right"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="loading-wrapper" v-show="!singerList.length">
                            <loading :ifnull="singerList"></loading>
                        </div>
                    </div>
                </div>
            </scroll>
            <list-view>
                <ul class="list-view">
                    <li v-for="item in index" :key="item.id">{{item.name.slice(0,1)}}</li>
                </ul>
            </list-view>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </transition>
</template>
<script>
import Scroll from 'common/scroll/bscroll'
import { url } from "assets/js/url"
import { getData } from "assets/js/ajax"
import Loading from 'common/loading/loading'
import listView from 'components/listview/listview'
import Singer from 'assets/js/singer'
import { getSingerListUrl } from "assets/js/url"
import { mapMutations } from 'vuex'



export default {
    data() {
        return {
            data: [],
            singerList: [],
            area: [],
            genre: [],
            sex: [],
            index: [],
            beforeSelect: []
        }
    },
    created() {
        setTimeout(() => {
            this._getData(getSingerListUrl(-100))
        }, 20)
    },
    methods: {
        _getData(url) {
            getData(url).then((res) => {
                this.singerList = res.singerList.data.singerlist
                this.area = res.singerList.data.tags.area
                this.genre = res.singerList.data.tags.genre
                this.sex = res.singerList.data.tags.sex
                this.index = res.singerList.data.tags.index
                this.data = this.singerList.concat(this.area, this.sex, this.genre)
                this.beforeSelect = this.singerList
            })
        },
        active(e) {
            e.target.style.color = '#409EFF'
            $(e.target).siblings().css('color', 'black')
            let a = []
            for (let key in this.beforeSelect) {
                if ($(e.target).text() === this.beforeSelect[key].country) {
                    a.push(this.beforeSelect[key])
                }
                if ($(e.target).text() === '全部') {
                    a = this.beforeSelect
                }
            }
            this.singerList = a
        },
        onact(e) {
            e.target.style.color = '#fff'
            e.target.style.backgroundColor = '#171717'
            $(e.target).siblings().css('color', 'black')
            $(e.target).siblings().css('background-color', '#fff')
        },
        back() {
            window.history.back()
        },
        selectSinger(item) {
            this.$router.push({
                path: `singer/${item.singer_id}`
            })
            this.setSinger(item)
        },
        ...mapMutations({
            setSinger: 'SET_SINGER'
        })

        // selected(item) {
        //     let a=[]
        //     for (let key in this.singerList) {
        //         if (item.name === this.singerList[key].country) {
        //             a.push(this.singerList[key])
        //         }
        //     }
        //     console.log(a)
        // }
    },
    // normalizeSinger(list) {
    //     let map = {
    //         hot: {
    //             title: HOT_NAME,
    //             items: []
    //         }
    //     }
    //     list.forEach((item, index) => {
    //         if (index < HOT_SINGER_LEN) {
    //             map.hot.items.push(new Singer({
    //                 name: item.singer_name,
    //                 id: item.singer_mid
    //             }))
    //         }
    //         const key = this.index
    //         if (!map[key]) {
    //             map[key] = {
    //                 title: key,
    //                 items: []
    //             }
    //         }
    //         map[key].items.push(new Singer({
    //             name: item.singer_name,
    //             id: item.singer_mid
    //         }))
    //     })
    //     let ret = []
    //     let hot = []
    //     for (let key in map) {
    //         let val = map[key]
    //         if (val.title.match(/[a-zA-Z]/)) {
    //             ret.push(val)
    //         } else if (val.title === HOT_NAME) {
    //             hot.push(val)
    //         }
    //     }
    //     ret.sort((a, b) => {
    //         return a.title.charCodeAt(0) - b.title.charCodeAt(0)
    //     })
    //     return hot.concat(ret)
    //     console.log(ret)
    // }

    components: {
        Scroll,
        Loading,
        listView
    }
}
</script>
<style lang="less" scoped>
@import "~less/variable.less";

.singer {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: #fff;
  color: #000;
  font-size: 1.6rem;
  overflow: hidden;
  .singer-t {
    width: 100%;
    position: absolute;
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
            background-color: #171717;
            color: #fff;
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
  .slide-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
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
          &:first-child {
            color: #409eff;
          }
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
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
