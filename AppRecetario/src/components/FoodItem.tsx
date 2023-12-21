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
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    padding: 5,
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 5,
  },
});

export default FoodItem;
