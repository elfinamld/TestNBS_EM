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
  {
    name: screens.check_in,
    component: Page.CheckInPage,
  },
  {
    name: screens.check_out,
    component: Page.CheckOutPage,
  },
  {
    name: screens.sick,
    component: Page.SickPage,
  },
  {
    name: screens.permission,
    component: Page.PermissionPage,
  },
];
