<template>
  <div class="about">
    <h1>{{ $t('about') }}</h1>
    <button v-on:click="showPortfolio"> {{portfolio ? 'Hide my all portfolio': 'Show my all portfolio'}}</button>
    <br/>
    <template v-if="portfolio">
      <button @click="activeTab= 'Website'" :class="[activeTab=== 'Website' ? 'active': '']"> Website </button>
        <button @click="activeTab= 'Intranet'" :class="[activeTab=== 'Intranet' ? 'active': '']"> Intranet </button>
        <button @click="activeTab= 'WebApp'" :class="[activeTab=== 'WebApp' ? 'active': '']"> Web App </button>
        <!-- <Website v-if="activeTab === 'Website'"/>
        <Intranet v-if="activeTab === 'Intranet'"/>
        <WebApp v-if="activeTab === 'WebApp'"/> -->
        <br/>
        <keep-alive>
          <component :is="activeTab" />
        </keep-alive>
      </template>
 
    <button type="button" @click="openModal" class="btn btn-primary">
       Launch demo modal
    </button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {{today}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<div>
</div>
  </div>
</template>

<script>
import Website from '../components/tabs/website.vue'
import Intranet from '../components/tabs/intranet.vue'
import WebApp from '../components/tabs/webApp.vue';
import moment from "moment/moment";

export default {
  components: { Website, Intranet, WebApp },
  data() {
    return{
      activeTab:'Website',
      portfolio:false,
      today: moment().format('dddd')
    }
  },

  methods:{
    showPortfolio() {
      this.portfolio = !this.portfolio
    },
    openModal() {     
      if(localStorage.getItem('popState') != 'shown'){
            $('#exampleModal').modal('show');
            localStorage.setItem('popState','shown')
        }
    }
  },

   mounted() {
     this.openModal();
    console.log('Contact has been mounted')
    
  }
}
</script>

<style>

</style>