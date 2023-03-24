import { defineStore } from "pinia";
import router from '@/router';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: localStorage.getItem('token') || '',
      isLogin: localStorage.getItem('isLogin') || '',
    }
  },
  getters: {
    getToken: state => {
      return state.token
    },
    getIsLogin: state => {
      return state.isLogin
    }
  },
  actions: {
    userLogin() {
      this.token = 'tokenCode'
      this.isLogin = 'true'
      localStorage.setItem('token', 'tokenCode')
      localStorage.setItem('isLogin', 'true')
      router.push({
        path: "/"
      })
    },
    loginOut() {
      this.token = ''
      this.isLogin = ''
      localStorage.clear()
      router.push({
        path: "/login"
      })
    }
  }
})