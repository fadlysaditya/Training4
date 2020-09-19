import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import poto from '../../assets/img/ffffff&text=+PRODUCT.png';

const Hiburan = ({navigation}) => {
  return (
    <View>
      <View style={styles.pemisah} />
      <Text style={styles.textComplete}>Hiburan</Text>
      <ScrollView horizontal>
      <View style={styles.listWrapper}>
        <Image
          source={poto}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Product
        </Text>
        <Text style={styles.TextHarga}>Rp. 25,000,000,-</Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginVertical: 8}}>
          Location
        </Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('Detail')}
            style={styles.BuyWrapper}>
          <Text style={styles.Textbuywrapper}>Beli</Text>
        </TouchableOpacity>
      </View>
      {/* pemisah */}
      <View style={styles.listWrapper}>
        <Image
          source={poto}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Product
        </Text>
        <Text style={styles.TextHarga}>Rp. 25,000,000,-</Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginVertical: 8}}>
          Location
        </Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('Detail')}
            style={styles.BuyWrapper}>
          <Text style={styles.Textbuywrapper}>Beli</Text>
        </TouchableOpacity>
      </View>
      {/* pemisah */}
      <View style={styles.listWrapper}>
        <Image
          source={poto}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Product
        </Text>
        <Text style={styles.TextHarga}>Rp. 25,000,000,-</Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginVertical: 8}}>
          Location
        </Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('Detail')}
            style={styles.BuyWrapper}>
          <Text style={styles.Textbuywrapper}>Beli</Text>
        </TouchableOpacity>
      </View>
      {/* pemisah */}
      <View style={styles.listWrapper}>
        <Image
          source={poto}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Product
        </Text>
        <Text style={styles.TextHarga}>Rp. 25,000,000,-</Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginVertical: 8}}>
          Location
        </Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('Detail')}
            style={styles.BuyWrapper}>
          <Text style={styles.Textbuywrapper}>Beli</Text>
        </TouchableOpacity>
      </View>
      {/* pemisah */}
      <View style={styles.listWrapper}>
        <Image
          source={poto}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Product
        </Text>
        <Text style={styles.TextHarga}>Rp. 25,000,000,-</Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginVertical: 8}}>
          Location
        </Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('Detail')}
            style={styles.BuyWrapper}>
          <Text style={styles.Textbuywrapper}>Beli</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

export default Hiburan;

const styles = StyleSheet.create({
  warper: {
    width: 100,
    height: 100,
    backgroundColor: '#0abde3',
    borderWidth: 2,
    borderColor: '#5f27cd',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  textComplete: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1c1c1c',
    marginBottom: 20,
    marginLeft: 7,
  },
  pemisah: {height: 17, backgroundColor: '#f2f2f4', marginTop: 5},
  listWrapper: {
    marginLeft: 7,
    padding: 12,
    backgroundColor: 'grey',
    width: 212,
    borderRadius: 8,
  },
  TextHarga: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#f2994a',
  },
  BuyWrapper: {
    backgroundColor: '#6fcf97',
    borderRadius: 25,
    paddingVertical: 6,
  },
  Textbuywrapper: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 20,
    marginTop: 40,
  },
});
