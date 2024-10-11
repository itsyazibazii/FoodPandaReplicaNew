import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import pizzahut from '../../assets/images/pizzahut.png';
import dominos from '../../assets/images/dominos.png';
import KFC from '../../assets/images/KFC.png';
import mcdonalds from '../../assets/images/Mcdonalds.png';
import cheese from '../../assets/images/cheese.png';
import dessert from '../../assets/images/dessert.png';

const FrontPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigation = useNavigation();

  const restaurants = [
    {
      id: 'restaurant1',
      name: 'Sinan Hut',
      image: pizzahut,
      details: '4.5 stars • 20-30 mins',
      category: 'Pizza',
    },
    {
      id: 'restaurant2',
      name: 'Dominos',
      image: dominos,
      details: '4.6 stars • 15-25 mins',
      category: 'Pizza',
    },
    {
      id: 'restaurant3',
      name: 'KFC',
      image: KFC,
      details: '4.4 stars • 25-35 mins',
      category: 'Burgers',
    },
    {
      id: 'restaurant4',
      name: 'McDonalds',
      image: mcdonalds,
      details: '4.3 stars • 10-20 mins',
      category: 'Burgers',
    },
    {
      id: 'restaurant5',
      name: 'The Cheesecake Factory',
      image: cheese,
      details: '4.8 stars • 10-15 mins',
      category: 'Desserts',
    },
    {
      id: 'restaurant6',
      name: 'Dessert House',
      image: dessert,
      details: '4.7 stars • 15-20 mins',
      category: 'Desserts',
    },
  ];

  const categories = [
    {name: 'All', icon: 'apps-outline'},
    {name: 'Pizza', icon: 'pizza-outline'},
    {name: 'Burgers', icon: 'fast-food-outline'},
    {name: 'Desserts', icon: 'ice-cream-outline'},
  ];

  const ListHeader = () => (
    <View>
      <View
        style={{
          padding: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          backgroundColor: '#E21B70',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
          }}>
          <Icon
            name="location-outline"
            size={24}
            color="white"
            style={{marginRight: 10}}
          />
          <View>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
              Home
            </Text>
            <Text style={{fontSize: 13, color: 'white', fontWeight: '300'}}>
              123 Main Soldier Bazar 3, Karachi
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 25,
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}>
          <Icon name="search-outline" size={20} color="gray" />
          <TextInput
            style={{
              flex: 1,
              height: 45,
              paddingHorizontal: 10,
              color: 'black',
              borderRadius: 25,
              fontSize: 14,
            }}
            placeholder="Search for shops & restaurants"
            placeholderTextColor="gray"
          />
        </View>
      </View>
      <ScrollView
        horizontal
        style={{marginVertical: 15, paddingHorizontal: 10}}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedCategory(category.name)}
            style={{
              backgroundColor:
                selectedCategory === category.name ? '#E21B70' : '#f0f0f0',
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 20,
              marginRight: 10,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon
              name={category.icon}
              size={20}
              color={selectedCategory === category.name ? 'white' : '#E21B70'}
            />
            <Text
              style={{
                fontSize: 14,
                color: selectedCategory === category.name ? 'white' : 'black',
                marginLeft: 10,
              }}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View
        style={{
          backgroundColor: '#f5f5f5',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            marginHorizontal: 10,
            padding: 15,
            borderRadius: 15,
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 3,
          }}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 19, fontWeight: 'bold', color: '#333'}}>
              Food Delivery!
            </Text>
            <Text style={{fontSize: 12, color: 'gray', marginTop: 5}}>
              Order from your favourite restaurants and home chefs.
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#f9f9f9',
              width: 80,
              height: 80,
              borderRadius: 15,
              marginLeft: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="fast-food-outline" size={40} color="#E21B70" />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          {['Shops', 'Deals', 'Restaurants'].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: '#ffffff',
                padding: 15,
                borderRadius: 15,
                flex: 1,
                marginRight: 10,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.2,
                shadowRadius: 5,
                elevation: 3,
              }}>
              <Icon
                name={
                  item === 'Shops'
                    ? 'storefront-outline'
                    : item === 'Deals'
                    ? 'tag-outline'
                    : 'restaurant-outline'
                }
                size={24}
                color="#E21B70"
              />
              <Text style={{fontSize: 14, color: '#333', marginTop: 5}}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );

  const Card = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailsScreen', {item})}
      style={{
        margin: 15,
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
      }}>
      <Image
        source={item.image}
        style={{width: '100%', height: 180, resizeMode: 'cover'}}
      />
      <View style={{padding: 15}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#333'}}>
          {item.name}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Icon name="star" size={16} color="gold" />
            <Text style={{fontSize: 14, color: 'gray', marginLeft: 5}}>
              {item.details.split(' • ')[0]}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: 'pink',
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            {item.details.split(' • ')[1]}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const filteredRestaurants =
    selectedCategory === 'All'
      ? restaurants
      : restaurants.filter(
          restaurant => restaurant.category === selectedCategory,
        );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <FlatList
        ListHeaderComponent={<ListHeader />}
        data={filteredRestaurants}
        renderItem={({item}) => <Card item={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </SafeAreaView>
  );
};

export default FrontPage;
