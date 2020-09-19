import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const Banner = (props) => {
  return (
    <TouchableOpacity style={styles.spaceImage}>
      <View style={styles.imageSize}>
        <Image source={props.img} style={styles.lockLogo} />
      </View>
    </TouchableOpacity>
  );
};

export default Banner;

const styles = StyleSheet.create({
  spaceImage: {marginRight: 16},
  textRestoran: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c1c1c',
    marginTop: 12,
  },
  imageSize: {width: 380, height: 75},
  lockLogo: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 8,
  },
});
