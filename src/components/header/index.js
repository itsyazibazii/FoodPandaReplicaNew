import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomHeader = ({title, onBackPress, backgroundColor = '#E21B70'}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: backgroundColor,
      }}>
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
          }}>
          <TouchableOpacity
            onPress={onBackPress}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
            {title}
          </Text>
        </View>
        <View style={{flex: 1}} />
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
