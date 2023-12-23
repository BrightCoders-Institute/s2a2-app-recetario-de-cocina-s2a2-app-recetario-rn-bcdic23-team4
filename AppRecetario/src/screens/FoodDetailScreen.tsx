import React from 'react';
import { Image, Text, View, ScrollView, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FoodDetailScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Button title='Back' onPress={() => navigation.goBack()} />
        </TouchableOpacity>
        <Image source={require('../assets/images/pizza.jpg')}/>
        <View>
         <Text>Label</Text>
         <Text>Title</Text>
        </View>
        <View>
            <ScrollView>
                <Text>Array ingredientes</Text>
            </ScrollView>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
});

export default FoodDetailScreen;
