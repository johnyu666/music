<template>
  <div>
      <h1>音乐卡片</h1>
      <div id="cards">
          <div v-for="a in $store.state.albums" :key="a.id" class="card">
                <h3>{{a.name}}
                    <button @click="del(a)">删除</button>
                </h3>
                <span v-for="(s,index) in a.singer" :key="index"> {{s}} </span>
                <img :src="a.img" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        del(a){
            this.$store.dispatch("del",a.id)
        }
    }
}
</script>

<style scoped>
    #cards{
        display: flex;
        flex-wrap: wrap;
    }
    .card{
        flex-basis: 300px;
        margin: 10px;
    }
</style>