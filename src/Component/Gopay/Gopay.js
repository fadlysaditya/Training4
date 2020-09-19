import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from './Icon';

class Gopay extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 7, marginTop: 8}}>
        <View style={styles.viewGopay}>
          <Image source={require('../../assets/logo/gopay.png')} />
          <Text style={styles.angkaGopay}>Rp 5.000.000</Text>
        </View>
      </View>
    );
  }
}

export default Gopay;

const styles = StyleSheet.create({
  viewGopay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2c5fb8',
    borderRadius: 4,
    padding: 14,
  },
  angkaGopay: {fontSize: 17, fontWeight: 'bold', color: 'white'},
  menuGopay: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 14,
    backgroundColor: '#2f65bd',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
});
