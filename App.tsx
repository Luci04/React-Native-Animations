import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import {Dimensions, StatusBar, View} from 'react-native';
import SafeArea from './src/components/SafeAreaView';

function App() {
  const heigth = Dimensions.get('window').height;

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
