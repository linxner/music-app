<template>
    <transition name="slide">
        <div class="singer-detail">
            <div class="detail-top-wrapper">
                <div class="detail-top">
                    <i class="el-icon-arrow-left" @click="back"></i>
                    <span></span>
                    <i class="el-icon-more"></i>
                </div>
            </div>
            <div class="detail-bgimg-wrapper" ref="imgHeight">
                <div class="detail-bgimg" :style="bgimg" ref="imgHeight">
                    <div class="detail-bgimg-cover"></div>
                </div>
                <div class="detail-singer-desc-wrapper">
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
            <scroll class="detail-content-wrapper" ref="detailContent">
                <singer-content></singer-content>
            </scroll>
        </div>
    </transition>
</template>
<script>
import { getSingerDetail } from 'assets/js/url'
import { getFans } from 'assets/js/url'
import { getData } from 'assets/js/ajax'
import { mapGetters } from 'vuex'
import { getSinerImgUrl } from 'assets/js/singer'
import singerContent from 'components/singer-content/singercontent'
import Scroll from 'common/scroll/bscroll'
import { mapMutations } from 'vuex'



export default {
    data() {
        return {
            imgHeight: '',
            songs: []
        }
    },
    created() {
        this._getSingerDetail()
    },
    components: {
        singerContent,
        Scroll
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
    },
    mounted() {
        console.log(this.singer)
        this.imgHeight = this.$refs.imgHeight.clientHeight
        this.$refs.detailContent.$el.style.top = this.imgHeight + 'px'
    },
    methods: {
        _getSingerDetail() {
            if (!this.singer.singer_mid) {
                this.$router.push('/musichouse/singer')
                return
            }
            let url = getSingerDetail(this.singer.singer_mid, 200)
            getData(url, 'MusicJsonCallbacksinger_track').then((res) => {
                this.songs = res.data.list
                this.getSong(this.songs)
            })
        },
        _getFans() {
            let url = getFans(this.singer.singer_mid)
            getData(url).then((res) => {
                console.log(res)
            })

        },
        back() {
            window.history.back()
        },
        ...mapMutations({
            getSong: 'GET_SONG'
        })
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
    }
  }
  .detail-bgimg-wrapper {
    width: 100%;
    position: absolute;
    top: 0;
    .detail-bgimg {
      width: 100%;
      padding-top: 75%;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .detail-bgimg-cover {
      position: absolute;
      top: 0;
      width: 100%;
      padding-top: 75%;
      background-color: rgba(0, 0, 0, 0.2);
    }
    .detail-singer-desc-wrapper {
      width: 100%;
      position: absolute;
      bottom: 0;
      color: #fff;
      text-align: center;
      margin-bottom: 8px;
      font-weight: 300;
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
  .detail-content-wrapper {
    width: 100%;
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: -99;
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
