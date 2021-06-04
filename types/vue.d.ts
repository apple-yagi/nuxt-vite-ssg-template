import { NuxtAppOptions } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {}
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {}
}

declare module 'vuex' {
  interface Store<S> {}
}
