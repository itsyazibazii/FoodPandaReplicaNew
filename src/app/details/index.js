import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import image1 from '../../assets/images/cal_image.png';

const restaurantFoodItems = {
  'Pizza Hut': [
    {
      name: 'Pepperoni Pizza',
      description: 'Cheesy pizza with pepperoni slices.',
      price: 'Rs 600',
      image: image1,
    },
    {
      name: 'Vegetarian Pizza',
      description: 'Pizza topped with fresh vegetables and cheese.',
      price: 'Rs 550',
      image: image1,
    },
    {
      name: 'BBQ Chicken Pizza',
      description: 'Pizza with BBQ chicken and onions.',
      price: 'Rs 650',
      image: image1,
    },
    {
      name: 'Hawaiian Pizza',
      description: 'Pizza with ham and pineapple.',
      price: 'Rs 600',
      image: image1,
    },
    {
      name: 'Meat Lovers Pizza',
      description: 'Loaded with various meats and cheese.',
      price: 'Rs 700',
      image: image1,
    },
    {
      name: 'Cheese Pizza',
      description: 'Simple pizza with a blend of cheeses.',
      price: 'Rs 500',
      image: image1,
    },
    {
      name: 'Chicken Alfredo Pizza',
      description: 'Pizza with creamy Alfredo sauce and chicken.',
      price: 'Rs 650',
      image: image1,
    },
    {
      name: 'Margarita Pizza',
      description: 'Classic pizza with fresh basil and tomatoes.',
      price: 'Rs 550',
      image: image1,
    },
    {
      name: 'Buffalo Chicken Pizza',
      description: 'Spicy pizza with buffalo chicken and ranch.',
      price: 'Rs 650',
      image: image1,
    },
  ],
  Dominos: [
    {
      name: 'Cheese Burst Pizza',
      description: 'Pizza with a cheesy crust and generous toppings.',
      price: 'Rs 650',
      image: image1,
    },
    {
      name: 'Chicken Sausage Pizza',
      description: 'Pizza topped with chicken sausage and vegetables.',
      price: 'Rs 600',
      image: image1,
    },
    {
      name: 'Vegetable Supreme Pizza',
      description: 'Loaded with vegetables and cheese.',
      price: 'Rs 600',
      image: image1,
    },
    {
      name: 'Pepperoni Pizza',
      description: 'Classic pizza with pepperoni slices.',
      price: 'Rs 650',
      image: image1,
    },
    {
      name: 'BBQ Chicken Pizza',
      description: 'Pizza with BBQ chicken and onions.',
      price: 'Rs 650',
      image: image1,
    },
    {
      name: 'Deluxe Pizza',
      description: 'Pizza with a mix of meats and vegetables.',
      price: 'Rs 700',
      image: image1,
    },
    {
      name: 'Hawaiian Pizza',
      description: 'Pizza with ham and pineapple.',
      price: 'Rs 600',
      image: image1,
    },
    {
      name: 'Chicken Tikka Pizza',
      description: 'Pizza with spicy chicken tikka pieces.',
      price: 'Rs 650',
      image: image1,
    },
    {
      name: 'Four Cheese Pizza',
      description: 'Pizza with a blend of four cheeses.',
      price: 'Rs 600',
      image: image1,
    },
  ],
  KFC: [
    {
      name: 'Chicken Meal',
      description: 'Crispy fried chicken with fries and a drink.',
      price: 'Rs 350',
      image: image1,
    },
    {
      name: 'Zinger Burger',
      description: 'Spicy chicken burger with lettuce and mayo.',
      price: 'Rs 300',
      image: image1,
    },
    {
      name: 'Hot Wings',
      description: 'Spicy chicken wings served with ranch.',
      price: 'Rs 300',
      image: image1,
    },
    {
      name: 'Chicken Tenders',
      description: 'Crispy chicken tenders with dipping sauce.',
      price: 'Rs 350',
      image: image1,
    },
    {
      name: 'Popcorn Chicken',
      description: 'Bite-sized crispy chicken pieces.',
      price: 'Rs 250',
      image: image1,
    },
    {
      name: 'Chicken Wrap',
      description: 'Wrap with fried chicken, lettuce, and sauce.',
      price: 'Rs 300',
      image: image1,
    },
    {
      name: 'Bucket of Chicken',
      description: 'A bucket of assorted fried chicken pieces.',
      price: 'Rs 700',
      image: image1,
    },
    {
      name: 'KFC Fries',
      description: 'Crispy and seasoned fries.',
      price: 'Rs 150',
      image: image1,
    },
    {
      name: 'Mashed Potatoes',
      description: 'Creamy mashed potatoes with gravy.',
      price: 'Rs 200',
      image: image1,
    },
  ],
  McDonalds: [
    {
      name: 'Big Mac',
      description:
        'Classic burger with special sauce, lettuce, cheese, pickles, and onions.',
      price: 'Rs 400',
      image: image1,
    },
    {
      name: 'McNuggets',
      description:
        'Crispy chicken nuggets served with your choice of dipping sauce.',
      price: 'Rs 250',
      image: image1,
    },
    {
      name: 'Quarter Pounder',
      description: 'Juicy burger with a quarter-pound beef patty.',
      price: 'Rs 450',
      image: image1,
    },
    {
      name: 'Cheeseburger',
      description: 'Simple burger with cheese, pickles, and onions.',
      price: 'Rs 350',
      image: image1,
    },
    {
      name: 'Fillet-O-Fish',
      description: 'Breaded fish fillet with tartar sauce.',
      price: 'Rs 400',
      image: image1,
    },
    {
      name: 'McChicken',
      description: 'Crispy chicken sandwich with lettuce and mayo.',
      price: 'Rs 350',
      image: image1,
    },
    {
      name: 'Fries',
      description: 'Golden crispy fries.',
      price: 'Rs 200',
      image: image1,
    },
    {
      name: 'McFlurry',
      description:
        'Creamy vanilla soft serve with your choice of mix-ins like Oreo or M&Ms.',
      price: 'Rs 300',
      image: image1,
    },
    {
      name: 'Apple Pie',
      description: 'Warm apple pie with a flaky crust.',
      price: 'Rs 150',
      image: image1,
    },
  ],
};

