import React, {Component} from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import Banner from './Banner';

class Promo extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', marginLeft: 5}}>
        <ScrollView horizontal>
          <Banner img={require('../../assets/img/ffffff&text=+YOUR+ADS.png')} />
          <Banner img={require('../../assets/img/ffffff&text=+YOUR+ADS.png')} />
          <Banner img={require('../../assets/img/ffffff&text=+YOUR+ADS.png')} />
          <Banner img={require('../../assets/img/ffffff&text=+YOUR+ADS.png')} />
          <Banner img={require('../../assets/img/ffffff&text=+YOUR+ADS.png')} />
        </ScrollView>
      </View>
    );
  }
}

export default Promo;


