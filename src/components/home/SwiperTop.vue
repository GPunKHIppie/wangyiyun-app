<template>
<div>
    <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in state.images" :key="image">
            <img :src="image.pic" />
        </van-swipe-item>
    </van-swipe>
</div>
</template>
<script>
import { getBanner } from "@/request/api/home.js"
import { reactive,onMounted } from "vue";
export default{
  setup() {
    const state = reactive({images:['','']});
    //异步请求
    onMounted(async ()=>{
         let res = await getBanner();
         state.images = res.data.banners;     
    })
    return { state };
  },
};
</script>
<style lang="less">
        .van-swipe__indicator--active{
            background-color:rgb(219,130,130)
        }
        .van-swipe{
        width: 100%;
        height: 3rem;
        .van-swipe__track{
            .van-swipe-item{
                padding: 0  0.2rem;
                img{
                    width: 100%;
                    height:100%;
                    border-radius: 0.2rem;
                }
            }
        }
        }
</style>