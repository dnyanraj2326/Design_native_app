import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Card = () => {
  return (
    <View
      style={{
        backgroundColor: '#202020B3',
        borderRadius: 8,
        paddingLeft: 11,
        paddingVertical: 17,
        paddingRight: 17,
      }}>
      <View
        style={{
          paddingLeft: 17,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 25}}>
              3790.23
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: '#fff', fontSize: 15}}>H</Text>
            <Text
              style={{
                paddingLeft: 33,
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              3923.23
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#979797', fontSize: 15, fontWeight: '400'}}>
              26315.34CNY
            </Text>
            <Text
              style={{
                color: '#0090FF',
                fontSize: 15,
                fontWeight: '600',
                paddingLeft: 15,
              }}>
              +12.32%
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: '#fff', fontSize: 15}}>L</Text>
            <Text
              style={{
                paddingLeft: 33,
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              3803.65
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#fff', fontSize: 15}}>24H</Text>
            <Text
              style={{
                paddingLeft: 33,
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 15,
                textAlign: 'center',
              }}>
              23430
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 21,
        }}>
        <TouchableOpacity>
          <Text style={{color: '#A1A1A1', fontSize: 15}}>Line</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              color: '#0090FF',
              fontSize: 15,
              fontWeight: '600',
              borderBottomColor: '#0090FF',
              borderBottomWidth: 1,
            }}>
            15min
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: '#A1A1A1', fontSize: 15}}>1hour</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: '#A1A1A1', fontSize: 15}}>4hour</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: '#A1A1A1', fontSize: 15}}>1day</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: '#A1A1A1', fontSize: 15}}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
