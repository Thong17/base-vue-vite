import { defineStore } from 'pinia'

interface AuthState {
  token: string | null
  user: {
    id: string
    name: string
    email: string
  } | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: localStorage.getItem('token') || null,
    user: null,
  }),
  getters: {
    isAuthenticated: state => !!state.token,
  },
  actions: {
    async login(token: string, userData: AuthState['user']) {
      this.token = token
      this.user = userData
      localStorage.setItem('token', token)
    },
    async logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
    },
    setUser(userData: AuthState['user']) {
      this.user = userData
    },
  },
})
