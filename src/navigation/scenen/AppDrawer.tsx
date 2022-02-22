import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigatorScreenParams } from '@react-navigation/native';
import { COLORS } from '../../contants';
import { DRAWER_ROUTE } from '../config/routes';
import { HomeStackParams } from './TabScnens';
import RootTab from './TabScnens'
import HELPERS from '../../utilities/helper';
import { IMAGES } from '../../assets';

export type DrawerParams = {
  RootTab: undefined;
  Home: NavigatorScreenParams<HomeStackParams>;
  Welcome: { name: string };
};

const Drawer = createDrawerNavigator<DrawerParams>();

const AppDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName={DRAWER_ROUTE.ROOTTAB} screenOptions={({  }) => ({
      headerShown: false,
      tabBarActiveTintColor: COLORS.blackText,
      tabBarInactiveTintColor: COLORS.gray,
    })}>
      <Drawer.Screen
        name={DRAWER_ROUTE.ROOTTAB}
        component={RootTab}
        options={{
          drawerIcon: ({ color, size }) => HELPERS.renderDrawerIcon(IMAGES.icons.tab.setting, color, size),
          drawerLabel: DRAWER_ROUTE.ROOTTAB
        }}
      />
      <Drawer.Screen
        name={DRAWER_ROUTE.HOME}
        component={RootTab}
        options={{
          drawerIcon: ({ color, size }) => HELPERS.renderDrawerIcon(IMAGES.icons.tab.home, color, size),
          drawerLabel: DRAWER_ROUTE.HOME
        }}
      />
      <Drawer.Screen
        name={DRAWER_ROUTE.WELCOME}
        component={RootTab}
        options={{
          drawerIcon: ({ color, size }) => HELPERS.renderDrawerIcon(IMAGES.icons.tab.notification, color, size),
          drawerLabel: DRAWER_ROUTE.WELCOME
        }}
      />
    </Drawer.Navigator>
  );
}

export default AppDrawer;