import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const Features = props => {
  return (
    <TouchableOpacity style={{width: '25%', alignItems: 'center'}}>
      <View style={styles.viewFeature}>
        <Image source={props.img} />
      </View>
      <Text style={styles.textFeature}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Features;

const styles = StyleSheet.create({
  textFeature: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
  },
  viewFeature: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderColor: '#fefefe',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
