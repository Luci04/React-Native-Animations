import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SharedElement } from 'react-navigation-shared-element'
import { useRoute } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable';

const DetailsPage = () => {
  const route = useRoute();
  const { character } = route.params;
  const [visible, setVisible] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity activeOpacity={1} onLongPress={() => setVisible(false)} onPressOut={() => setVisible(true)} >
        <SharedElement id={`image` + character.id} >
          <Image source={{ uri: character.img }} style={{ width: '100%', height: '100%' }} resizeMode='cover' />
        </SharedElement>
        {
          visible && <Animatable.View animation="fadeIn" duration={2000} style={{ ...styles.linearGradient, opacity: !visible ? 1 : 0 }}>
            <LinearGradient on colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,1)']} style={styles.linearGradient}>
              <View style={{ width: '100%', position: 'absolute', bottom: 60, paddingHorizontal: 10 }}>
                <Text style={styles.characterTitle}>
                  {character.name}
                </Text>
                <Text style={styles.characterDesc}>
                  {character.description}
                </Text>
              </View>
            </LinearGradient>
          </Animatable.View>
        }
      </TouchableOpacity>
    </View>
  )
}

export default DetailsPage

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  characterTitle: {
    fontSize: 40,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff'
  },
  characterDesc: {
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: '#fff'
  }
})