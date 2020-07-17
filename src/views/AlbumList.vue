<template>
  <div id="wraper">
      <div id="list">
      <h1>音乐列表</h1>
      <form @submit.prevent="add" action="#">
          <input type="text" ref="name">
          <input type="text" ref="singer">
          <button>添加</button>
      </form>
      <table>
          <tr v-for="a in $store.state.albums" :key="a.id">
              <td>{{a.id}}</td>
              <td>
                 <a  @click.prevent="select(a)" href="#">{{a.name}}</a> 
                </td>
              <td><span v-if="a.singer[0]?true:false">
                  {{a.singer[0]}}{{a.singer[1]?"...":""}}
                  </span></td>
            <td><button @click="del(a)">删除</button></td>
          </tr>
      </table>
      <h3>现在一共有 {{count}} 张专辑</h3>
    </div>
      <Detail v-if="$store.state.cur?true:false"></Detail>
  </div>
</template>

<script>
import Detail from '../components/Detail'
import logo from '../assets/logo.png'
export default {
    created(){
        this.$store.dispatch("load")
    },
    methods:{
        select(a){
            this.$store.commit("select",a)
        },
        add(){
            let name=this.$refs.name.value;
            let singer=this.$refs.singer.value;
            this.$store.dispatch("add",{name:name,img:logo,singer:[singer]})
        },
        del(a){
           this.$store.dispatch('del',a.id) 
        }
    },
    computed:{
        count(){
        //    return this.$store.state.albums.reduce((prev,cur)=>prev+1,0)
        return  this.$store.state.albums.length
        }
    },
    components:{Detail}
}
</script>

<style>
    #wraper{
        display: flex;

    }
    #list{
        flex-basis: 900px;
    }
    #list table{
        width: 100%;
        border: 1px solid black;
        border-collapse: collapse;
    }
    th,td{
        border: 1px solid black;
    }
</style>