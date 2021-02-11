<template>
<div>
<div class="faq" v-for="item in faq" :key="item.id">
      <div class="question"> <h1> {{item.question}}</h1></div>
       <div class="answer" v-if="item.open"> <p v-scrollanimation>{{item.answer}} </p></div>
  </div>
</div>
</template>

<script>
export default {
 name: 'FAQ',
 data() {
     return{
        name: 'FAQ',
        faq:[
            {
                id: 1,
                question: 'Whos is best actor ?',
                answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                open:true
            },
             {
                id: 2,
                question: 'Whos is best actor ?',
                answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                open:true
            },
             {
                id: 3,
                question: 'Whos is best actor ?',
                answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                open:true
            },
             {
                id: 4,
                question: 'Whos is best actor ?',
                answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                open:true
            }
        ]
     }
 },
 methods:{
     toggleOpen() {
         this.open = !this.open
     }
 }
}
</script>

<style>
.before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 1s ease-out;
  }
  /* 
    If the element intersects with the viewport, the before-enter class is added.
  */
  .enter {
    opacity: 1;
    transform: translateY(0px);
  }
</style>