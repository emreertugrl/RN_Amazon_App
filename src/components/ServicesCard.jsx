import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ServicesCard = ({item}) => {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.recentSearch}>{item.title}</Text>
      <Image source={item.image} style={styles.serviceImg} />
    </View>
  );
};

export default ServicesCard;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#FFF',
    marginLeft: 8,
    width: 140,
    padding: 5,
    borderRadius: 5,
  },
  serviceImg: {
    width: '100%',
    height: 130,
  },
  recentSearch: {
    fontSize: 13,
    marginBottom: 8,
    color: '#000000',
  },
});
