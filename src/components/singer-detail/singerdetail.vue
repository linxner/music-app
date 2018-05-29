<template>
    <transition name="slide">
        <div class="singer-detail"></div>
    </transition>
</template>
<script>
import { getSingerDetail } from 'assets/js/url'
import { getData } from 'assets/js/ajax'

export default {
    created() {
        this._getSingerDetail()
    },
    methods: {
        _getSingerDetail() {
            // let url=getSingerDetail('002J4UUk29y8BY', 30)
            //     console.log(url)     
            let url='https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=1583847940&jsonpCallback=music&loginUin=342709615&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&singermid=002J4UUk29y8BY&order=listen&begin=0&num=30&songstatus=1'       
            getData(url).then((res) => {
                console.log(res)
            })
        }
    }
}
</script>
<style lang="less" scoped>
.singer-detail {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 9999999;
    background-color: #fff;
}
.slide-enter-active,.slide-leave-active{
    transition: all .3s;
}
.slide-enter,.slide-leave-to{
    transform: translate3d(100%,0,0)
}
</style>
