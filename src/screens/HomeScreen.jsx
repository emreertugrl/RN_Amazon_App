import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <View>
      <Header />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    backgroundColor: 'white',
  },
});
