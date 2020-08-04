import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import CompositionApi from "./features/CompositionApi";
import MultipleRoot from "./features/MultipleRoot";
import MultipleVModels from "./features/MultipleVModels";
import BetterReactivity from "./features/BetterReactivity";

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/composition-api',
      component: CompositionApi
    },
    {
      path: '/multiple-root-elements',
      component: MultipleRoot
      },
    {
      path: '/multiple-v-models',
      component: MultipleVModels
      },
    {
      path: '/better-reactivity',
      component: BetterReactivity
      },
  ]
})

createApp(App).use(router).mount('#app')