const DetailsScreen = ({route, navigation}) => {
  const {item} = route.params;
  const [selectedItems, setSelectedItems] = useState([]);
  const foodItems = restaurantFoodItems[item.name] || [];

  const handleAddToCart = foodItem => {
    setSelectedItems([...selectedItems, foodItem]);
  };

  const navigateToCart = () => {
    if (selectedItems <= 0) {
      Alert.alert('Select atleast one item!');
    } else {
      navigation.navigate('CartScreen', {selectedItems});
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{margin: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={() =>
              //    navigation.navigate('CartScreen', {selectedItems})
              // }
              onPress={navigateToCart}>
              <Icon name="cart" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: 'black',
              fontSize: 22,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginVertical: 10,
            }}>
            {item.name}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text style={{fontSize: 12, color: 'gray'}}>4.2km away</Text>
            <Text style={{fontSize: 12, color: '#3C4142', fontWeight: 'bold'}}>
              More info
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="star-outline" size={15} color="black" />
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginLeft: 6,
                }}>
                4.9
              </Text>
              <Text style={{fontSize: 12, color: 'gray', marginLeft: 3}}>
                +2000 ratings
              </Text>
            </View>
            <Text style={{fontSize: 12, color: '#3C4142', fontWeight: 'bold'}}>
              See reviews
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 12,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="time" size={15} color="black" />
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginLeft: 6,
                }}>
                Pick-up: 6 min
              </Text>
            </View>
            <Text style={{fontSize: 12, color: 'gray', fontWeight: 'bold'}}>
              Change
            </Text>
          </View>

          <Text
            style={{
              color: 'black',
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Foods
          </Text>

          {foodItems.map((food, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                marginVertical: 5,
                alignItems: 'center',
                paddingVertical: 10,
                borderBottomColor: 'gray',
                borderBottomWidth: 0.4,
              }}>
              <View style={{flex: 1}}>
                <Text
                  style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
                  {food.name}
                </Text>
                <Text style={{color: 'gray', fontSize: 14, marginVertical: 5}}>
                  {food.description}
                </Text>
                <Text
                  style={{color: '#E21B70', fontSize: 16, fontWeight: 'bold'}}>
                  {food.price}
                </Text>
              </View>

              <View style={{position: 'relative', marginLeft: 15}}>
                <Image
                  source={food.image}
                  style={{width: 120, height: 120, borderRadius: 10}}
                />
                <TouchableOpacity
                  onPress={() => handleAddToCart(food)}
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
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
