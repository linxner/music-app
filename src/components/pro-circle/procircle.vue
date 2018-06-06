<template>
    <div class="circle-wrapper">
        <svg :width="radiu" :height="radiu" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="out-circle" r="50" cx="50" cy="50" fill="transparent" />
            <circle class="inner-circle" r="50" cx="50" cy="50" fill="transparent" :stroke-dasharray="dashArray" :stroke-dashoffset="dashOffset" />
        </svg>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        radiu: {
            type: Number,
            default: 35
        },
        percent: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            dashArray: Math.PI * 100
        }
    },
    computed: {
        dashOffset() {
            return (1 - this.percent) * this.dashArray
        }
    }
}
</script>
<style lang="less" scoped>
.circle-wrapper {
  position: relative;
  box-sizing: border-box;
  width: 55px;
  height: 55px;
  padding: 10px;
  circle {
    stroke-width: 8px;
    transform-origin: center;
    &.out-circle {
      transform: scale(0.9);
      stroke: #ccc;
    }
    &.inner-circle {
      transform: scale(0.9) rotate(-90deg);
      stroke: #409eff;
    }
  }
}
</style>

