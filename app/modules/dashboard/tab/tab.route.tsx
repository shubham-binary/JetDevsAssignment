import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import HomeScreen from "./home";
import FavoriteScreen from "./favorite";

import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { FAVORITE_SCREEN, HOME_SCREEN, LOGIN_SCREEN } from "@app/routes/app-route-labels";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const { Navigator, Screen } = createBottomTabNavigator();

const useBottomNavigationState = (initialState = 0) => {
    const [selectedIndex, setSelectedIndex] = React.useState(initialState);
    return { selectedIndex, onSelect: setSelectedIndex };
};

export const BottomNavigationAccessoriesShowcase = () => {
    const bottomState = useBottomNavigationState();
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    return (
        <React.Fragment>
            <BottomNavigation style={styles.bottomNavigation}
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}
            >
                <BottomNavigationTab title='Home' icon={PersonIcon} />
                <BottomNavigationTab title='Favorite' icon={FavoriteIcon} />
            </BottomNavigation>
        </React.Fragment>
    );
}

const BottomTabBar = ({ navigation, state }: { navigation: any, state: any }) => {
    return (
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={index =>
                navigation.navigate(state.routeNames[index])
            }
        >
            <BottomNavigationTab title='Home' icon={PersonIcon} />
            <BottomNavigationTab title='Favorite' icon={FavoriteIcon} />
        </BottomNavigation>
    )
}


export const AppTab = (topProps: any) => {
    return (<Navigator
        tabBar={(props: any) => <BottomTabBar {...props} />}
        initialRouteName={HOME_SCREEN}
        screenOptions={{
            headerShown: false
        }}>
        <Screen name={HOME_SCREEN} component={HomeScreen} />
        <Screen name={FAVORITE_SCREEN} component={FavoriteScreen} />


    </Navigator>
    )
}




const styles = StyleSheet.create({
    bottomNavigation: {
        marginVertical: 8,
    },
});

const PersonIcon = (props: any) => (
    <Icon {...props} name='home-outline' />
);

const FavoriteIcon = (props: any) => (
    <Icon {...props} name='star-outline' />
);