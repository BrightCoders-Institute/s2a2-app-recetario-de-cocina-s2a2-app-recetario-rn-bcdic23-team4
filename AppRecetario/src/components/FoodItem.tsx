import React from 'react';
import {View, Text, StyleSheet, ImageSourcePropType, Image} from 'react-native';

interface FoodItemProps {
  image?: ImageSourcePropType;
  title?: string;
}

const FoodItem: React.FC<FoodItemProps> = ({ image, title }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 15,
  },
  image: {
    width: 105,
    height: 105,
    borderRadius: 5,
  },
  title: {
    color: '#FFF',
    fontSize: 14,
    paddingVertical: 5,
    width: 95,
  },
});

export default FoodItem;
