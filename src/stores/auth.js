import { defineStore } from "pinia"; 
import axios from 'axios' 

export const useAuthStore = defineStore('auth', {
  state: () => ({
    is_login: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user'))
  }),
  getters: {
    isAuthenticated: (state) => !!state.is_login,
  },
  actions:{
    login(form){
      this.is_login = true
      axios({
        url: import.meta.env.VITE_APP_APIHOST+'api/login', 
        data: form, 
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      })
      .then(ress => {
        const token = ress.data.token
        const user = ress.data.user
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        this.is_login = token;
        this.user = user;
        return true
      })
      .catch(err => {
        console.log(err)
        this.is_login = false;
        localStorage.clear();
        return false
      });
    },
    logout(){
      this.is_login = false
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
  }
})