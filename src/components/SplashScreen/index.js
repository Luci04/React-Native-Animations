import { ImageBackground, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'

const SplashScreen = () => {
    const heigth = Dimensions.get('window').height;
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Features' }],
            });
        }, 3000);
    }, [])


    return (
        <View style={{ flex: 1, heigth: heigth }}>
            <StatusBar backgroundColor={'#004aad'} barStyle={'light-content'} />
            <ImageBackground style={{ flex: 1 }} source={require('../../../svgs/Icon.png')}>
            </ImageBackground>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})