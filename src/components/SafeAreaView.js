import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const SafeArea = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
        </SafeAreaView>
    )
}

export default SafeArea

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
})