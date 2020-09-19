import React from 'react';
import {ScrollView, View} from 'react-native';
import {Searchbar} from '../Component';
import {
  Elektronik,
  Fashion,
  Hiburan,
  Hobi,
  Komputer,
  MakananMinuman,
  Otomotif,
  RumahTangga,
} from '../Component/PDP';

const PDP = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Searchbar />
      <ScrollView>
        <Elektronik navigation={navigation} />
        <Fashion navigation={navigation} />
        <Hiburan navigation={navigation} />
        <Hobi navigation={navigation} />
        <Komputer navigation={navigation} />
        <MakananMinuman navigation={navigation} />
        <Otomotif navigation={navigation} />
        <RumahTangga navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default PDP;
