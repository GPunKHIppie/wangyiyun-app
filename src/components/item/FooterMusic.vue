<template>
    <div class="footerMusic">
        <div class="footerLeft">
            <img :src="playList[playListIndex].al.picUrl" alt="">
            <div class="foot">
                <p>{{ playList[playListIndex].al.name }}</p>
                <span>横滑切换上下首</span>
            </div>
        </div>
        <div class="footerRight">
            <svg class="icon bofang" aria-hidden="true">
                <use xlink:href="#icon-bofanganniu" @click="play"></use>
            </svg>
            <svg class="icon liebiao" aria-hidden="true">
                <use xlink:href="#icon-zu"></use>
            </svg>
        </div>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex]}.id.mp3`"></audio>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['playList','playListIndex'])
    },
    mounted(){
        console.log(this.$refs);
    },
    methods:{
        play:function(){
            this.$refs.audio.play()
            console.log(111);
        }
    }
}
</script>
<style lang="less" scoped>
.footerMusic{
    width: 100%;
    height: 1.4rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #999;
    display: flex;
    padding: 10px 10px 10px 10px;
    justify-content: space-between;
    .footerLeft{
        width: 55%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }
        .foot{
            span{
                color: #999;
            }
        }
    }
    .footerRight{
            width: 30%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .icon{
                width: 30px;
                height: 30px;
                fill:#000
            }
        }
}
</style>