import React, { useState, useRef, useEffect } from 'react'
import SafeArea from '../../components/SafeAreaView';
import { Animated, FlatList, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import OnBoardingItem from './OnBoardingItem';
import Paginator from './Paginator';
// import { LogoSvg } from '../../components/SvgComponent';



const OnBoardingScreen = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current
    const slideRef = useRef(null)

    const slides = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur. Venenatis consequat etiam orci at. Turpis elit."
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur. Venenatis consequat etiam orci at. Turpis elit."
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur. Venenatis consequat etiam orci at. Turpis elit."
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet consectetur. Venenatis consequat etiam orci at. Turpis elit."
        },
    ]

    const viewItemChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <SafeArea style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 30
        }}>
            <FlatList
                data={slides}
                renderItem={({ item }) => <OnBoardingItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onViewableItemsChanged={viewItemChanged}
                viewabilityConfig={viewConfig}
                scrollEventThrottle={32}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false
                })}
                ref={slideRef}
            />
            <Paginator scrollX={scrollX} data={slides} />
            <TouchableOpacity style={{
                backgroundColor: '#E94E1B',
                width: '85%',
                paddingVertical: 14,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8
            }}
                onPress={
                    async () => {
                        if (slideRef.current) {
                            if (currentIndex === (slides.length - 1)) {
                                //Navigation Condition
                            } else {
                                slideRef.current.scrollToIndex({
                                    index: currentIndex + 1,
                                    animated: true,
                                });
                            }
                        }
                    }

                }
            >
                <Text style={{
                    fontSize: 18,
                    fontWeight: 600,
                    fontFamily: 'Montserrat-Regular',
                    lineHeight: 20,
                    color: 'white'
                }}>
                    Next
                </Text>
            </TouchableOpacity>
        </SafeArea>
    )
}



export default OnBoardingScreen
