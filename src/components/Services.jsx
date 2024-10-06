import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AmazonPay from '../assets/amazon-pay.png';
import SendMoney from '../assets/send-money.jpg';
import ScanQr from '../assets/scan-qr.jpeg';
import PayBills from '../assets/pay-bills.jpeg';
import ServicesCard from './ServicesCard';
import {RecentSearchData} from '../data/RecentSearchData';

const Services = () => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 20}}>
      <View style={styles.servicesContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={AmazonPay} style={styles.imgStyle} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={SendMoney} style={styles.imgStyle} />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={ScanQr} style={styles.imgStyle} />
            <Text style={styles.title}>Scan Qr</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={PayBills} style={styles.imgStyle} />
            <Text style={styles.title}>Pay Bills</Text>
          </View>
        </View>
      </View>
      {RecentSearchData.map(item => (
        <ServicesCard item={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    marginTop: -80,
    paddingHorizontal: 10,
  },
  servicesContainer: {
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    padding: 10,
    alignItems: 'center',
    paddingTop: 15,
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  title: {
    color: '#000000',
    fontSize: 10,
    marginTop: 2,
  },
});
