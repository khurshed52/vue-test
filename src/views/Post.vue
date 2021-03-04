<template>
<div>
    <div>
        <v-container-fluid>
            <form @submit.prevent="createPost">
                <v-row no-gutters>
                    <v-text-field v-model="formData.title" label="Title"> </v-text-field>
                    <v-text-field v-model="formData.author" label="Author"> </v-text-field>
                    <v-datetime-picker label="Select Datetime" v-model="formData.date"> </v-datetime-picker>
                    <v-text-field v-model="formData.content" label="Title"> </v-text-field>
                    <v-btn color="success" type="submit"> Create post </v-btn>
                </v-row>
            </form>
        </v-container-fluid>
    </div>
  <fragment>
   <ul id="example-1">
       <p> {{error}}</p>
      <paginate
        name="post"
        :list="post"
        :per="2"
        >
        <li v-for="lang in paginated('post')" :key="lang.id" class="mb-3 p-2">
            <p class="mb-2">{{ lang.title }} </p>
             <p class="mb-2">{{ lang.author }} </p>
             <Button @click="deleteData(lang._id)" color="bg-red-600"> Delete </Button>
             <hr/>
        </li>
        </paginate> 
         <paginate-links for="post" :show-step-links="true"></paginate-links>
    </ul>
  </fragment>
</div>
</template>

<script>
import axios from 'axios';
import Button from '../components/Button.vue'
export default {
    name:'Post',
    components:{
        Button
    },
    created() {
        this.postData()
    },
 data(){
     return {
         paginate: ['post'],
         post:[],
         error:'',
         formData: {
             valid: true,
             title: '',
             author: '',
             date:'',
             content: '',
         }
     }
 },
 methods:{
     onChangePage(post) {
            // update page of items
            this.post = post;
        },
     postData(){
         axios.get('https://user-mean-test.herokuapp.com/api/blog')
         .then((res)=> {
             this.post = res.data
         })
         .catch((err)=> {
             console.log(err)
             this.error = 'there is error'  
         })
     },
      createPost(){
         axios.post('https://user-mean-test.herokuapp.com/api/blog', this.formData)
         .then((res)=> console.log(res))
           this.$swal({
             position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
         });
         this.formData = ''
        },

        // delete method 

        deleteData(id) {
            alert(id)  
        }
 }
 
}
</script>

<style>

</style>