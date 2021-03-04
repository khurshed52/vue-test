<template>
    <div>
        
        <select v-model="language" @change="changeLanguage()">
            <option v-for="option in country" :key="option.title" :value="option.value">
                 <img :src="option.cardImage"/> {{option.title}}
                </option>
        </select>
    </div>
</template>

<script>
export default {
name:'Language',
data(){
    return{
        language:null,
        country:[
            {
               title: "English",
               cardImage: "https://via.placeholder.com/20",
               value: 'en'   
            },
             {
               title: "Hindi",
               cardImage: "https://via.placeholder.com/20",
               value: 'hi'   
            }
        ]
    }
},

methods:{
    changeLanguage() {
        localStorage.setItem('lang', this.language);
        window.location.reload();
        
    }
},

created(){
    if(localStorage.getItem('lang') == null) {
         localStorage.setItem('lang', 'en')
    } 
    this.language = localStorage.getItem('lang')
}
}
</script>

<style>
select {
    border: 1px solid #000 !important;
}
</style>