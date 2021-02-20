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
        <li v-for="lang in paginated('post')" :key="lang.id">
            <p>{{ lang.title }} </p>
             <p>{{ lang.author }} </p>
             <button class="btn btn-danger" @click="deleteData(lang._id)"> Delete </button>
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
export default {
    created() {
        this.postData()
    },
 name: 'Post',
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

        deleteData:function(id) {
            axios.delete('https://user-mean-test.herokuapp.com/api/blog/' + id)
            .then((res)=> {
                this.post.splice(id, 1);
                this.$swal({
             position: 'top-end',
            icon: 'success',
            title: 'Your work has been deleted',
            showConfirmButton: false,
            timer: 1500
         });
            })
           
        }
 }
 
}
</script>

<style>

</style>