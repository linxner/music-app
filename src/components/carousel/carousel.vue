<template>
  <div class="carousel">
    <div class="block">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in imgurl" :key="item">
        <img :src="item" alt="" style="height:170px">
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>

<script>
  import {url} from "../../assets/js/url";
  export default {
    data(){
      return{
        imgurl:[]
      }
    },
    created(){
      this.getimg()
    },
    methods:{
      getimg(){
        var that=this
        $.ajax({
          url:url.url,
          type:'post',
          dataType:'jsonp',
          success(res){
            // console.log(typeof(res.focus.data.content))
            for(var k in res.focus.data.content){
              that.imgurl.push(res.focus.data.content[k].pic_info.url)
            }
          }
        })

      }
      // console.log(this.imgurl)
      // $.ajax({
      //   url:url.url,
      //   type:'post',
      //   dataType:'jsonp',
      //   success(data){
      //     console.log(data.focus.data.content.length)
      //     var imgurl=[]
      //     var urllen=data.focus.data.content
      //     for(let i=0; i<urllen.length;i++){
      //       imgurl.push(urllen[i].pic_info.url)
      //       console.log(imgurl)
      //     }
      //   }
      // })
    }
  }

</script>

<style lang="less" scoped>
  .carousel {
    width: 100%;
   .el-carousel__arrow {
     display: none;
   }
  }
</style>
