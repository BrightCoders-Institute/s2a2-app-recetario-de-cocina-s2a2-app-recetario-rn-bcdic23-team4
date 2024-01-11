import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FoodItem from '../components/FoodItem.tsx';
import comidas from '../assets/database/menu.ts';
import Entypo from 'react-native-vector-icons/Entypo.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const [text, onChangeText] = React.useState('');
    const navigation = useNavigation();

  return (
    <View style={styles.mainContainer }>
    <View style={styles.inputContainer}>
    <Entypo name="magnifying-glass" style={styles.iconGlass}/>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="What do you want to eat?"
          value={text}
          placeholderTextColor="white"
         />
         <FontAwesome  name="microphone" style={styles.iconMicrophone}/>
</View>
      <View>
        <Text style={styles.subtitle}>Trending</Text>
        <View style={styles.foodContainer}>
          <ScrollView horizontal>
        {comidas.map(item => (
          item.category === 'Trending' &&
          /* @ts-ignore */
          <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Test', { id })}>
          <FoodItem  title={item.title} image={item.image}/>
          </TouchableOpacity>
        ))}
        </ScrollView>
        </View>
      </View>
      <View>
        <Text style={styles.subtitle}>Recent</Text>
        <ScrollView horizontal>
        {comidas.map(item => (
          item.category === 'Recent' &&
        <FoodItem key={item.id} title={item.title} image={item.image} recent />
        ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#282828',
    },
    subtitle: {
      textTransform: 'uppercase',
      color: '#b91e66',
      padding: 15,
      fontSize: 20,
      fontWeight: 'bold',
    },
    input: {
      height: 37,
      width: 255,
      margin: 12,
      borderWidth: 0,
      borderRadius:13,
      padding: 10,
      marginTop: 18,
      backgroundColor: '#343435',
      borderColor:'#2e2e2f',
      color: 'white',
    },
    foodContainer: {
     display: 'flex',
     flexDirection: 'row',
     gap: 25,
    },
    inputContainer:{
      marginLeft: 20,
      width: 350,
      height: 43,
      marginTop: 18,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#343435',
      borderRadius:13,
    },
    iconMicrophone:{
      fontSize: 22,
      color: 'white',
      marginLeft: 11,
    },
    iconGlass:{
    color: 'white',
    fontSize: 22,
    marginLeft: 10,
    },
  });

export default HomeScreen;
