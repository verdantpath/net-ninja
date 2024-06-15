import { createApp } from 'vue'
// import './style.css'
import './assets/main.css'
import router from './router'

import App from './App.vue'

// import firebase auth service
import { projectAuth } from './firebase/config'

let app

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount('#app')
  }
})