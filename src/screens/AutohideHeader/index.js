import { StyleSheet, Text, View, Animated, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import SafeArea from '../../components/SafeAreaView'
import IconComponent from '../../components/IconComponent/IconComponent';

const headerHeight = 75;

const Header = () => {

    const navigate = useNavigation();

    return <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerBackContainer} onPress={() => navigate.goBack()}>
            <View>
                <IconComponent iconType={'AntDesign'} iconName={'left'} color={'#000'} size={25} />
            </View>
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>
                Auto-Hide Header
            </Text>
        </View>
    </View>
}

const AutohideHeader = () => {

    const scrollY = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY, 0, headerHeight)
    const transalteY = diffClamp.interpolate({
        inputRange: [0, headerHeight],
        outputRange: [0, -headerHeight]
    })

    const data = [1, 2, 3, 4, 5, 6, 7];

    const renderItem = () => {

        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={{ flex: 1 }}
                    activeOpacity={0.8}
                >
                    <View style={{ paddingHorizontal: 20, paddingVertical: 50, backgroundColor: '#000', margin: 10, borderRadius: 10 }}>
                        <Text style={{ color: '#fff', textAlign: 'center' }} >Empty Box</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
                style={{ paddingTop: headerHeight, flex: 1 }}
                contentContainerStyle={{ paddingBottom: headerHeight }}
                data={data}
                keyExtractor={(item) => item}
                renderItem={renderItem}
                onScroll={(e) => {
                    scrollY.setValue(e.nativeEvent.contentOffset.y)
                }}
                ListFooterComponentStyle={{
                    marginBottom: 100,
                    paddingBottom: 100
                }}
            />
        </SafeArea >
    )
}

export default AutohideHeader;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        position: 'absolute',
        padding: 10,
        width: "100%",
        height: headerHeight,
        elevation: 3,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerBackContainer: {
        padding: 10
    },
    headerTitleContainer: {
        flex: 1
    },
    headerTitle: {
        fontSize: 18,
        color: '#000'
    }
})