import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {CarouselData} from '../data/CarouselData';

const Carousel = () => {
  return (
    <View style={styles.carouselContainer}>
      <Swiper
        style={styles.wrapper}
        showsPagination={false}
        showsButtons={false}
        autoplay={true}>
        {CarouselData.map((item, i) => (
          <View>
            <Image style={styles.imgStyle} source={item.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    position: 'relative',
  },
  wrapper: {
    height: 300,
  },
  imgStyle: {
    height: 250,
    width: '100%',
  },
  buttonWrapper: {},
});
