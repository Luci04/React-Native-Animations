import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    runOnJS,
    interpolate,
    useDerivedValue
} from 'react-native-reanimated';
import IconComponent from '../../components/IconComponent/IconComponent';

const FlotingMenu = () => {
    const height = useSharedValue(0);
    const yValue = useSharedValue(0);
    const iconScale = useSharedValue(0);

    const menuStyle = useAnimatedStyle(() => {
        return {
            height: height.value,
            transform: [{ translateY: yValue.value }],
        };
    });

    const iconStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: iconScale.value }]
        }
    })


    const toggleMenu = () => {
        'worklet';
        if (height.value === 0) {
            height.value = withTiming(250, { duration: 300 })
            yValue.value = withTiming(-60, { duration: 300 })
            iconScale.value = withTiming(1, { duration: 500 });
        } else {
            height.value = withTiming(0, { duration: 300 })
            yValue.value = withTiming(0, { duration: 300 })
            iconScale.value = withTiming(0, { duration: 600 });
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={[styles.FlotingMenuBtnContainer, menuStyle]}>
                <Animated.View style={iconStyle}>
                    <IconComponent color={'#fff'} iconType={'AntDesign'} iconName={'setting'} size={35} />
                </Animated.View>
                <Animated.View style={iconStyle}>
                    <IconComponent color={'#fff'} iconType={'AntDesign'} iconName={'camera'} size={35} />
                </Animated.View>
                <Animated.View style={iconStyle}>
                    <IconComponent color={'#fff'} iconType={'AntDesign'} iconName={'up'} size={35} />
                </Animated.View>
                <Animated.View style={iconStyle}>
                    <IconComponent color={'#fff'} iconType={'AntDesign'} iconName={'plus'} size={35} />
                </Animated.View>
                <Animated.View style={iconStyle}>
                    <IconComponent color={'#fff'} iconType={'AntDesign'} iconName={'man'} size={35} />
                </Animated.View>
            </Animated.View>

            <TouchableOpacity activeOpacity={1} style={styles.FlotingMenuBtn} onPress={runOnJS(toggleMenu)}>
                {
                    height.value === 0 ? <IconComponent color={'#fff'} iconType={'AntDesign'} iconName={'upcircleo'} size={35} /> :
                        <IconComponent color={'#fff'} iconType={'AntDesign'} iconName={'close'} size={35} />
                }

            </TouchableOpacity>
        </View>
    );
};

export default FlotingMenu;

const styles = StyleSheet.create({
    FlotingMenuBtn: {
        width: 55,
        height: 55,
        backgroundColor: 'black',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    FlotingMenuBtnContainer: {
        backgroundColor: '#000',
        width: 54,
        flexDirection: 'column',
        borderRadius: 999,
        justifyContent: 'space-between',
        gap: 10,
        right: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        position: 'absolute',
        bottom: 35
    },
});
