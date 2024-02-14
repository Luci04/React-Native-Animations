import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import SafeArea from '../../components/SafeAreaView';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : '***';


const Features = () => {

    const navigation = useNavigation();

    const onNaviation = (screenName) => {
        navigation.navigate(screenName);
    }

    return (<SafeArea>
        <ScrollView style={styles.ListContainer}>
            <TouchableOpacity
                onPress={() => { onNaviation("SharedTransitionNavigation"); }}
                activeOpacity={0.8}
            >
                <View style={styles.BtnContainer}>
                    <Text style={{ color: '#fff' }}>Shared Transition Animation</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { onNaviation("AutohideHeader"); }}
                activeOpacity={0.8}
            >
                <View style={styles.BtnContainer}>
                    <Text style={{ color: '#fff' }}>Auto Hide Header</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { onNaviation("FloatingMenu"); }}
                activeOpacity={0.8}
            >
                <View style={styles.BtnContainer}>
                    <Text style={{ color: '#fff' }}>Floating Menu</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { onNaviation("ShimmerPlaceholder"); }}
                activeOpacity={0.8}
            >
                <View style={styles.BtnContainer}>
                    <Text style={{ color: '#fff' }}>Shimmer Placeholder</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { onNaviation("Onboarding"); }}
                activeOpacity={0.8}
            >
                <View style={styles.BtnContainer}>
                    <Text style={{ color: '#fff' }}>OnBoarding Screen</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { onNaviation("ConfettiCannon"); }}
                activeOpacity={0.8}
            >
                <View style={styles.BtnContainer}>
                    <Text style={{ color: '#fff' }}>Confetti Cannon</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { onNaviation("Glassmorphism"); }}
                activeOpacity={0.8}
            >
                <View style={styles.BtnContainer}>
                    <Text style={{ color: '#fff' }}>Glassmorphism</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { onNaviation("StickyFooter"); }}
                activeOpacity={0.8}
            >
                <View style={styles.BtnContainer}>
                    <Text style={{ color: '#fff' }}>Sticky Footer</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
        <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        />
    </SafeArea>
    )
}

export default Features;

const styles = StyleSheet.create({
    ListContainer: {
        flex: 1,
    },
    BtnContainer: {
        padding: 20,
        backgroundColor: '#000',
        margin: 10
    }
})