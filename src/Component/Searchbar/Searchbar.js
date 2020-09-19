import React from 'react';
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const Searchbar = () => {
  return (
    <View style={styles.Searchbar}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="What do you want to see?"
          style={styles.placeholder}
        />
        <Image
          source={require('../../assets/logo/search.png')}
          style={styles.PromoStyle}
        />
      </View>
      <TouchableOpacity style={styles.promoImage}>
        <Image source={require('../../assets/logo/promo.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  placeholder: {
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 25,
    height: 40,
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 20,
    backgroundColor: 'white',
    marginRight: 10,
  },
  PromoStyle: {
    position: 'absolute',
    top: 13 / 2,
    left: 14,
  },
  promoImage: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Searchbar: {
    marginHorizontal: 17,
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
  },
});
