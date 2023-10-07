<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="card col-lg-6 col-sm-12">
        <div class="card-header">
          <h5>Login</h5>
        </div>
        <div class="card-body">
          <form @submit.prevent="submit">
            <div class="mb-3">
              <label for="exampleInputEmail1" 
                class="form-label">Email address</label>
              <input type="email" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                v-model="form.email">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" 
                class="form-label">Password</label>
              <input type="password" 
                class="form-control" 
                id="exampleInputPassword1"
                v-model="form.password">
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" 
                class="form-check-input" 
                id="exampleCheck1"
                v-model="rememberMe">
              <label class="form-check-label" 
                for="exampleCheck1">Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <div class="col-lg-3"></div>
    </div>
  </div>
</template>

<script>
  import { useAuthStore } from '../stores/auth'
  import axios from 'axios'
  export default{
    data() {
      return {
        form:{
          email: '',
          password: '',
        },
        rememberMe: false
      }
    },
    methods: {
      submit(){
        try {
          if(this.form)
            this.auth_store.login(this.form)
              ? this.$router.push('/login') : this.$router.push('/')
        } catch (error) {
          console.log(error)
        }
      }
    },
    setup() {
      const auth_store = useAuthStore()
      window.stores = { auth_store }
      return {
        auth_store,
      }
    },
  }
</script>