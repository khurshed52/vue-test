<template>
    <fragmnet>
        <v-app>
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
  </v-app>
    </fragmnet>
</template>

<script>
export default {
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
    }
}
</script>

<style>

</style>