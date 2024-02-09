import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';
import SafeArea from '../../components/SafeAreaView';

const Shimmer = createShimmerPlaceholder(LinearGradient)

const ShimmerPlaceholder = () => {
    return (
        <SafeArea>
            <View style={{ flex: 1, gap: 10, padding: 20, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shimmer
                        width={100}
                        height={100}
                        style={{
                            borderRadius: 100
                        }}
                        contentStyle={{
                            width: 100,
                            height: 100
                        }} />


                    <Shimmer
                        height={100}
                        style={{
                            borderRadius: 10
                        }}
                    />

                </View>

                <Shimmer
                    style={{
                        borderRadius: 10,
                        width: '100%',
                        height: 100
                    }}
                />
                <Shimmer
                    style={{
                        borderRadius: 10,
                        width: '100%',
                        height: 100
                    }}
                />
                <Shimmer
                    style={{
                        borderRadius: 10,
                        width: '100%',
                        height: 100
                    }}
                />
                <Shimmer
                    style={{
                        borderRadius: 10,
                        width: '100%',
                        height: 100
                    }}
                />

            </View>

        </SafeArea >
    )
}

export default ShimmerPlaceholder

const styles = StyleSheet.create({
    profileContainer: {
        width: 100,
        height: 100
    }
})