import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const News = () => {
  return (
    <View>
      {/* Pemisah */}
      <View style={styles.pemisah} />
      {/* News 1 */}
      <View style={styles.pemisahNews}>
        <View style={{position: 'relative'}}>
          <Image
            source={require('../../assets/img/sepak-bola.jpg')}
            style={styles.imageStyle}
          />
          <View style={styles.opacityImage} />
          <View style={styles.logoStyle}>
            <Image
              source={require('../../assets/logo/gopay-blue-white.png')}
              style={styles.lockLogo}
            />
          </View>
        </View>
        <View style={styles.pemisahTitle}>
          <Text style={styles.textTitle}>BREAKING NEWS</Text>
          <Text style={styles.textIsi}>
            Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan Brunei
          </Text>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textButton}>READ</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Information Section */}
      <View style={styles.pemisahNews}>
        <Text style={styles.textComplete}>Complete your profile</Text>
        <View style={{flexDirection: 'row', marginBottom: 16}}>
          <View>
            <Image
              source={require('../../assets/img/facebook-connect.png')}
            />
          </View>
          <View style={{marginLeft: 16, flex: 1}}>
            <Text style={styles.textConnect}>Connect with facebook</Text>
            <Text style={styles.textLogin}>
              Login faster without verification code
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textButton}>CONNECT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pemisahTitle} />
      {/* news 2 */}
      <View style={styles.pemisahNews}>
        <View style={{position: 'relative'}}>
          <Image
            source={require('../../assets/img/food-banner.jpg')}
            style={styles.imageStyle}
          />
          <View style={styles.opacityImage} />
          <View style={styles.logoStyle}>
            <Image
              source={require('../../assets/logo/gopay-blue-white.png')}
              style={styles.lockLogo}
            />
          </View>
          <View style={styles.bannerButton}>
            <View>
              <Text style={styles.bannerText1}>Free QRAVED Voucher</Text>
              <Text style={styles.BannerText2}>
                Quick, Before they run out!
              </Text>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.textButton}>Get Voucher</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.pemisahTitle} />
      </View>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  pemisah: {height: 17, backgroundColor: '#f2f2f4', marginTop: 20},
  pemisahNews: {paddingTop: 16, paddingHorizontal: 16},
  pemisahTitle: {
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomColor: '#e8e9ed',
    borderBottomWidth: 1,
  },
  imageStyle: {height: 170, width: '100%', borderRadius: 6},
  logoStyle: {height: 15, width: 55, position: 'absolute', top: 16, left: 16},
  logoStyle2: {height: 15, width: 55, marginLeft: -2},
  lockLogo: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
  opacityImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.3,
    borderRadius: 6,
  },
  textTitle: {fontSize: 17, fontWeight: 'bold', color: '#1c1c1c'},
  textIsi: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7a7a7a',
    marginBottom: 11,
  },
  buttonStyle: {
    backgroundColor: '#61a756',
    paddingHorizontal: 11,
    paddingVertical: 10,
    alignSelf: 'flex-end',
    borderRadius: 4,
  },
  textButton: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  bannerButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  bannerText1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  BannerText2: {
    fontSize: 12,
    fontWeight: '400',
    color: 'white',
    marginBottom: 10,
  },
  textComplete: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1c1c1c',
    marginTop: 15,
    marginBottom: 20,
  },
  textLogin: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#4a4a4a',
    width: '70%',
  },
  textConnect: {fontSize: 15, fontWeight: 'bold', color: '#4a4a4a'},
});
