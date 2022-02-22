import React from 'react';
import { View } from 'react-native';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
// import { AppDrawer } from './navigation/scenen';
import RootTab, { HomeStackParams } from './navigation/scenen/TabScnens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DRAWER_ROUTE } from './navigation/config/routes';
import HELPERS from './utilities/helper';
import { COLORS } from './contants';
import {Home, Register, Welcome} from './feature'
import { IMAGES } from './assets';



export type DrawerParams = {
    RootTab: undefined;
    Home: NavigatorScreenParams<HomeStackParams>;
    Welcome: { name: string };
};

const Drawer = createDrawerNavigator<DrawerParams>();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName={DRAWER_ROUTE.ROOTTAB} screenOptions={({ }) => ({
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
                    component={Home}
                    options={{
                        drawerIcon: ({ color, size }) => HELPERS.renderDrawerIcon(IMAGES.icons.tab.home, color, size),
                        drawerLabel: DRAWER_ROUTE.HOME
                    }}
                />
                <Drawer.Screen
                    name={DRAWER_ROUTE.WELCOME}
                    component={Welcome}
                    options={{
                        drawerIcon: ({ color, size }) => HELPERS.renderDrawerIcon(IMAGES.icons.tab.notification, color, size),
                        drawerLabel: DRAWER_ROUTE.WELCOME
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;