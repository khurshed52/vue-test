<template>
<div>
    <form>
        <div v-for="error in formErrors" :key="error">
                {{error}}
        </div>
        <div>
            <input type="text" placeholder="name" v-model="signup.username" />  
             
        </div>
    <div>
        <input type="checkbox" id="jack" value="Jack" v-model="signup.checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="signup.checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="signup.checkedNames">
        <label for="mike">Mike</label>
    </div>
    <div>
        <select v-model="signup.author">
            <option disabled selected value> -- select an option -- </option>
            <option v-for="item in authors" :key="item.authors"> {{item}} </option>
        </select>
    </div>
    <div>
     <label for='terms'>
        <input id='terms' type='checkbox' v-model='signup.terms' /> I accept terms!!!
    </label>
    </div>
    <button type="button" v-on:click="createUser"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" > SignUp</button>
      </form>
      <ul>
        <li v-for="item in employees" :key="item.username">
            <h4>{{item.username}}</h4>
            <p>{{item.checkedNames}}</p>
            <p>{{item.author}}</p>
       </li>
      </ul>
       
</div>
   
</template>

<script>
import Button from './Button.vue'
export default {
    components:{
        Button
    },
    data(){
        return{
            employees:[],
            formErrors:[],
            signup:{
                username: '',
                checkedNames:[],
                author:'',
                terms:false
            },
            authors:['Khurshed', 'Imram', 'Shujaat']
        }
    },

created(){
    this.fetchData()
},

computed: {

  },

methods: {
    fetchData() {
        if (localStorage.getItem('user')=== null){
            this.employees = [];
        }else {
            this.employees = JSON.parse(
            localStorage.getItem('user')
            );
        }
    },

        createUser(e) {
            this.formErrors = [];
            if (!this.signup.username) {
                this.formErrors.push("Username Cant Be Empty");
                }
                if (!this.signup.checkedNames) {
                this.formErrors.push("check Cant Be Empty");
                }
                 if (!this.signup.author) {
                this.formErrors.push("author Cant Be Empty");
                }
            this.employees.push(this.signup)
            localStorage.setItem('user', JSON.stringify(this.employees));
            this.signup = '';
             e.preventDefault();
        }
    },
    
}
</script>

<style>
[disabled] {
    cursor: not-allowed !important;
    opacity: 0.5
}
</style>