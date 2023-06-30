import { createRouter, createWebHashHistory } from 'vue-router';
import employer from "./components/employer.vue";
import applicant from "./components/applicant.vue";
import Sregister from "./components/Sregister.vue";
import Sautoriz from "./components/Sautoriz.vue";
import Rregister from "./components/Rregister.vue";
import Rautoriz from "./components/Rautoriz.vue";
import Search from "./components/Search.vue";
import applicant1 from "./components/applicant1.vue";
import resume from "./components/resume.vue";


const routes = [
  { path: '/employer', component: employer, meta: { requiredRoles: ['guest'] } },
  { path: '/', component: applicant, alias: '/', meta: { requiredRoles: ['guest'] } },
  { path: '/Sregister', component: Sregister, meta: { requiredRoles: ['guest'] } },
  { path: '/Sautoriz', component: Sautoriz, meta: { requiredRoles: ['guest'] } },
  { path: '/Rregister', component: Rregister, meta: { requiredRoles: ['guest'] } },
  { path: '/Rautoriz', component: Rautoriz, meta: { requiredRoles: ['guest'] } },
  { path: '/Search', component: Search, meta: { requiredRoles: ['guest'] } },
  { path: '/login', component: applicant, meta: { requiredRoles: ['guest'] } },
  { path: '/applicant1', component: applicant1, meta: { requiredRoles: ['guest'] } },
  { path: '/resume', component: resume, meta: { requiredRoles: ['guest'] } },
];

const createRouterInstance = (store) => {
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiredRoles)) {
      if (store.getters.isAuthenticated) {
        const requiredRoles = to.meta.requiredRoles;
        if (requiredRoles.includes('guest') || requiredRoles.every(role => store.getters.userRole === role)) {
          next();
        } else {
          next({ path: '/applicant1' });
        }
      } else {
        if (to.path !== '/' && to.path !== '/Sregister' && to.path !== '/Sautoriz' && to.path !== '/applicant1' && to.path !== '/Rautoriz' && to.path !== '/Search' && to.path !== '/employer' && to.path !== '/resume') {
          next({ path: '/Sautoriz' });
        } else {1
          next();
        }
      }
    } else {
      next();
    }
  });

  return router;
};

export default createRouterInstance;
