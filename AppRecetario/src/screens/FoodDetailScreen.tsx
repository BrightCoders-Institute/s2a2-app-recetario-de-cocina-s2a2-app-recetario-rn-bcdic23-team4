import React from 'react';
import { Image, Text, View, ScrollView, StyleSheet } from 'react-native';

const FoodDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/images/pizza.jpg')} />
      <View style={styles.imgcontainer} />
      <View style={styles.titleContainer}>
        <Text style={styles.label}>TRENDING</Text>
        <Text style={styles.foodName}>Peperoni Pizza</Text>
      </View>
      <View style={styles.ingredientsContainer}>
        <Text style={{ color: '#FFF', fontSize: 20 }}>Ingredients</Text>
        <Text style={{ color: '#FFF', fontSize: 18 }}>for 3 servings</Text>
        <ScrollView>
          <Text>Peperoni</Text>
          <Text>Tomatoe sauce</Text>
          <Text>Powder</Text>
          <Text>Yeast</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
  },
  img: {
    width: '100%',
    height: '50%',
  },
  imgcontainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(40,40,40,0.6)',
  },
  label: {
    color: '#FFF',
    fontSize: 20,
  },
  foodName: {
    color: '#FFF',
    fontSize: 28,
  },
  titleContainer: {
    padding: 15,
    marginTop: -100,
  },
  ingredientsContainer: {
    padding: 15,
  },
});

export default FoodDetailScreen;

