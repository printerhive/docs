import DefaultTheme from 'vitepress/theme'
import GtmNoscript from './components/GtmNoscript.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('GtmNoscript', GtmNoscript)
  }
}