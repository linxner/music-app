<template>
    <div class="f-progress">
        <div class="begin-time">0:00</div>
        <div class="progress">
            <div class="dot"></div>
        </div>
        <div class="end-time">4:35</div>
    </div>
</template>
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
    .dot {
      padding: 5px;
      background-color: #fff;
      border-radius: 5px;
      position: absolute;
      left: 0;
      bottom: -5px;
    }
  }
}
</style>
