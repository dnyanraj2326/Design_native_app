import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Card from './src/components/Card';
import GraphImage from './src/components/GraphImage';
import Contains from './src/components/Contains';
import Buttons from './src/components/Buttons';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000000F0'}}>
      <StatusBar backgroundColor="#000000F0" />
      <View style={{paddingHorizontal: 20}}>
        <View style={{paddingVertical: 18}}>
          <Image
            source={require('./src/images/arrow.png')}
            style={{width: 20, height: 20}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <Image
              source={require('./src/images/btc.png')}
              style={{width: 33, height: 33}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 24,
                fontWeight: 'bold',
                paddingLeft: 10,
              }}>
              BTC/USDT
            </Text>
          </View>
          <View>
            <Image
              source={require('./src/images/star.png')}
              style={{width: 25, height: 25}}
            />
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal: 10}}>
        <Card />
        <View>
          <GraphImage />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingTop: 25,
          }}>
          <Contains color="#08D870" text="Buy" />
          <Contains color="#FF0458" text="Sell" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: 34,
          }}>
          <Buttons buttonColor="#08D870" text="BUY" />
          <Buttons buttonColor="#FF0458" text="SELL" />
        </View>
      </View>
    </View>
  );
};

export default App;
