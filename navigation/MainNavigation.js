import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SharedTransactionNaviagtion from './SharedTransactionNaviagtion';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name="SharedTransitionNavigation" component={SharedTransactionNaviagtion} />
        </Stack.Navigator>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})