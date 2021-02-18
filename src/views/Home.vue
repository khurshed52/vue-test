<template>
  <div class="home">
    <SignUp />
    <button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button>
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
import GoogleSignInButton from 'vue-google-signin-button-directive'

Vue.use(VueAxios, axios)
const key = 'c14eb837972a4f6965024d0161aa452e&language=en-US';
export default {
  components: {SignUp, List},
  directives: {
    GoogleSignInButton
  },
  data() {
    return {
      clientId: '174433208318-parg9stfe9ds52c4k39meobtfvftcr5v.apps.googleusercontent.com',
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
    OnGoogleAuthSuccess (idToken) {
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
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

.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>