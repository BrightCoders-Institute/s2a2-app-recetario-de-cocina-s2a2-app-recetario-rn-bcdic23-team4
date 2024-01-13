import React from 'react';
import {View, Text, StyleSheet, ImageSourcePropType, Image} from 'react-native';


interface FoodItemProps {
  id?: Number;
  image?: ImageSourcePropType;
  title?: string;
  recent?: boolean;
}

const FoodItem: React.FC<FoodItemProps> = ({ image, title, recent }) => {
  return (
    //@ts-ignore
    <View style={styles.container}>
      {recent === true ? (<Image style={styles.recentImage} source={image} />) : (<Image style={styles.image} source={image} />)}
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
  recentImage: {
    width: 155,
    height: 155,
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
