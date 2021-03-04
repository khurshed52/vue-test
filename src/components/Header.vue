<template>
<div class="header">
      <div id="nav">
      <router-link to="/">{{ $t('nav.home') }}</router-link> |
      <router-link to="/about">{{ $t('nav.about') }}</router-link> |
       <router-link to="/faq">{{ $t('nav.faq') }}</router-link> |
        <router-link to="/post">{{ $t('nav.post') }} </router-link> |
         <router-link to="/materialForm"> Material Form </router-link>
    </div>
    <template v-if="twoBtn">
        Valid user
    </template>
     <template v-if="!twoBtn">
        Invalid user 
    </template>
    <button> {{twoBtn? 'valid': 'invalid'}}</button>
    <div class="user">
         <!--language switch-->
         <Language/>
         <!-- <LanguageSwitcher/> -->
         <a @click="toggleVisible" v-on-clickaway="away">
             <img src="https://media-exp1.licdn.com/dms/image/C5103AQE9g6-QbOBDWg/profile-displayphoto-shrink_800_800/0/1517350596486?e=1617840000&v=beta&t=2wnpdZ8OZxtIfnbsHwf5gPGHqAUgXpViW2IpBGrwVPk"/>
         </a>
        <transition name="fade">
                <div class="dropdown-content" v-if="isVisible">
                    <a href="#"><i class="fa fa-home"></i> Home</a>
                    <a href="#"><i class="fa fa-user"></i>Profile</a>
                    <a href="#"><i class="fa fa-power-off"></i> Logout</a>
                </div>
        </transition>
    </div>
</div>

</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import LanguageSwitcher from '../views/LanguageSwitcher'
import Language from './Language.vue'
import Button from './Button.vue';
export default {
    components:{
        LanguageSwitcher,
        Language
    },
    mixins: [ clickaway ],
    data() {
        return {
            isVisible: false,
            twoBtn: false
        }
    },

    methods:{
        toggleVisible() {
            this.isVisible = !this.isVisible
        },  

        away() {
            this.isVisible = false
        }
    }
}
</script>

<style>
   .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
        margin-top: 1rem;
}

.user img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 20px;
    margin-left: 20px;
    cursor: pointer;
}

.user {
    position: relative;
    display: flex;
}

.dropdown-content {
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
    z-index: 1;
    right: 10px;
}

.dropdown-content a {
    color: #000 !important;
    padding: 6px 10px;
    text-decoration: none;
    display: block;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>