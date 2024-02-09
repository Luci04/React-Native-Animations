import { StyleSheet, Text, View, Animated, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import SafeArea from '../../components/SafeAreaView'


const headerHeight = 60;

const Header = () => {
    return <View style={styles.headerContainer}>
        <Text>Header</Text>
    </View>
}




const AutohideHeader = () => {

    const scrollY = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY, 0, headerHeight)
    const transalteY = diffClamp.interpolate({
        inputRange: [0, headerHeight],
        outputRange: [0, -headerHeight]
    })

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



    const renderItem = () => {

        return (<TouchableOpacity
            onPress={() => { onNaviation("SharedTransitionNavigation") }}
            activeOpacity={0.8}
        >
            <View style={{ paddingHorizontal: 20, paddingVertical: 50, backgroundColor: '#000', margin: 10 }}>
                <Text style={{ color: '#fff', textAlign: 'center' }} >Empty Box</Text>
            </View>
        </TouchableOpacity>
        )
    }

    return (
        <SafeArea>
            <Animated.View style={{
                elevation: 4,
                zIndex: 1000,
                transform: [{
                    translateY: transalteY
                }]
            }} >
                <Header />
            </Animated.View>

            <FlatList
                style={{ paddingTop: headerHeight }}
                data={data}
                keyExtractor={(item) => item}
                renderItem={renderItem}
                onScroll={(e) => {
                    scrollY.setValue(e.nativeEvent.contentOffset.y)
                }}
            />
        </SafeArea>
    )
}

export default AutohideHeader;

const styles = StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        padding: 10,
        width: "100%",
        height: headerHeight,
        backgroundColor: 'gray'
    }
})