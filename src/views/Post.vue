<template>
<div>
    <div>
        <form @submit.prevent="createPost">
            <input type="text" v-model="formData.title"/>
             <input type="text" v-model="formData.author"/>
             <input type="date" v-model="formData.date"/>
              <input type="text" v-model="formData.content"/>
              <button> Create post </button>
        </form>
    </div>
    
  <fragment>
   <ul id="example-1">
       <p> {{error}}</p>
        <li v-for="item in post.slice(0, 5)" :key="item.id">
            <p>{{ item.title }} </p>
             <p>{{ item.author }} </p>
             <button class="btn btn-danger" @click="deleteData(item._id)"> Delete </button>
             <hr/>
        </li>
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
         post:[],
         error:'',
         formData: {
             title: '',
             author: '',
             date:'',
             content: '',
         }
     }
 },
 methods:{
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