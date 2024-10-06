import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Categories} from '../data/Categories';

const Category = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {Categories.map(item => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={item.id}
          style={styles.category}>
          <Image style={styles.imgStyle} source={item.image} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  category: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  imgStyle: {
    width: 50,
    height: 50,
  },
  title: {
    color: '#2C4341',
  },
});
