import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albums:[],cur:null
  },
  mutations: {
    load(state,albums){
      state.albums=albums
    },
    select(state,a){
      state.cur=a
    },
    add(state,album){
      state.albums.push(album)
    },
    del(state,id){
      let index=state.albums.findIndex(item=>item.id===id)
      state.albums.splice(index,1)
    }
  },
  actions: {
    load(context){
      fetch("http://localhost:3000/albums",
      {method:"GET"})
      .then(resp=>resp.json())
      .then(albums=>context.commit("load",albums))
    },
    add(context,a){
      fetch("http://localhost:3000/albums",
      {method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify(a)})
      .then(resp=>resp.json())
      .then(album=>context.commit("add",album))
    },
    del(context,id){
      fetch("http://localhost:3000/albums/"+id,
      {method:"DELETE"})
      .then(()=>context.commit("del",id))
    }
  },
  modules: {
  }
})
