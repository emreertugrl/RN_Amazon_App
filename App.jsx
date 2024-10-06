import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import CustomText from './src/CustomText';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#9EE4D4'} barStyle={'dark-content'} />
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    backgroundColor: 'white',
    color: 'black',
  },
  selam: {
    // color: 'red',
  },
});
