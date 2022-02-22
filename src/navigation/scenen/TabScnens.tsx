import 'react-native-gesture-handler';
import { Image } from 'react-native';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Login, Welcome, Register } from '../../feature'
import { IMAGES } from '../../assets';
import { COLORS } from '../../contants';
import { MAIN_BOTTOM_TAB_ROUTE, HOME_STACK } from '../config/routes';
import HELPERS from '../../utilities/helper';

const RootTab = createBottomTabNavigator<RootTabParams>();

export type RootTabParams = {
    Register: { name: string };
    Home: NavigatorScreenParams<HomeStackParams>;
    Welcome: undefined;
    Login: undefined
};

/**
 * Define home stack
 */
const HomeStack = createNativeStackNavigator<HomeStackParams>();

export type HomeStackParams = {
    Home: {
        name: string
    };
    Login: undefined;
    Welcome: undefined;
};

/**
 * Home stack chil of tab navigator
 * @returns 
 */
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator initialRouteName={HOME_STACK.HOME} screenOptions={{
            headerShown: false,
        }}>
            <HomeStack.Screen name={HOME_STACK.HOME} component={Home} />
            <HomeStack.Screen name={HOME_STACK.LOGIN} component={Login} />
            <HomeStack.Screen name={HOME_STACK.WELCOME} component={Welcome} />
        </HomeStack.Navigator>
    );
};

// const renderTabIcon = (image: any, tintColor: any, size: number) => {
//     return <Image
//         source={image}
//         style={[{ width: 24, height: 24, tintColor }]}
//         resizeMethod='scale' resizeMode='contain' />
// }

/**
 * Tab
 * @returns TabNavigator
 */
const TabScnens = () => {
    return (
        <RootTab.Navigator initialRouteName={MAIN_BOTTOM_TAB_ROUTE.REGISTER} screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: COLORS.cyanBlur,
            tabBarInactiveTintColor: COLORS.gray,
        })}>
            <RootTab.Screen
                name={MAIN_BOTTOM_TAB_ROUTE.REGISTER}
                component={Register}
                options={{
                    tabBarIcon: ({ color, size }) => HELPERS.renderTabIcon(IMAGES.icons.tab.setting, color, size),
                    tabBarLabel: MAIN_BOTTOM_TAB_ROUTE.REGISTER
                }}
            />
            <RootTab.Screen
                name={MAIN_BOTTOM_TAB_ROUTE.HOME}
                component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ color, size }) => HELPERS.renderTabIcon(IMAGES.icons.tab.home, color, size),
                    tabBarLabel: MAIN_BOTTOM_TAB_ROUTE.HOME
                }}
            />
            <RootTab.Screen
                name={MAIN_BOTTOM_TAB_ROUTE.WELCOME}
                component={Welcome}
                options={{
                    tabBarIcon: ({ color, size }) => HELPERS.renderTabIcon(IMAGES.icons.tab.account, color, size),
                    tabBarLabel: MAIN_BOTTOM_TAB_ROUTE.WELCOME
                }}
            />
            <RootTab.Screen
                name={MAIN_BOTTOM_TAB_ROUTE.LOGIN}
                component={Login}
                options={{
                    tabBarIcon: ({ color, size }) => HELPERS.renderTabIcon(IMAGES.icons.tab.notification, color, size),
                    tabBarLabel: MAIN_BOTTOM_TAB_ROUTE.LOGIN
                }}
            />
        </RootTab.Navigator>
    );
};


export default TabScnens;