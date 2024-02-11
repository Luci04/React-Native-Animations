import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ConfettiCannon from 'react-native-confetti-cannon';
import SafeArea from '../../components/SafeAreaView';


const ConfettiCannonCustom = () => {

    const animationControl = useRef(null);

    return (
        <SafeArea>
            <ConfettiCannon ref={animationControl} count={200} autoStart fadeOut origin={{ x: -10, y: 0 }} />
            <View style={styles.BtnContainer}>
                <TouchableOpacity onPress={() => animationControl.current.start()}>
                    <Text style={styles.BtnText}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => animationControl.current.resume()}>
                    <Text style={styles.BtnText}>Resume</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => animationControl.current.stop()}>
                    <Text style={styles.BtnText}>Stop</Text>
                </TouchableOpacity>
            </View>
        </SafeArea>

    )
}

export default ConfettiCannonCustom

const styles = StyleSheet.create({
    BtnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    BtnText: {
        color: '#005cc5',
        fontSize: 20
    }
})