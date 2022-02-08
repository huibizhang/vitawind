import DefaultTheme from 'vitepress/theme'
import CustomLayout from './CustomLayout.vue'
import './index.css'

export default {
  ...DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    app.component('MyButton')
  }
}
