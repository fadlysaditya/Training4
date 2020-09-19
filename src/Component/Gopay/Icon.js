import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const Icon = props => {
  return (
    <TouchableOpacity style={styles.menuPay}>
      <Image source={props.img} />
      <Text style={styles.textPay}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Icon;

const styles = StyleSheet.create({
  menuPay: {
    flex: 1,
    alignItems: 'center',
  },
  textPay: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 7,
  },
});
