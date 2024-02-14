import { ImageBackground, StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'
import SafeArea from '../../components/SafeAreaView'
import { BlurView } from "@react-native-community/blur";

const Glassmorphism = () => {

    const [blurred, setBlurred] = useState(true);

    return (
        <SafeArea>
            <ImageBackground style={{ flex: 1, position: 'relative' }} resizeMode='cover' source={{ uri: 'https://i.pinimg.com/736x/07/d2/ba/07d2ba3c573b39985f4c7ce0c3197885.jpg' }}  >
                <View style={{ zIndex: 5, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22 }}>Blur Box</Text>
                    <Switch value={blurred} onValueChange={(value) => {
                        setBlurred(value);
                    }} />
                </View>
                {
                    blurred && <BlurView blurAmount={12} style={{
                        zIndex: 1,
                        flex: 1,
                        margin: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    }}
                        blurType='light' />
                }

            </ImageBackground>
        </SafeArea>
    )
}

export default Glassmorphism

const styles = StyleSheet.create({})