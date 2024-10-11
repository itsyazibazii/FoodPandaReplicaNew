import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FrontPage from './src/app/frontPage';
import DetailsScreen from './src/app/details';
import BuyProduct from './src/app/buyProduct';
import CartScreen from './src/app/cartScreen';
import CheckOutScreen from './src/app/checkout';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FrontPage">
        <Stack.Screen
          name="FrontPage"
          component={FrontPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BuyProduct"
          component={BuyProduct}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="CheckOutScreen"
          component={CheckOutScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
