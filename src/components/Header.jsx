import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CustomText from '../CustomText';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.container}
        colors={['#88DAE0', '#98E1D6', '#9EE4D4']}>
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <Ionicons name="search" size={22} color="#1f1f1f" />
            <TextInput
              placeholder="Search Amazon"
              placeholderTextColor={'#848484'}
              style={styles.textInput}
            />
          </View>
          <AntDesign name="scan1" size={22} color="#909594" />
        </View>
        <Feather name="mic" size={22} color="#000000" />
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#A1BCC0',
    borderWidth: 1,
    width: '90%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    padding: 8,
  },
});
