import '@/assets/css/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
// import firebase from './api/firebase';
// import { VueFire, VueFireAuth } from 'vuefire';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(VueFire, {
//     // imported above but could also just be created here
//     // firebase,
//     modules: [
//         // we will see other modules later on
//         VueFireAuth(),
//     ],
// })
app.mount('#app')
