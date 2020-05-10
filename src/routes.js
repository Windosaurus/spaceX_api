// / layouts
import AppLayout from './layouts/AppLayout';

// pages
import SpaceshipPage from './pages/SpaceshipPage';
import HistoryPage from './pages/HistoryPage';
import AboutPage from './pages/AboutPage';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 * https://reacttraining.com/react-router/web/guides/server-rendering/data-loading
 */
export default () => [
  {
    component: AppLayout,
    routes: [
      {
        component: SpaceshipPage,
        path: '/',
        exact: true,
      },
      {
        component: SpaceshipPage,
        path: '/spaceships',
        exact: true,
      },
      {
        component: HistoryPage,
        path: '/history',
        exact: true,
      },
      {
        component: AboutPage,
        path: '/about',
        exact: true,
      },
      {
        component: SpaceshipPage,
        path: '*',
        exact: true,
      },
    ],
  },
];

if (module.hot) {
  module.hot.accept();
}
