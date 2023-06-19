import { createStore } from 'vuex'

export default createStore({
  state: {
    playList:[{//播放列表默认值
      al:{
        id: 167681966,
        name: "崇拜",
        pic: 109951165770805060,
        picUrl: "https://p1.music.126.net/nx9GveBZOPJuWlyXYLVYkQ==/109951168679333995.jpg",
        pic_str: "109951168679333995"
      },
      id:2055887708
    }],
    playListIndex:0,//下标默认为0
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
