import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SharedTransactionNaviagtion from './SharedTransactionNaviagtion';
import Features from '../src/screens/Features';
import AutohideHeader from '../src/screens/AutohideHeader';
import FlotingMenu from '../src/screens/FlotingMenu';
import ShimmerPlaceholder from '../src/screens/ShimmerPlaceholder';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name="Features" component={Features} />
            <Stack.Screen name="SharedTransitionNavigation" component={SharedTransactionNaviagtion} />
            <Stack.Screen name="AutohideHeader" component={AutohideHeader} />
            <Stack.Screen name="FloatingMenu" component={FlotingMenu} />
            <Stack.Screen name="ShimmerPlaceholder" component={ShimmerPlaceholder} />
        </Stack.Navigator>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})