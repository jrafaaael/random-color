import { createApp } from 'vue'
import App from './App.vue'
import OhVueIcon from "oh-vue-icons/dist/v3/icon.es"
import { OiHeart, OiHeartFill, MdDelete } from "oh-vue-icons/icons"
OhVueIcon.add(OiHeart, OiHeartFill, MdDelete)

createApp(App)
.component('v-icon', OhVueIcon)
.mount('#app')
