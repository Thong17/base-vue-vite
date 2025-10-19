import { defineStore } from 'pinia'

interface AppState {
  isSidebarOpen: boolean
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    isSidebarOpen: false,
  }),
  actions: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
  },
  persist: {
    key: 'app',
    storage: localStorage,
    pick: ['isSidebarOpen'],
  },
})
