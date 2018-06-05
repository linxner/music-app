<template>
  <div class="player" v-show="playList.length>0">
    <transition name="full" @enter="enter" @leave="leave">
      <div class="full-player" v-show="fullScreen">
        <div class="background">
          <img width="100%" height="100%" :src="imgUrl">
        </div>
        <div class="f-header">
          <div class="f-title">
            <i class="el-icon-arrow-down" @click="back"></i>
            <span v-html="currentSong.musicData.songname"></span>
            <i class="el-icon-more"></i>
          </div>
          <div class="f-singer">
            <span class="line"></span>
            <span v-html="currentSong.musicData.singer[0].name"></span>
            <span class="line"></span>
          </div>
        </div>
        <div class="f-img">
          <img :src="imgUrl" alt="" ref="fullImg">
        </div>
        <div class="f-lyric">
          <span></span>
        </div>
        <div class="f-dot">
          <span></span>
        </div>
        <div class="f-footer">
          <my-progress></my-progress>
          <div class="f-function">
            <div class="select-playmode">
              <i class="fa fa-random" aria-hidden="true"></i>
            </div>
            <div class="go-back">
              <i class="fa fa-step-backward" aria-hidden="true"></i>
            </div>
            <div class="pause-play">
              <i class="fa fa-pause fa-2x" aria-hidden="true"></i>
              <i class="fa fa-play fa-2x" aria-hidden="true" style="display:none;"></i>
            </div>
            <div class="go-back">
              <i class="fa fa-step-forward" aria-hidden="true"></i>
            </div>
            <div class="play-list">
              <i class="fa fa-list-ul" aria-hidden="true"></i>
            </div>
          </div>
          <div class="f-feel-share">
            <i class="fa fa-heart fa-2x" aria-hidden="true"></i>
            <i class="fa fa-download fa-2x" aria-hidden="true"></i>
            <i class="fa fa-share-square-o fa-2x" aria-hidden="true"></i>
            <i class="fa fa-commenting-o fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </transition>
    <transition name="mini">
      <div class="mini-player" v-show="!fullScreen" @click="open">
        <div class="img-min" ref="miniImg">
          <img :src="imgUrl" alt="">
        </div>
        <div class="another">
          <div class="song-singer">
            <span v-html="currentSong.musicData.songname"></span>
            <span v-html="currentSong.musicData.singer[0].name"></span>
          </div>
          <div class="pause-list">
            <span class="pause">
              <i class="el-icon-caret-right"></i>
            </span>
            <i class="icon iconfont icon-yinle"></i>
          </div>
        </div>
      </div>
    </transition>
    <audio :src="musicUrl" ref="audio"></audio>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Velocity from 'velocity-animate'
import myProgress from 'components/progress/progress'
import { getMusic } from 'assets/js/url'
import { getData } from 'assets/js/ajax'
import { createSong } from 'assets/js/singer'

