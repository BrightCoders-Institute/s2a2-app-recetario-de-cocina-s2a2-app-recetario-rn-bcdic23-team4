import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import comidas from '../assets/database/menu.ts';

const TestScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedFoodId = route.params?.selectedFoodId;
  const [isRecent, setIsRecent] = useState(true);
  const selectedFood = comidas.find(item => item.id === selectedFoodId);

  if (!selectedFood) {
    navigation.goBack();
    return null;
  }

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleChangeCategory = () => {
    setIsRecent(!isRecent);

    const updatedComidasList = comidas.map((item) => {
      if (item.id === selectedFoodId) {
        return { ...item, category: isRecent ? 'Trending' : 'Recent' };
      }
      return item;
    });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <View>
          <Text style={styles.TextButton}>X</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categoryButton} onPress={handleChangeCategory}>
        <View>
          <Text style={styles.TextButton}>-</Text>
        </View>
      </TouchableOpacity>

      <Image style={styles.img} source={selectedFood.image} />

      <View style={styles.titleContainer}>
        <Text style={styles.label}>{selectedFood.category}</Text>
        <Text style={styles.foodName}>{selectedFood.title}</Text>
      </View>

      <View style={styles.ingredientsContainer}>
        <Text style={{ color: '#FFF', fontSize: 20 }}>Ingredients</Text>
        <Text style={{ color: '#FFF', fontSize: 18 }}>for 3 servings</Text>
        <ScrollView style={{ padding: 15 }}>
          {selectedFood.ingredients.map((item, index) => (
            <View style={styles.ingredientsInnerContainer} key={index}>
              <Text style={styles.ingredientsText}>{item}</Text>
            </View>
          ))}
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
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  categoryButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  TextButton: {
    color: '#FFF',
    fontSize: 18,
  },
  img: {
    width: '100%',
    height: '50%',
  },
  titleContainer: {
    padding: 15,
  },
  label: {
    color: '#FFF',
    fontSize: 20,
  },
  foodName: {
    color: '#FFF',
    fontSize: 28,
  },
  ingredientsContainer: {
    padding: 15,
  },
  ingredientsInnerContainer: {
    marginBottom: 10,
  },
  ingredientsText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default TestScreen;
