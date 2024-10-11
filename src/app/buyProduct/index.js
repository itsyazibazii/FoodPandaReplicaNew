import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import CustomButton from '../../components/button';

const BuyProduct = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={item.image}
          style={{width: 420, height: 180, borderRadius: 10}}
        />
        <Text
          style={{
            fontSize: 24,
            color: 'black',
          }}>
          would you like to add {item.name} to your cart?
        </Text>
        <View style={{
            marginTop:100
        }}>
          <CustomButton
            buttonText="Add to Cart"
            buttonStyle={{backgroundColor: '#FF6F61'}}
            textStyle={{fontSize: 18}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BuyProduct;
