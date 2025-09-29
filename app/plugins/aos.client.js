import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    nuxtApp.hook('app:mounted', () => {
      AOS.init({
        once: true,
        duration: 600,
      })
      nuxtApp.$router.afterEach(() => {
        setTimeout(() => AOS.refresh(), 200)
      })
    })
  }
})
