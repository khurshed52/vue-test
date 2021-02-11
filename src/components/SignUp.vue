<template>
<div>
    <form>
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
  
    <button type="button" v-on:click="createUser"> SignUp</button>
      </form>
      <ul>
        <li v-for="item in employees" :key="item.username">
            {{item.username}}
             {{item.checkedNames}}
       </li>
      </ul>
       
</div>
   
</template>

<script>
export default {
    data(){
        return{
            employees:[],
            signup:{
                username: null,
                checkedNames:[]
            }
        }
    },

methods: {
        createUser() {
            this.employees.push(this.signup);
            this.signup = '';
            localStorage.setItem('user', JSON.stringify(this.signup))
        }
    },
    
}
</script>

<style>

</style>