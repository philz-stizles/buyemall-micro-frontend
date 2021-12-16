import { createApp } from 'vue';
// import { createMemoryHistory, createBrowserHistory } from 'history';
import Dashboard from './components/Dashboard.vue';

// Mount function to start up the app.
const mount = el => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// If we are in development and in isolation, then call mount immediately.
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through the container and we should export the mount function.
export { mount };
