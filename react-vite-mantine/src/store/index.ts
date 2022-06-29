import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface Store {
  sidebarOpen: boolean
  toggleSidebarOpen: () => void
}

export const useStore = create<Store>()(
  devtools(
    persist(set => ({
      sidebarOpen: false,
      toggleSidebarOpen: () => {
        set(state => ({ sidebarOpen: !state.sidebarOpen }))
      },
    }))
  )
)
