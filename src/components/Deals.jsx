import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RecomendProduct from '../assets/recommend.jpg';
import CustomText from '../CustomText';
const Deals = () => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Recommended deal for you</CustomText>
      <Image source={RecomendProduct} style={styles.imgStyle} />
      <View style={styles.bottomdSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offDealBtn}>
            <CustomText style={styles.offDeal}>%18 off</CustomText>
          </TouchableOpacity>
          <CustomText style={styles.deal}>Deal</CustomText>
        </View>
        <View style={styles.row}>
          <CustomText style={styles.discountPrice}>1.599 ₺</CustomText>
          <CustomText style={styles.actualPrice}>1.900 ₺</CustomText>
        </View>
        <CustomText style={styles.productName}>
          Nykaa Face Wask Gentle Skin Cleaner for all skin type
        </CustomText>
        <TouchableOpacity activeOpacity={0.7}>
          <CustomText style={styles.allDeals}>See all deals</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {marginTop: 20},
  imgStyle: {
    width: '100%',
    height: 250,
    marginVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 10,
  },
  bottomdSection: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offDealBtn: {
    backgroundColor: '#BE0201',
    width: 60,
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
  },
  offDeal: {
    fontSize: 12,
    color: '#ffffff',
  },
  deal: {
    color: '#BE0221',
    fontWeight: '600',
    marginLeft: 6,
    fontSize: 12,
  },
  discountPrice: {
    fontSize: 16,
    marginVertical: 5,
  },
  actualPrice: {
    fontSize: 11,
    marginLeft: 7,
    textDecorationLine: 'line-through',
    fontWeight: '500',
    color: 'gray',
  },
  productName: {
    fontSize: 14,
  },
  allDeals: {
    color: '#017185',
    marginVertical: 10,
    fontSize: 14,
  },
});
