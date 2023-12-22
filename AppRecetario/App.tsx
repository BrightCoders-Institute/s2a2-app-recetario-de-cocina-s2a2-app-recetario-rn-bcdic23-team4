import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import FoodItem from './src/components/FoodItem';
import comidas from './src/assets/database/menu.ts';

export const App = () => {

  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.mainContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="What do you want to eat?"
          value={text}
          placeholderTextColor="white"
        />
      <View>
        <Text style={styles.subtitle}>Trending</Text>
        <View style={styles.foodContainer}>
          <ScrollView horizontal>
        {comidas.map(item => (
          item.category === 'Trending' &&
        <FoodItem key={item.id} title={item.title} image={item.image}/>
        ))}
        </ScrollView>
        </View>
      </View>
      <View>
        <Text style={styles.subtitle}>Recent</Text>
        <ScrollView horizontal>
        {comidas.map(item => (
          item.category === 'Recent' &&
        <FoodItem key={item.id} title={item.title} image={item.image}/>
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
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius:13,
    padding: 10,
    marginTop: 15,
    backgroundColor: '#343435',
    borderColor:'#2e2e2f',
    //(<-- Eliminar)paddingRight: 30, // Espacio a la derecha para el icono
  },
  foodContainer: {
   display: 'flex',
   flexDirection: 'row',
   gap: 25,
  },
});

export default App;
