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
                <use xlink:href="#icon-gedanliebiao"></use>
            </svg>
        </div>
    </div>
    <div class="itemWrap">
        <div class="itemWrapImg">
            <img :src="playlist.coverImgUrl" alt="">
        </div>
        <div class="itemText">
            <h2>{{ playlist.name }}</h2>
            <div class="right_img">
                <img :src="playlist.creator.backgroundUrl" alt="" />
                <span>{{ playlist.creator.nickname }}</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youjiantou"></use>
                </svg>
            </div>
            <div class="description">{{ playlist.description }}</div>
        </div>
    </div>
    <div class="itemTopFooter">
        <div class="footerItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiaoxi"></use>
            </svg>
            <span>{{ playlist.commentCount }}</span>
        </div>
        <div class="footerItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenxiang"></use>
            </svg>
            <span>{{ playlist.shareCount }}</span>
        </div>
        <div class="footerItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
            </svg>
            <span>下载</span>
        </div>
        <div class="footerItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-show_duoxuan"></use>
            </svg>
            <span>多选</span>
        </div>
    </div>
</template>
<script>
export default{
    setup(props){
        //通过props进行传值，判断如果数据拿不到，就获取sessionStorage中的
        if(props.playlist.creator = ''){
            props.playlist.creator = JSON.parse(sessionStorage.getItem().playlist).creator
        }
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
        margin:0 0.2rem;
        margin-right: 0.3rem;
        span{
            font-size: 0.4rem;
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
        height: 3rem;
        margin-top: 0.4rem;
        display: flex;
        justify-content: space-between;
        .itemWrapImg{
            height: 140px;
            width: 36%;
            margin-left: 0.2rem;
            img{        
                height: 2.6rem;
                width: 2.6rem;
                border-radius: 0.2rem;
                position: relative;
            }
        }
        .itemText{
            color:rgba(255, 255, 255, 0.6);
            height: 2.6rem;
            width: 60%;
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            h2{
                font-size: 0.36rem;
                margin-right: 0.4rem;
                font-weight: 900;
                color: #fff;
            }
            .right_img{
                height: 0.6rem;
                width: 100%;
                line-height: 0.6rem;
                img{
                    width: 0.6rem;
                    height: 0.6rem;
                    border-radius: 50%;
                    vertical-align: middle;
                }
                span{
                    margin-left:0.1rem;
                }
                .icon{
                    width: 0.26rem;
                    height: 0.26rem;
                    margin-top: -0.08rem;
                    vertical-align: middle;
                    fill: #fff;
                }
            }
            .description{
                width: 90%;
                height: 0.66rem;
                display: flex;
                overflow: hidden;
                -webkit-line-clamp: 2 ;
                -webkit-box-orient: vertical;
                font-size: 0.24rem;              
                margin-right: 0.2rem;
            }
        }
    }
    .itemTopFooter{
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: space-around;
    margin-top: .2rem;
  .footerItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    .icon{
      fill: #fff;
    }
    span{
      margin-top: .1rem;
    }
  }
}
</style>