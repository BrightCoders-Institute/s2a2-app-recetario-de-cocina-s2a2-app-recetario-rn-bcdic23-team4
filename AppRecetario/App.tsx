import React from 'react';
import { ScrollView, StyleSheet,
  Text,
  View,
} from 'react-native';
import FoodItem from './src/components/FoodItem';


export const App = () => {

  const comidas = [
    {
      id: 1,
      title: '123123',
    },
    {
      id: 2,
      title: '123123',
    },
    {
      id: 3,
      title: '123123',
    },
    {
      id: 4,
      title: '123123',
    },
    {
      id: 5,
      title: '123123',
    },
  ];

  return (
    <View>
      <Text>Hello world</Text>
      <View>
        <Text style={styles.subtitle}>Trending</Text>
        <View style={{display: 'flex', flexDirection: 'row', gap: 25}}>
          <ScrollView horizontal>
        {comidas.map(item => (
        <FoodItem key={item.id} title={item.title} />
        ))}
        </ScrollView>
        </View>
      </View>
      <View>
        <Text style={styles.subtitle}>Recent</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    textTransform: 'uppercase',
    color: '#000',
  },
});

export default App;
