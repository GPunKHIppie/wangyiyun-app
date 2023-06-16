<template>
    <div class="musicList">
        <div class="musicTop">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="musicContent">
            <van-swipe :loop="false" :width="150" class="My-swiper" :show-indicators="false">
                <van-swipe-item v-for="item in list.musicList" :key="item" class="page">
                    <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
                    <img :src="item.picUrl" alt="">
                    <span class="playCount">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gl-play" style="height: 100%;width: 100%;"></use>
                        </svg>
                        {{ changeCount(item.playCount) }}
                    </span>
                    <span class="name">{{ item.name }}</span>
                    </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
import { getMusicList } from '@/request/api/home.js';
import { reactive,onMounted } from 'vue';
export default{
    setup(){
        const list  = reactive({musicList:[]})
        function changeCount(num){
            if(num>=100000000){
                return (num/100000000).toFixed(1)+'亿'
            }else if(num>=10000){
                return (num/10000).toFixed(1)+'万'
            }
        }
        onMounted(async ()=>{
            let res = await getMusicList()
            list.musicList = res.data.result
            console.log(res);
        })
        return {
            list,
            changeCount
        }
    }
}

</script>
<style lang="less" scoped>
.musicList{
    width: 100%;
    height: 5rem;
    padding: 0.2rem;
    .musicTop{
        width: 100%;
        height: 0.6rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.2rem;
        .title{
            font-size: 0.4rem;
            font-weight: 900;
        }
        .more{
            border: 1px solid #ccc;
            text-align: center;
            line-height: 0.6rem;
            padding: 0 0.2rem;
            border-radius: 0.4rem;
        }
    }
    .musicContent{
        width: 100%;
        height: 4rem;
        .My-swiper{
            height: 100%;
            .page{ 
                img{
                    width: 100%;
                    height: 2.5rem;
                }
                .playCount{
                    position: absolute;
                    right: 0.4rem;
                    top: 0.1rem;
                    z-index: 3;
                    padding-left: 13px;
                    color: #fff;
                    font-size: 0.32rem;
                    .icon{
                        height: 0.32rem;
                        widows: 0.32rem;
                        position:before;
                    }                  
                }
            }

        }
    }
}
</style>