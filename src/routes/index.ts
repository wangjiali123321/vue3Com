import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Editor from '../views/Editor.vue'
import TemplateDetail from '../views/TemplateDetail.vue'
import Index from '../views/Index.vue'
import table from '../views/table.vue'
import jtable from '../views/Jtable.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'bettertable',
      component: Index,
      children: [
        { path: '', name: 'home', component: Home },
        { path: 'template/:id', name: 'template', component: TemplateDetail }
      ]
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/bettertable',
      name: 'bettertable',
      component: jtable
    }
  ]
})

export default router
