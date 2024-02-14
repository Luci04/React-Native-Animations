import { Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SharedTransactionNaviagtion from './SharedTransactionNaviagtion';
import Features from '../src/screens/Features';
import AutohideHeader from '../src/screens/AutohideHeader';
import FlotingMenu from '../src/screens/FlotingMenu';
import ShimmerPlaceholder from '../src/screens/ShimmerPlaceholder';
import OnBoardingScreen from '../src/screens/OnBoarding/OnBoardingScreen';
import SplashScreen from '../src/components/SplashScreen';
import ConfettiCannon from '../src/screens/ConfettiCannon';
import AdBtn from '../src/components/AdBtn';
import Glassmorphism from '../src/screens/Glassmorphism';
import StickyFooter from '../src/screens/StickFooter';

const Stack = createStackNavigator();

const MainNavigation = () => {

    return (
        <Stack.Navigator initialRouteName='SplashScreen' >
            <Stack.Screen name="SplashScreen" options={{
                headerShown: false
            }} component={SplashScreen} />
            <Stack.Screen name="Features" options={{
                title: "Features List"
            }} component={Features} />
            <Stack.Screen name="SharedTransitionNavigation" options={{
                headerShown: false
            }} component={SharedTransactionNaviagtion} />
            <Stack.Screen name="AutohideHeader" options={{
                headerShown: false
            }} component={AutohideHeader} />
            <Stack.Screen name="FloatingMenu" component={FlotingMenu} />
            <Stack.Screen name="ShimmerPlaceholder" component={ShimmerPlaceholder} />
            <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
            <Stack.Screen name="ConfettiCannon" component={ConfettiCannon} options={{
                headerRightContainerStyle: {
                    paddingRight: 20
                },
                headerRight: () => (
                    <AdBtn />
                ),

            }} />
            <Stack.Screen name="Glassmorphism" component={Glassmorphism} options={{
                headerRightContainerStyle: {
                    paddingRight: 20
                },
                headerRight: () => (
                    <AdBtn />
                ),

            }} />
            <Stack.Screen name="StickyFooter" component={StickyFooter} options={{
                headerRightContainerStyle: {
                    paddingRight: 20
                },
                headerRight: () => (
                    <AdBtn />
                ),

            }} />
        </Stack.Navigator>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})