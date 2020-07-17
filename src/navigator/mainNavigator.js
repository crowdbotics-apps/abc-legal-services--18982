import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile79858Navigator from '../features/UserProfile79858/navigator';
import Tutorial79857Navigator from '../features/Tutorial79857/navigator';
import NotificationList79829Navigator from '../features/NotificationList79829/navigator';
import Settings79828Navigator from '../features/Settings79828/navigator';
import Settings79820Navigator from '../features/Settings79820/navigator';
import UserProfile79818Navigator from '../features/UserProfile79818/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile79858: { screen: UserProfile79858Navigator },
Tutorial79857: { screen: Tutorial79857Navigator },
NotificationList79829: { screen: NotificationList79829Navigator },
Settings79828: { screen: Settings79828Navigator },
Settings79820: { screen: Settings79820Navigator },
UserProfile79818: { screen: UserProfile79818Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
