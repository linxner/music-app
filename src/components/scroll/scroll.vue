<template>
    <div class="scroll" ref="scroll">
        <slot></slot>
    </div>
</template>
<script>
import BSroll from 'better-scroll'

export default {
    props:{
        scrollX:{
            type:Boolean,
            default:false
        },
        click:{
            type:Boolean,
            default:true
        },
        probeType:{
            type:Number,
            default:1
        }
    },
    mounted(){
        setTimeout(()=>{
            this._initSlide()
        },20)
    },
    methods: {
        _initSlide() {
            this.slide=new BSroll(this.$refs.scroll,{
                probeType:this.probeType,
                click:this.click,
            })
            if(this.scrollX){
                this.slide.options.scrollX=this.scrollX
            }
        }
    }
}
</script>