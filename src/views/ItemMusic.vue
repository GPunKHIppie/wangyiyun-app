<template>
    <ItemMusicTop :playlist="state.playlist"/>
    <ItemMusicList  :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"/>
</template>
<script>
import { useRoute } from "vue-router"
import { onMounted,reactive } from "vue"
import { getMusicItemList, getItemList } from "@/request/api/item.js"
import ItemMusicTop from "@/components/item/ItemMusicTop.vue"
import ItemMusicList from "@/components/item/ItemMusicList.vue"
export default{
    setup() {
        const state = reactive({
            playlist: {},//歌单的详情页数据
            itemList:[]//歌单的歌曲
        });
        onMounted(async () => {
            let id = useRoute().query.id;
            console.log(id);
            //获取歌单详情
            let res = await getMusicItemList(id);
            console.log(res);
            state.playlist = res.data.playlist;
            //获取歌单的歌曲
            let result = await getItemList(id);
            console.log(result);
            state.itemList = result.data.songs
            //防止页面刷新，数据丢失，将数据保存到sessionStorage
            sessionStorage.setItem('ItemDetail',JSON.stringify(state))
        });
        return { state };
    },
    components: { ItemMusicTop }
}
</script>