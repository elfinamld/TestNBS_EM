import {screens} from './screens';
import * as Page from '../../containers/pages';

export const screenRoutes = [
  {
    name: screens.register,
    component: Page.RegisterPage,
  },
  {
    name: screens.login,
    component: Page.LoginPage,
  },
  {
    name: screens.dashboard,
    component: Page.DashboardPage,
  },
];
