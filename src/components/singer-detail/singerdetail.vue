<template>
    <transition name="slide">
        <div class="singer-detail">
            <div class="detail-top-wrapper">
                <div class="detail-top">
                    <i class="el-icon-arrow-left" @click="back"></i>
                    <transition name="singername">
                        <span ref="singername" v-show="singername">{{singerName}}</span>
                    </transition>
                    <i class="el-icon-more"></i>
                </div>
            </div>
            <div class="detail-bgimg-wrapper" ref="imgHeight">
                <div class="detail-bgimg" :style="bgimg" ref="bgimg"></div>
                <div class="detail-bgimg-cover" ref="cover"></div>
                <div class="detail-singer-desc-wrapper" ref="desc">
                    <div class="detail-singer-desc">
                        <span class="name">{{singerName}}</span>
                        <div class="detail-singer-desc-fans">
                            <span class="line"></span>
                            <span>粉丝：</span>
                            <i class="iconfont icon-i"></i>
                            <span class="line"></span>
                        </div>
                        <div class="detail-singer-desc-foot">
                            <div class="care-prize">
                                <span>关注</span>
                                <span>勋章</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-layer" ref="layer"></div>
            <scroll class="detail-content-wrapper" ref="detailContent" @scroll="scroll" :listen-scroll="listenScroll" :probe-type="probeType">
                <singer-content :singerMid="singerMid" ref="content" :scrollY="scrollY" :imgHeight="imgHeight"></singer-content>
            </scroll>

        </div>
    </transition>
</template>
<script>
import { getFans } from 'assets/js/url'
import { getData } from 'assets/js/ajax'
import singerContent from 'components/singer-content/singercontent'
import Scroll from 'common/scroll/bscroll'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import { getSinerImgUrl } from 'assets/js/singer'
import { getSingerDetail } from 'assets/js/url'



export default {
    data() {
        return {
            imgHeight: 0,
            scrollY: 0,
            content: '',
            singername: false
        }
    },
    components: {
        singerContent,
        Scroll
    },
    created() {
        this.probeType = 3
        this.listenScroll = true
    },
    computed: {
        ...mapGetters([
            'singer'
        ]),
        bgimg() {
            return `background-image:url(${getSinerImgUrl(this.singer.singer_mid, 300)})`
        },
        singerName() {
            return this.singer.singer_name
        },
        singerMid() {
            return this.singer.singer_mid
        }
    },
    mounted() {
        this.imgHeight = this.$refs.imgHeight.clientHeight
        this.$refs.detailContent.$el.style.top = this.imgHeight + 'px'
        this.$refs.layer.style.top = this.imgHeight + 'px'
    },
    methods: {
        scroll(pos) {
            this.scrollY = pos.y
        },
        back() {
            this.$router.back()
        }
    },
    watch: {
        scrollY(t) {
            let topHeight = -this.imgHeight + 50
            let maxtranslateY = Math.max(topHeight, t)
            this.$refs.layer.style['transform'] = `translate3d(0,${maxtranslateY}px,0)`
            this.$refs.layer.style['webkitTransform'] = `translate3d(0,${maxtranslateY}px,0)`
            if (t < 0) {
                this.$refs.cover.style.paddingTop = (this.imgHeight + t) + 'px'
                this.$refs.cover.style.opacity = 0.2 + Math.min(Math.abs(t / (topHeight)), 0.3)
            }
            if (t < topHeight) {
                this.$refs.bgimg.style.paddingTop = 0
                this.$refs.bgimg.style.zIndex = 1
                this.$refs.bgimg.style.height = 50 + 'px'
                this.$refs.cover.style.paddingTop = 50 + 'px'
                this.$refs.desc.style.display = 'none'
                this.singername = true
            } else {
                this.$refs.bgimg.style.paddingTop = '75%'
                this.$refs.bgimg.style.zIndex = -1
                this.$refs.bgimg.style.height = 0
                this.$refs.desc.style.display = 'block'
                this.singername = false
            }
        }
    }
}
</script>
<style lang="less" scoped>
.singer-detail {
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999999;
  background-color: #fff;
  .detail-top-wrapper {
    width: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0);
    font-size: 2.4rem;
    z-index: 99;
    color: #fff;
    .detail-top {
      width: 100%;
      height: 50px;
      box-sizing: border-box;
      padding: 0 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 1.8rem;
      }
    }
  }
  .detail-bgimg-wrapper {
    width: 100%;
    position: absolute;
    top: 0;
    .detail-bgimg-cover {
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
      padding-top: 75%;
      background-color: #000;
      opacity: 0.2;
    }
    .detail-bgimg {
      position: relative;
      width: 100%;
      padding-top: 75%;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .detail-singer-desc-wrapper {
      width: 100%;
      position: absolute;
      bottom: 0;
      color: #fff;
      text-align: center;
      margin-bottom: 8px;
      font-weight: 300;
      z-index: 2;
      .detail-singer-desc {
        width: 70%;
        display: inline-flex;
        align-items: center;
        flex-direction: column;
        .name {
          display: block;
          box-sizing: border-box;
          padding-bottom: 8px;
          font-size: 2.8rem;
        }
        .detail-singer-desc-fans {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding-bottom: 8px;
          font-weight: 300;
          .line {
            width: 30%;
            padding-top: 1px;
            background-color: rgba(255, 255, 255, 0.3);
          }
        }
        .detail-singer-desc-foot {
          width: 100%;
          text-align: center;
          span {
            display: inline-block;
            font-size: 1.6rem;
            line-height: 1.8;
            box-sizing: border-box;
            padding: 0 20px;
            border: 1px solid #fff;
            border-radius: 15px;
          }
        }
      }
    }
  }
  .content-layer {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .detail-content-wrapper {
    width: 100%;
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
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
.singername-enter-active,
.singername-leave-active {
  transition: all 0.3s;
}
.singername-enter,
.singername-leave-to {
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}
</style>
