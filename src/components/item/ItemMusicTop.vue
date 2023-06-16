<template>
    <div class="itemMusicTop">
        <img :src="playlist.coverImgUrl" alt="" srcset="" class="backgroundImg">
        <div class="itemLeft">
            <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                <use xlink:href="#icon-zuojiantou"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="itemRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-31liebiao"></use>
            </svg>
        </div>
    </div>
    <div class="itemWrap">
        <div class="itemWrapImg">
            <img :src="playlist.coverImgUrl" alt="">
        </div>
        <div class="itemText">
            <h2>{{ playlist.name }}</h2>
            <div class="nickName">{{ playlist.nickname }}</div>
            <div class="description">{{ playlist.description }}</div>
        </div>
    </div>
</template>
<script>
export default{
    setup(props){
        console.log(props);
    },
    props:['playlist']
}
</script>
<style lang="less" scoped>
.itemMusicTop{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .itemLeft, .itemRight{
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.2rem;
        margin-right: 0.3rem;
        span{
            font-size: .4rem;
            color: #fff;
        }
    }
    .backgroundImg{
        width: 100%;
        height: 11rem;
        position: fixed;
        filter: blur(.6rem);
        z-index: -1;
    }
    .icon{
        fill:#fff
    }
}
.itemWrap{
        width: 100%;
        height: 140px;
        margin: 0.2rem;
        display: flex;
        justify-content: space-around;
        .itemWrapImg{
            height: 140px;
            width: 140px;
            img{        
                height: 140px;
                width: 140px;
                border-radius: 0.2rem;
                position: relative;
            }
        }
        .itemText{
            margin-inline: 0.3rem;
            color: #fff;
            height: 140px;
            h2{
                font-size: 0.4rem;
                font-weight: 600;
            }
            .nickname{
                height: 10px;
            }
            .description{
                height: 40px;
                overflow: hidden;
            }
        }
    }
</style>