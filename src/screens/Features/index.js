import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import SafeArea from '../../components/SafeAreaView';

const Features = () => {

    const navigation = useNavigation();

    const onNaviation = (screenName) => {
        navigation.navigate(screenName);
    }

    return (<SafeArea>
        <TouchableOpacity
            onPress={() => { onNaviation("SharedTransitionNavigation"); }}
            activeOpacity={0.8}
        >
            <View style={{ padding: 20, backgroundColor: '#000', margin: 10 }}>
                <Text style={{ color: '#fff' }}>Shared Transition Animation</Text>
            </View>
        </TouchableOpacity>
    </SafeArea>
    )
}

export default Features;

const styles = StyleSheet.create({

})