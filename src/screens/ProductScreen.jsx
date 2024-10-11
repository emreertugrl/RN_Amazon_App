import {ScrollView, StyleSheet, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import CustomText from '../CustomText';
import PrimeLogo from '../assets/prime-logo.png';
import {ProductData} from '../data/ProductData';
import {getRating} from './../utils/helpers';

const ProductScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <CustomText style={styles.title}>Results</CustomText>
        <CustomText style={styles.tagLine}>
          Price and other details may vary based aside on product aside and
          colour
        </CustomText>

        {ProductData.map(item => (
          <View key={item.id} style={styles.productSection}>
            <View style={styles.productImgSection}>
              <Image style={styles.productImg} source={item.image} />
            </View>
            <View style={styles.productDetailSection}>
              <CustomText style={styles.sponsored}>Sponsored</CustomText>
              <CustomText style={styles.productName}>
                {item.productName}
              </CustomText>
              <View style={styles.row}>
                <CustomText style={styles.rating}>{item.rating}</CustomText>
                {getRating(item.rating)}
                <CustomText style={styles.ratingCount}>
                  {item.ratingCount}
                </CustomText>
              </View>
              <View style={styles.row}>
                <CustomText style={styles.price}>{item.price} ₺</CustomText>
                <CustomText style={styles.croosOut}>
                  {item.crossOutText} ₺
                </CustomText>
              </View>
              <CustomText style={styles.cashback}>
                Up to 5% cashback with Amazon Pay Credit Card
              </CustomText>
              <Image style={styles.primeLogo} source={PrimeLogo} />
              <CustomText style={styles.cashback}>
                FREE Delivery by {item.deliveryBy}
              </CustomText>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tagLine: {
    fontSize: 11,
    color: 'grey',
    lineHeight: 20,
  },
  productSection: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    flexDirection: 'row',
    marginVertical: 15,
  },
  productImgSection: {
    width: '40%',
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
  },
  productImg: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  productDetailSection: {
    width: '60%',
    padding: 10,
  },
  sponsored: {
    fontSize: 13,
    color: '#FFA41C',
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 12,
    lineHeight: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 10,
    color: '#017185',
    marginRight: 5,
  },
  ratingCount: {
    fontSize: 10,
    color: '#017185',
  },
  price: {
    fontSize: 16,
    marginRight: 5,
  },
  croosOut: {
    fontSize: 11,
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  cashback: {
    fontSize: 9,
    marginVertical: 3,
  },
  primeLogo: {
    height: 16,
    width: 42,
    marginVertical: 3,
  },
});
