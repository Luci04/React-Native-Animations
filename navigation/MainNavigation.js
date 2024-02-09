import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SharedTransactionNaviagtion from './SharedTransactionNaviagtion';
import Features from '../src/screens/Features';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name="Features" component={Features} />
            <Stack.Screen name="SharedTransitionNavigation" component={SharedTransactionNaviagtion} />
        </Stack.Navigator>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})