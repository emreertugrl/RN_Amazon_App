import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const SubHeader = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.container}
      colors={['#BBE8EF', '#BDEEE9', '#C3F1EC']}>
      <Feather name="map-pin" size={16} color="#000000" />
      <Text style={styles.deliver}>Deliver to Turkey - 234234</Text>
      <SimpleLineIcons name="arrow-down" color="#000000" size={10} />
    </LinearGradient>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliver: {
    fontSize: 13,
    color: '#2C4341',
    paddingHorizontal: 6,
  },
});
