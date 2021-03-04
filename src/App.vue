<template>
  <div id="app">

    <Header/>
      <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {Header}
}
</script>
<style>

body {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Barlow', sans-serif;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

input, select {
      /* width: 100%; */
    line-height: 23px;
    font-size: 14px;
    border: 0px !important;
    padding: 10px 15px;
    background-color: #fafafa;
    transition: all .5s ease;
    -webkit-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    outline: 0;
    margin-bottom: 1rem !important;
}


label {
    margin-right: 1rem !important;
}
.slither-enter-active, .slither-leave-active {
  transition: transform 1s;
}

.slither-enter, .slither-leave-to {
  transform: translateX(-100%);
}

.slither-enter-to, .slither-leave {
  transform: translateX(0);
}
@media only screen and (max-width:480px) {
 body {
   display:none
 }
}
</style>
