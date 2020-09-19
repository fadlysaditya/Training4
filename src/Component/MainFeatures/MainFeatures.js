import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Features from './Features';

class MainFeatures extends Component {
  render() {
    return (
      <View style={styles.menuFeature}>
        <View style={styles.featureBar1}>
          <Features
            text="Fashion"
            img={require('../../assets/img/ffffff&text=+ICON.png')}
          />
          <Features
            text="Elektronik"
            img={require('../../assets/img/ffffff&text=+ICON.png')}
          />
          <Features
            text="Hobi"
            img={require('../../assets/img/ffffff&text=+ICON.png')}
          />
          <Features
            text="Makanan & Minuman"
            img={require('../../assets/img/ffffff&text=+ICON.png')}
          />
        </View>
        <View style={styles.featureBar2}>
          <Features
            text="Hiburan"
            img={require('../../assets/img/ffffff&text=+ICON.png')}
          />
          <Features
            text="Otomotif"
            img={require('../../assets/img/ffffff&text=+ICON.png')}
          />
          <Features
            text="Komputer"
            img={require('../../assets/img/ffffff&text=+ICON.png')}
          />
          <Features
            text="Rumah Tangga"
            img={require('../../assets/img/ffffff&text=+ICON.png')}
          />
        </View>
      </View>
    );
  }
}

export default MainFeatures;

const styles = StyleSheet.create({
  menuFeature: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 18,
  },
  featureBar1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 18,
  },
  featureBar2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
});
