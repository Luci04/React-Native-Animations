import { Button, StyleSheet, TouchableOpacity } from 'react-native'
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
import IconComponent from '../src/components/IconComponent/IconComponent';

import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.REWARDED : '***';

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing'],
});

const Stack = createStackNavigator();

const MainNavigation = () => {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
            setLoaded(true);
        });
        const unsubscribeEarned = rewarded.addAdEventListener(
            RewardedAdEventType.EARNED_REWARD,
            reward => {
                console.log('User earned reward of ', reward);
            },
        );

        // Start loading the rewarded ad straight away
        rewarded.load();

        // Unsubscribe from events on unmount
        return () => {
            unsubscribeLoaded();
            unsubscribeEarned();
        };
    }, []);

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
                    <TouchableOpacity
                        onPress={async () => {
                            try {
                                await rewarded.show();

                            } catch (error) {

                            }
                        }}
                        title="Info"
                        color="#fff"
                    >
                        <IconComponent color={'#000'} size={24} iconName={'code'} iconType={'FontAwesome'} />
                    </TouchableOpacity>
                ),

            }} />
        </Stack.Navigator>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})