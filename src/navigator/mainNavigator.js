import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile80129Navigator from '../features/UserProfile80129/navigator';
import Tutorial80128Navigator from '../features/Tutorial80128/navigator';
import NotificationList80100Navigator from '../features/NotificationList80100/navigator';
import Settings80099Navigator from '../features/Settings80099/navigator';
import Settings80091Navigator from '../features/Settings80091/navigator';
import UserProfile80089Navigator from '../features/UserProfile80089/navigator';
import UserProfile80020Navigator from '../features/UserProfile80020/navigator';
import Tutorial80019Navigator from '../features/Tutorial80019/navigator';
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
UserProfile80129: { screen: UserProfile80129Navigator },
Tutorial80128: { screen: Tutorial80128Navigator },
NotificationList80100: { screen: NotificationList80100Navigator },
Settings80099: { screen: Settings80099Navigator },
Settings80091: { screen: Settings80091Navigator },
UserProfile80089: { screen: UserProfile80089Navigator },
UserProfile80020: { screen: UserProfile80020Navigator },
Tutorial80019: { screen: Tutorial80019Navigator },
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
