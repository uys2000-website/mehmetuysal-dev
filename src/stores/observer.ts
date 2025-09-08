import { defineStore } from 'pinia'

export const useObserverStore = defineStore('observer', {
  state() {
    return {
      observers: {} as Record<string, IntersectionObserver>,
    }
  },
  actions: {
    initObserver(name: string, callback: IntersectionObserverCallback) {
      this.observers[name] = new IntersectionObserver(callback)
    },
    observe(name: string, target: Element | HTMLElement) {
      if (this.observers[name]) this.observers[name].observe(target)
    },
    clearObserver(name: string) {
      if (this.observers[name]) this.observers[name].disconnect()
    },
    destroyObserver(name: string) {
      if (this.observers[name]) {
        this.observers[name].disconnect()
        delete this.observers[name]
      }
    },
  },
})
