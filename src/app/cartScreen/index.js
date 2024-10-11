import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../components/button';
import CustomHeader from '../../components/header/index'; 
import {useNavigation} from '@react-navigation/native';

const CartScreen = ({route}) => {
  const {selectedItems} = route.params || {selectedItems: []};
  const navigation = useNavigation();

  const totalPrice = selectedItems.reduce((total, item) => {
    const price = parseInt(item.price.replace('Rs', '').trim());
    return total + price;
  }, 0);

  const deliveryFee = 50;
  const subtotal = totalPrice;
  const grandTotal = subtotal + deliveryFee;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <CustomHeader 
        title="Your Cart"
        onBackPress={() => navigation.goBack()}
        backgroundColor="#E21B70"
      />

      <ScrollView style={{flex: 1, marginHorizontal: 10}}>
        {selectedItems.length > 0 ? (
          <>
            {selectedItems.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: 'lightgray',
                  paddingBottom: 10,
                }}>
                <View style={{position: 'relative', marginRight: 15}}>
                  <Image
                    source={item.image}
                    style={{width: 80, height: 80, borderRadius: 10}}
                  />
                  <TouchableOpacity
                    onPress={() => console.log('Icon pressed')}
                    style={{
                      position: 'absolute',
                      bottom: 10,
                      right: 10,
                      backgroundColor: 'white',
                      borderRadius: 20,
                      padding: 5,
                      borderWidth: 1,
                      borderColor: 'gray',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon name="add" size={18} color="black" />
                  </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                    {item.name}
                  </Text>
                  <Text style={{fontSize: 16, color: 'gray'}}>
                    {item.description}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#E21B70',
                    }}>
                    {item.price}
                  </Text>
                </View>
              </View>
            ))}
          </>
        ) : (
          <Text
            style={{
              fontSize: 18,
              color: 'gray',
              textAlign: 'center',
              marginTop: 20,
            }}>
            Your cart is empty.
          </Text>
        )}
      </ScrollView>
      <View
        style={{
          backgroundColor: 'white',
          padding: 15,
          borderTopWidth: 1,
          borderTopColor: 'lightgray',
        }}>
        <View
          style={{
            marginBottom: 20,
          }}>
          <CustomButton
            buttonText="Checkout"
            onPress={() => navigation.navigate('CheckOutScreen', { selectedItems })}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Subtotal
          </Text>
          <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>
            Rs {subtotal}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text style={{color: 'black'}}>Delivery Fee</Text>
          <Text style={{color: '#E21B70'}}>Rs {deliveryFee}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Total
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#E21B70'}}>
            Rs {grandTotal}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
