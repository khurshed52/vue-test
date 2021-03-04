<template>
    <fragmnet>
        <Modal title="Terms and Conditions" uniqId="termCo" fullwidth="modal-xl">
          <h1> Terms</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nihil ipsam veniam unde ad deleniti labore fuga obcaecati sint asperiores magnam eligendi ea, vitae hic id rem eum dolorem adipisci numquam! Labore veniam dolorem aliquid eos, libero veritatis non, dignissimos cumque voluptate ea eius, laboriosam fuga officia omnis. Deleniti, consequuntur.</p>
            <h1> Conditions</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nihil ipsam veniam unde ad deleniti labore fuga obcaecati sint asperiores magnam eligendi ea, vitae hic id rem eum dolorem adipisci numquam! Labore veniam dolorem aliquid eos, libero veritatis non, dignissimos cumque voluptate ea eius, laboriosam fuga officia omnis. Deleniti, consequuntur.</p>
        </Modal>
         <v-form
    ref="form"
    v-model="signup.valid"
    lazy-validation
  >
    <v-text-field
      v-model="signup.name"
      :counter="10"
      :rules="signup.nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="signup.email"
      :rules="signup.emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-checkbox
      v-model="signup.checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>
    <div>
       <a @click="terms"> terms & conditions</a>
    </div>

    <v-btn
      :disabled="!signup.valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
    </fragmnet>
    
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
  components:{
    Modal
  },
    data(){
        return{
             signup:{
                valid: true,
                name: '',
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                checkbox: false,
            },
         }
    },
    methods:{
      validate () {
        this.$refs.form.validate();
        console.log(this.signup)
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },

      terms(){
        $('#termCo').modal('show')
      }
    }
}
</script>

<style>
   a {
     cursor: pointer;
     text-decoration: underline !important;
   }
</style>