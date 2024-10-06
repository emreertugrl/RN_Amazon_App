import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import Services from '../components/Services';

const HomeScreen = () => {
  return (
    <ScrollView>
      <Header />
      <SubHeader />
      <Category />
      <Carousel />
      <Services />
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
