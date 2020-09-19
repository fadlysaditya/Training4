import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import kart from '../../assets/img/Kart.png';

const Kart = () => {
  return (
    <>
      <View style={styles.cartWrapper}>
        <Image source={kart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {padding: 100, alignItems: 'center'},
  cartWrapper: {
    borderWidth: 1,
    borderColor: 'white',
    width: 35,
    height: 35,
    borderRadius: 65 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notif: {
    fontSize: 10,
    color: 'white',
    backgroundColor: 'red',
    padding: 4,
    borderRadius: 25,
    width: 20,
    height: 20,
    position: 'absolute',
    top: -10,
    right: -10,
  },
  iconCart: {width: 25, height: 25},
  text: {fontSize: 15, color: '#777777', fontWeight: '700', marginTop: 8},
});

export default Kart;
