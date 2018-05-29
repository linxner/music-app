<template>
    <div class="loading">
        <div class="hascontent">
            <img src="./loading.gif" alt="">
            <p class="desc">{{title}}</p>
        </div>
        <div class="nocontent">NOT FOUND</div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: '正在载入...'
        },
        ifnull: {
            type: Array,
            default: []
        }
    },
    watch: {
        ifnull() {
            setTimeout(() => {
                if (!this.ifnull.length) {
                    $('.hascontent').hide()
                    $('.nocontent').show()
                } else {
                    $('.hascontent').show()
                    $('.nocontent').hide()
                }
            }, 2000)
        }

    }
}
</script>
<style lang="less" scoped>
@import "~assets/styles/variable";
.loading {
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  line-height: 5;
  img {
    display: inline-block;
    width: 20%;
    margin-top: 10%;
  }
  .desc {
    line-height: 4;
    font-size: 1.2rem;
  }
}
</style>
