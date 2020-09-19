import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import poto from '../assets/img/ffffff&text=+PRODUCT.png';
import kart from '../assets/img/Kart.png';

const Detail = () => {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.listWrapper}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={poto}
          style={{width: 330, height: 200, borderRadius: 8}}
        />
      </View>
      <View style={{marginLeft: 13}}>
        <Text style={styles.TextHarga}>Rp. 25,000,000,-</Text>
        <View style={{flexDirection: 'row', marginRight: 8}}>
         <View style={{marginRight: 8}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 8}}>
          Product
        </Text>
        <Text style={{fontSize: 18, fontWeight: '300', marginVertical: 8}}>
          Location
        </Text>
        </View>
        <Text style={{fontSize: 18, fontWeight: '300', marginVertical: 8}}> keterangan </Text> 
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', }}>
         <TouchableOpacity onPress={() => setNumber(number + 1)} style={styles.BuyWrapper}>
        <Text style={styles.Textbuywrapper}>Tambah ke Keranjang</Text>
      </TouchableOpacity>
      <View style={styles.cartWrapper}>
        <Image source={kart} style={styles.iconCart} />
  <Text style={styles.notif}>{number}</Text>
      </View>
      <TouchableOpacity onPress={() => setNumber(number - 1)} style={styles.BuyWrapper}>
        <Text style={styles.Textbuywrapper}>Tambah ke Keranjang</Text>
      </TouchableOpacity>
      </View>
     
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    marginHorizontal: 7,
    marginTop: 7,
    padding: 12,
    backgroundColor: 'grey',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  TextHarga: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#f2994a',
  },
  BuyWrapper: {
    backgroundColor: '#6fcf97',
    borderRadius: 25,
    paddingVertical: 6,
    marginHorizontal: 13,
    width:120,
  },
  Textbuywrapper: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
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
