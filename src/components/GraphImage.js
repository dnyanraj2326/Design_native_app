import {View, Image} from 'react-native';
import React from 'react';

const GraphImage = () => {
  return (
    <View style={{paddingTop: 8}}>
      <Image
        source={require('../images/graph2.jpg')}
        style={{width: 372, height: 380}}
      />
    </View>
  );
};

export default GraphImage;
