import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SubHeader from './SubHeader';
import Category from './Category';

const HomeScreen = () => {
  return (
    <ScrollView>
      <Header />
      <SubHeader />
      <Category />
    </ScrollView>
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
