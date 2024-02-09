import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const SafeArea = ({ style, children }) => {
    return (
        <SafeAreaView style={[styles.mainContainer, style]}>
            {children}
        </SafeAreaView>
    )
}

export default SafeArea

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
})