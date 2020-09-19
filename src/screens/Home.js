import React from 'react';
import {Text, View, Button, ScrollView} from 'react-native';
import {
  Searchbar,
  SlotPromo,
  Gopay,
  MainFeatures,
  News,
  Product,
} from '../Component';

const Home = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Searchbar />
      <ScrollView>
      <SlotPromo />
      <Gopay />
      <MainFeatures />
      <News />
      <Product navigation={navigation} />
    </ScrollView>
    </View>
  );
};

export default Home;
