import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import FoodDetailScreen from '../screens/FoodDetailScreen';
import HomeScreen from '../screens/HomeScreen';
import testScreen from '../screens/testScreen';


const Stack = createNativeStackNavigator();

function MyStack (){
    return (
     <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Food" component={FoodDetailScreen} options={{headerShown: false}} />
        <Stack.Screen name="Test" component={testScreen} options={{headerShown: false}} />
     </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
