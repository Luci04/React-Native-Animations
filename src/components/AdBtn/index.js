import { StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import IconComponent from '../IconComponent/IconComponent';
import { InterstitialAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';
import * as Animatable from 'react-native-animatable';


const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';


const interstitial = InterstitialAd.createForAdRequest(adUnitId);

const AdBtn = () => {
    const pulseRef = useRef(null);
    const [loaded, setLoaded] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);

    useEffect(() => {
        const unsubscribeLoad = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            setLoaded(true);
            setBtnClicked(false);
            interstitial.show();
        });

        const unsubscribeClose = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
            Linking.openURL('https://github.com/Luci04/p_track')
        });

        // Start loading the interstitial straight away

        // Unsubscribe from events on unmount
        return () => {
            unsubscribeLoad();
            unsubscribeClose();
        };
    }, []);


    return (
        <TouchableOpacity
            onPress={async () => {

                // pulseAnimation();
                try {
                    if (!loaded) {
                        setBtnClicked(true);
                        interstitial.load();
                    } else {
                        Linking.openURL('https://github.com/Luci04/p_track')
                    }
                } catch (error) {
                    console.log(error)
                }
            }}
            title="Info"
            color="#fff"
        >
            <Animatable.View ref={pulseRef} >
                <IconComponent color={'#000'} size={24} iconName={'code'} iconType={'FontAwesome'} />
            </Animatable.View>
        </TouchableOpacity>
    )
}

export default AdBtn

const styles = StyleSheet.create({})