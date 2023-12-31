// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HelloWorld.vue'; // Replace with the actual path to your Home component
import About from './pages/About.vue'; // Replace with the actual path to your About component
import Contact from './pages/Contact.vue'
import Blog from './pages/Blog.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/blog', component: Blog },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
