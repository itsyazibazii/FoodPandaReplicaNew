import React, { useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Platform, PermissionsAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CustomHeader from '../../components/header';
import CustomButton from '../../components/button';

const CheckOutScreen = ({ route, navigation }) => {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const mapRef = useRef(null);
  const { selectedItems } = route.params || { selectedItems: [] };

  const totalPrice = selectedItems.reduce((total, item) => 
    total + parseInt(item.price.replace('Rs', '').trim()), 0);
  const deliveryFee = 50;
  const subtotal = totalPrice;
  const grandTotal = subtotal + deliveryFee;

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message: 'We need access to your location to show it on the map.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          setHasLocationPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
        } catch (err) {
          console.warn(err);
        }
      } else {
        setHasLocationPermission(true);
      }
    };

    requestLocationPermission();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <CustomHeader title="CheckOut" onBackPress={() => navigation.goBack()} />

        <View style={{ flex: 1, marginHorizontal: 16 }}>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>
              Confirm Payment Method
            </Text>
          </View>
                                      
          <View style={{ marginTop: 20, paddingVertical: 10, backgroundColor: '#fff', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Payment Method</Text>
              <Text style={{ textDecorationLine: 'underline', textDecorationColor: 'gray', color: 'gray', fontSize: 12, marginLeft: 170 }}>Change</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Cash</Text>
              <Text style={{ textDecorationColor: 'gray', color: 'gray', fontSize: 14, marginLeft: 280 }}>Rs.730</Text>
            </View>
          </View>

          <View style={{ height: 200, marginTop: 20 }}>
            <MapView
              style={{ flex: 1 }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              showsUserLocation={hasLocationPermission}
              ref={mapRef}
            >
              <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
            </MapView>
          </View>

          <View style={{ marginTop: 20, paddingVertical: 10, backgroundColor: '#fff', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 5 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Order Summary</Text>
            {selectedItems.map((item, index) => (
              <View key={index} style={{ paddingVertical: 10, marginHorizontal: 12,flexDirection:'row' }}>
                <Text style={{ fontSize: 16, color: '#E21B70' }}>1x </Text>
                <Text style={{ fontSize:16, color:'black'}}>{item.name}</Text>
              </View>
            ))}
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Subtotal</Text>
            <Text style={{ fontSize: 20, fontWeight: '500', color: 'black' }}>Rs {subtotal}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <Text style={{ color: 'black' }}>Delivery Fee</Text>
            <Text style={{ color: '#E21B70' }}>Rs {deliveryFee}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Total</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#E21B70' }}>Rs {grandTotal}</Text>
          </View>

          <View style={{ alignItems: 'center', marginVertical: 20 }}>
            <CustomButton 
              buttonText="Checkout"
              onPress={() => console.log('Checkout pressed')}
              buttonStyle={{ backgroundColor: '#E21B70' }}
              textStyle={{ color: 'white', fontSize: 18 }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckOutScreen;
