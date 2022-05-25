import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Buttons = props => {
  return (
    <View>
      <TouchableOpacity
        style={{
          paddingHorizontal: 50,
          paddingVertical: 12,
          backgroundColor: props.buttonColor,
          borderRadius: 30,
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
