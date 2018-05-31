<template>
    <div class="song-list-wrapper">
        <div class="song-list">
            <div class="song-search">
                <el-input v-model="input" placeholder="搜索此歌手的歌曲" prefix-icon="el-icon-search"></el-input>
            </div>
            <div class="playall">
                <div class="left">
                    <i class="iconfont icon-bofang"></i>
                    <span>全部播放</span>
                </div>
                <div class="right">
                    <i class="iconfont icon-paixu1"></i>
                    <i class="iconfont icon-quanxuan"></i>
                </div>
            </div>
            <div class="song-lists">
                <ul>
                    <li v-for="item in songs" :key="item.id">
                        <div class="songs">
                            <div>{{item.musicData.songname}}</div>
                            <span>{{item.musicData.singer[0].name}}·{{item.musicData.albumname}}</span>
                        </div>
                        <div class="icons">
                            <span>MV</span>
                            <i class="el-icon-more"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'


export default {
    props: {
        songs: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            input: '',
        }
    },
    created() {

    },
    computed: {
      
    },
    mounted() {
        // console.log(this.songs)
    },
    watch: {

    }
}
</script>
<style lang="less" scoped>
.song-search {
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
}
.playall {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 3;
  padding: 0 15px;
  border-bottom: 1px solid #eee;
  .left {
    display: flex;
    align-items: center;
    i {
      margin-right: 10px;
      &:first-child {
        font-size: 2rem;
        font-weight: 600;
        color: #409eff;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    i {
      margin-left: 10px;
      font-weight: 600;
      &:first-child {
        font-size: 2rem;
        font-weight: normal;
      }
    }
  }
}
.song-lists {
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
  ul {
    width: 100%;
    list-style: none;
    li {
      width: 100%;
      height: 55px;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      .songs {
        div {
          margin-top: 5px;
          white-space: normal;
        }
        span {
          display: block;
          margin-top: 5px;
          color: #7e7e7e;
          font-size: 1.2rem;
        }
      }
      .icons {
        span {
          font-size: 1.2rem;
          margin-right: 10px;
          padding: 3px;
          background-color: #ccc;
          border-radius: 5px;
          color: #fff;
        }
        i {
          color: #7e7e7e;
        }
      }
    }
  }
}
</style>


