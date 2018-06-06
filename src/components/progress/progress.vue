<template>
  <div class="f-progress">
    <div class="begin-time">{{format(currentTime)}}</div>
    <div class="progress" ref="progress" @click="getPos">
      <div class="progress-cover" ref="progressCover">
        <div class="dot" @touchstart.prevent="proTouchStart" @touchmove.prevent="proTouchMove" @touchend.prevent="proTouchEnd"></div>
      </div>
    </div>
    <div class="end-time">{{format(duration)}}</div>
  </div>
</template>
<script>
export default {
  props: {
    currentTime: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentPos: 0
    }
  },
  created() {
    this.touch = {}
  },
  methods: {
    format(interval) {
      interval = interval | 0
      const minute = interval / 60 | 0
      const second = this._pad(interval % 60)
      return `${minute}:${second}`
    },
    _pad(num, n = 2) {
      let len = num.toString().length
      while (len < n) {
        num = '0' + num
        len++
      }
      return num
    },
    getPos(e) {
      let a = e.pageX
      let b = this.$refs.progress.getBoundingClientRect().left
      this.$refs.progressCover.style.width = a - b + 'px'
      this._trigglePercent()
    },
    proTouchStart(e) {
      this.touch.initiated = true
      this.touch.startX = e.touches[0].pageX
      this.touch.left = this.$refs.progressCover.clientWidth
    },
    proTouchMove(e) {
      if (!this.touch.initiated) {
        return
      }
      const deltaX = e.touches[0].pageX - this.touch.startX
      const offsetWidth = Math.min(Math.max(0, this.touch.left + deltaX), this.$refs.progress.clientWidth)
      this.$refs.progressCover.style.width = offsetWidth + 'px'
    },
    proTouchEnd() {
      this.touch.initiated = false
      this._trigglePercent()
    },
    _trigglePercent() {
      const percent = this.$refs.progressCover.clientWidth / this.$refs.progress.clientWidth
      this.$emit('newPercent', percent)
    }
  },
  computed: {
    percent() {
      return this.currentTime / this.duration
    },
  },
  watch: {
    percent(newPer) {
      if (newPer > 0 && !this.touch.initiated) {
        const barWidth = this.$refs.progress.clientWidth
        this.$refs.progressCover.style.width = barWidth * newPer + 'px'
      }
      if (newPer > 1) {
        // this.$refs.progressCover.style.width = 0
      }
    },
    // currentPos(e) {
    //   this.$refs.progressCover.style.width = e + 'px'
    //   this.currentTime = (e / this.$refs.progress.clientWidth) * this.duration
    // }
  }
}
</script>
<style lang="less" scoped>
.f-progress {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 10px;
  line-height: 2;
  color: #ccc;
  .progress {
    position: relative;
    width: 80%;
    border: 1px solid #ccc;
    .progress-cover {
      position: absolute;
      top: -2px;
      left: 0;
      border: 2px solid #409eff;
      .dot {
        padding: 5px;
        background-color: #fff;
        border-radius: 5px;
        position: absolute;
        right: -5px;
        bottom: -5px;
      }
    }
  }
}
</style>
