import React from 'react';
import { Image, Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import comidas from '../assets/database/menu.ts';



const TestScreen = () => {

    const navigation = useNavigation();
    const  id = 3;

    const selectedFood = comidas.find(item => item.id === id);

  return (
    <View style={styles.container} key={selectedFood?.id}>
        {/* @ts-ignore */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
            <View>
                <Text style={styles.TextButton}>X</Text>
            </View>
        </TouchableOpacity>
    <Image style={styles.img} source={selectedFood?.image} />
   <View style={styles.imgcontainer} />
    <View style={styles.titleContainer}>
     <Text style={styles.label}>{selectedFood?.category}</Text>
     <Text style={styles.foodName}>{selectedFood?.title}</Text>
    </View>
    <View style={styles.ingredientsContainer}>
        <Text style={{color: '#FFF', fontSize: 20}}>Ingredients</Text>
        <Text style={{color: '#FFF',  fontSize: 18}}>for 3 servings</Text>
        <ScrollView style={{padding: 15}}>
            {selectedFood?.ingredients.map(item => (
                <View style={styles.ingredientsInnerContainer}>
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
        width: '100%',
        height: '100%',
        backgroundColor: '#282828',
    },
    img: {
        width: '100%',
        height: '50%',
    },
    imgcontainer: {
        width: '100%',
        height: '50%',
        backgroundColor: '#282828',
        opacity: 0.6,
        position: 'absolute',
        zIndex: 0,
        top: 0,
    },
    label: {
        color: '#FFF',
        fontSize: 20,
        textTransform: 'uppercase',
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
    backButton: {
        position: 'absolute',
        top: 0,
        zIndex: 10,
        margin: 15,
    },
    ingredientsInnerContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
        display: 'flex',
        flexDirection: 'column',
    },
    ingredientsText: {
        color: '#FFF',
        marginTop: 5,
        padding: 15,
    },
    TextButton:{
        color: 'white',
        fontSize: 23,
    },
});

export default TestScreen;
