<template>
    <div class="detail-content" ref="content">
        <div class="detail-content-tab" ref="tab">
            <ul class="tab-list">
                <li>单曲</li>
                <li>专辑</li>
                <li>MV</li>
                <li>详情</li>
            </ul>
        </div>
        <song-list :songs="songs" @select="selectItem"></song-list>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import { getData } from 'assets/js/ajax'
import { getSingerDetail } from 'assets/js/url'
import songList from 'components/song-list/songlist'


export default {
    props: {
        singerMid: {
            type: String,
            default: ''
        },
        scrollY: {
            type: Number,
            default: 0
        },
        imgHeight: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            input: '',
            songs: []
        }
    },
    created() {
        this._getSingerDetail()
    },
    watch: {
        scrollY(t) {
            let topHeight = -this.imgHeight + 50
            if (t < topHeight) {
                this.$refs.tab.style.position = 'fixed'
                this.$refs.tab.style.top = topHeight - t + 'px'
                this.$refs.content.style.paddingTop = this.$refs.tab.clientHeight + 'px'
            }
            else {
                this.$refs.tab.style.position = 'relative'
                this.$refs.tab.style.top = 0
                this.$refs.content.style.paddingTop = 0
            }
        }
    },
    computed: {
        // ...mapGetters([
        //     'singer'
        // ]),
        // bgimg() {
        //     return `background-image:url(${getSinerImgUrl(this.singer.singer_mid, 300)})`
        // },
        // singerName() {
        //     return this.singer.singer_name
        // },
    },
    methods: {
        _getSingerDetail() {
            if (!this.singerMid) {
                this.$router.push('/musichouse/singer')
                return
            }
            let url = getSingerDetail(this.singerMid, 200)
            getData(url, 'MusicJsonCallbacksinger_track').then((res) => {
                this.songs = res.data.list
                // this.getSong(this.songs)
            })
        },
        selectItem(item, index) {
            this.selectPlay({
                list: this.songs,
                index
            })
        },
        ...mapActions([
            'selectPlay'
        ])
    },
    components: {
        songList
    }
}
</script>
<style lang="less" scoped>
.detail-content {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  .detail-content-tab {
    position: relative;
    width: 100%;
    background: #fff;
    z-index: 10;
    box-sizing: border-box;
    .tab-list {
      list-style: none;
      letter-spacing: -0.5em;
      color: #7e7e7e;
      li {
        letter-spacing: normal;
        display: inline-block;
        width: 25%;
        line-height: 3;
        text-align: center;
      }
    }
  }
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
}
</style>
