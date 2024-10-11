import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../CustomText';
import Brands1 from '../assets/brand1.jpeg';
import Brands2 from '../assets/brand2.jpeg';
import Brands3 from '../assets/brand3.jpeg';
import Brands4 from '../assets/brand4.jpeg';

const Brands = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <CustomText style={styles.title}>Brands of day</CustomText>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brands1} />
            <CustomText style={styles.brandTitle}>
              Min 20% off | Fossil, Titan Smart Watch & More
            </CustomText>
          </View>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brands2} />
            <CustomText style={styles.brandTitle}>
              Min 40% off | Fossil, Titan Smart Watch & More
            </CustomText>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brands3} />
            <CustomText style={styles.brandTitle}>
              Heels - Upto 50% OFF on Heeled Sandals, High Heel
            </CustomText>
          </View>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brands4} />
            <CustomText style={styles.brandTitle}>
              Sony 60W Bluetooth SoundBar Speaker Audio Engine
            </CustomText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
  innerContainer: {},
  title: {
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  brands: {
    width: '50%',
    padding: 10,
  },
  imgStyle: {
    height: 150,
    width: '100%',
    borderRadius: 10,
  },
  brandTitle: {
    fontSize: 12,
    marginTop: 4,
  },
});
