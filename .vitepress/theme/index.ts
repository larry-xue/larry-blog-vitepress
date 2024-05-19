import DefaultTheme from 'vitepress/theme'
import './tailwind.postcss'
import './custom.css'
import MyLayout from './MyLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: MyLayout
}