export default {
  data() {
    return {
      filename: '',
      vkey: ''
    }
  },
  created() {
    this._getMusic()
  },
  methods: {
    back() {
      this.setFullScreen(false)
    },
    open() {
      this.setFullScreen(true)
    },
    enter(el, done) {
      const { x, y, scale } = this._getPosAndScale()
      // console.log(scale)
      Velocity(this.$refs.miniImg, {
        translateX: -x,
        translateY: -y,
        scale: scale + .1
      }, {
          duration: 400,
          easing: 'linear',
        })
      Velocity(this.$refs.fullImg, {
        scale: 1.2
      }, {
          duration: 50,
        })
      Velocity(this.$refs.fullImg, {
        scale: 1,
      }, {
          duration: 50,
        })
      Velocity(this.$refs.fullImg, {
        rotateZ: 360
      }, {
          loop: true,
          duration: 30000,
          easing: 'linear',
          complete: done
        })
    },
    leave(el, done) {
      const { x, y, scale } = this._getPosAndScale()
      Velocity(this.$refs.miniImg, {
        translateX: 0,
        translateY: 0,
        scale: 1
      }, {
          duration: 400,
          easing: 'linear',
          complete: done
        })
    },
    _getMusic() {
      if (!this.currentSong.musicData.songmid) {
        return
      }
      getData(getMusic(this.currentSong.musicData.songmid)).then((res) => {
        this.filename = res.data.items[0].filename
        this.vkey = res.data.items[0].vkey
      })
    },
    _getPosAndScale() {
      const targetWidth = 50
      const paddingLeft = 35
      const paddingBttom = 30
      const paddingTop = 94
      const width = window.innerWidth * .8
      const scale = width / targetWidth
      const x = -(window.innerWidth / 2 - paddingLeft)
      const y = window.innerHeight - paddingTop - width / 2 - paddingTop
      return { x, y, scale }
    },
    ...mapMutations({
      setFullScreen: 'SET_FULL_SCREEN'
    })
  },
  computed: {
    imgUrl() {
      return `http://y.gtimg.cn/music/photo_new/T002R300x300M000${this.currentSong.musicData.albummid}.webp`
    },
    musicUrl() {
      return `http://dl.stream.qqmusic.qq.com/${this.filename}?vkey=${this.vkey}&guid=2693623942&uin=0&fromtag=66`
    },
    ...mapGetters([
      'fullScreen',
      'playList',
      'currentSong'
    ]),
  },
  watch: {
    currentSong() {
      this._getMusic()
    },
    musicUrl() {
      this.$nextTick(() => {
        this.$refs.audio.play()
      })
    }
  },
  components: {
    myProgress
  }
}
</script>

<style scoped lang="less">
@import "~less/index.less";

.player {
  width: 100%;
  .full-player {
    width: 100%;
    color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    top: 0;
    z-index: 99999999;
    background-color: #666;
    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.6;
      z-index: -1;
      filter: blur(20px);
    }
    .f-header {
      width: 100%;
      .f-title {
        width: 100%;
        height: 50px;
        font-size: 2rem;
        box-sizing: border-box;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .f-singer {
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        justify-content: center;
        .line {
          width: 20px;
          display: block;
          margin: 0 10px;
          border-bottom: 1px solid #fff;
        }
      }
    }
    .f-img {
      width: 100%;
      margin-top: 30px;
      text-align: center;
      img {
        display: inline-block;
        width: 80%;
        height: 80%;
        border-radius: 50%;
        background-color: #fff;
        border: 10px solid #666;
      }
    }
    .f-footer {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      .f-function {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 15px;
        .pause-play {
          // font-size: 2em;
          width: 60px;
          height: 60px;
          box-sizing: border-box;
          border: 2px solid #fff;
          border-radius: 50%;
          text-align: center;
          line-height: 60px;
        }
        .go-back {
          font-size: 1.8em;
          width: 40px;
          height: 40px;
          border: 2px solid #fff;
          border-radius: 50%;
          text-align: center;
          line-height: 40px;
        }
        .select-playmode,
        .play-list {
          font-size: 2em;
        }
      }
      .f-feel-share {
        width: 100%;
        box-sizing: border-box;
        padding: 10px 10% 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .mini-player {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    z-index: 9999999;
    background-color: #fff;
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
        flex-direction: column;
        line-height: 1.5;
        span {
          color: #999;
          &:first-child {
            font-size: 1.4rem;
            color: #000;
          }
        }
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
        i {
          font-size: 25px;
          color: #409eff;
        }
      }
    }
  }
}
.full-enter-active,
.full-leave-active {
  transition: all 0.4s;
  .f-header,
  .f-footer {
    transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
  }
}
.full-enter,
.full-leave-to {
  opacity: 0;
  .f-header {
    transform: translate3d(0, -80px, 0);
  }
  .f-footer {
    transform: translate3d(0, 100px, 0);
  }
}
.mini-enter-active,
.mini-leave-active {
  transition: all, 0.4s;
}
.mini-enter,
.mini-leave-to {
  opacity: 0;
}
</style>
