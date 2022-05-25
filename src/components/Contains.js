import {View, Text} from 'react-native';
import React from 'react';

const Contains = props => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View
        style={{
          width: 15,
          height: 15,
          backgroundColor: props.color,
          borderRadius: 7,
        }}></View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: '#fff',
          paddingLeft: 9,
        }}>
        {props.text}
      </Text>
    </View>
  );
};

export default Contains;
