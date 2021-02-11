<template>
  <div class="home">
    <SignUp />
    <!-- <List title="this is title" desc="this is g"/> 
    <List title="this is title" desc="this is fg"/> 
    <List title="this is title" desc="this is description"/> 
    <List title="this is title" desc="this is fg"/> 
    <List title="this is title" desc="this is gfg"/>  -->
      <!-- <h1>{{name}}</h1> -->
      <div class="poster">
            <div v-for="item in players" :key="item.id">
             <img :src="'https://image.tmdb.org/t/p/w200' + item.poster_path" alt="loading...">
            </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import SignUp from '../components/SignUp';
import List from '../components/List.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
const key = 'c14eb837972a4f6965024d0161aa452e&language=en-US';
export default {
  components: {SignUp, List},
  data() {
    return {
      name: 'Home',
      players: []
    }
  },
  mounted() {
    // Vue.axios.get('https://user-mean-test.herokuapp.com/api/blog')
    // .then((res)=> {
    //   this.players = res.data;
    //   console.log(res)
    // });
    Vue.axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + key )
    .then((res)=> {
      this.players = res.data.results
      console.log(res)
    })
  },

  methods: {
    deleteData(id) {
      Vue.axios
    .delete("https://user-mean-test.herokuapp.com/api/blog/" + id)
    .then(res => {
      this.players.splice(id, 1);
      console.log(this.players);
    });
    },
  }
 
}
</script>

<style scoped>
  .poster {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
}

.poster img {
    margin: 10px;
}
</style>