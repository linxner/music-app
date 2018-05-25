<template>
    <div class="loading">
        <img src="assets/images/loading.gif" alt="">
        <p class="desc">{{title}}</p>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: '正在载入...'
        }
    }
}
</script>
<style lang="less" scoped>
@import "~assets/styles/variable";
.loading {
  width: 100%;
  text-align: center;
  img {
    width: 24px;
    height: 24px;
  }
  .desc {
    line-height: 20px;
    font-size: 1.2rem;
    color: @background-color;
  }
}
</style>
