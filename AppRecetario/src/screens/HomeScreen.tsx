import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Voice from 'react-native-voice';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import FoodItem from '../components/FoodItem.tsx';
import comidas from '../assets/database/menu.ts';

const HomeScreen = () => {
  const [text, onChangeText] = useState('');
  const [comidasList, setComidasList] = useState(comidas);
  const [isListening, setIsListening] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    Voice.onSpeechResults = (e) => {
      const voiceText = e.value[0];
      onChangeText(voiceText);
      searchFilterFunction(voiceText);
      stopListening();
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [searchFilterFunction]);

  const startListening = async () => {
    try {
      await Voice.start('es-ES');
      setIsListening(true);
    } catch (error) {
      console.error('Error starting voice recognition', error);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (error) {
      console.error('Error stopping voice recognition', error);
    }
  };

  const searchFilterFunction = (text) => {
    const filteredComidas = comidas.filter((item) => {
      const itemData = `${item.title.toUpperCase()} ${item.ingredients.join(' ').toUpperCase()}`;
      const searchText = text.toUpperCase();

      return itemData.indexOf(searchText) > -1;
    });
    setComidasList(filteredComidas);
  };

  const toggleRecent = (itemId) => {
    const updatedComidasList = comidasList.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          isRecent: !item.isRecent,
          showMinusSign: !item.showMinusSign,
          category: item.isRecent ? 'Trending' : 'Recent',
        };
      }
      return { ...item, showMinusSign: false };
    });
    setComidasList(updatedComidasList);
  };

  const navigateToTestScreen = (selectedFoodId) => {
    toggleRecent(selectedFoodId);
    navigation.navigate('Test', { selectedFoodId });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Entypo name="magnifying-glass" style={styles.iconGlass} />
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            onChangeText(text);
            searchFilterFunction(text);
          }}
          placeholder="What do you want to eat?"
          value={text}
          placeholderTextColor="white"
        />
        <TouchableOpacity onPress={startListening}>
          <FontAwesome name="microphone" style={styles.iconMicrophone} />
        </TouchableOpacity>
        {isListening && (
          <TouchableOpacity onPress={stopListening}>
            <FontAwesome name="stop-circle" style={styles.iconStop} />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <Text style={styles.subtitle}>Trending</Text>
        <ScrollView horizontal>
          {comidasList.map(
            (item) =>
              item.category === 'Trending' && (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => navigateToTestScreen(item.id)}
                >
                  <FoodItem title={item.title} image={item.image} />
                </TouchableOpacity>
              )
          )}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.subtitle}>Recent</Text>
        <ScrollView horizontal>
          {comidasList.map(
            (item) =>
              item.category === 'Recent' && (
                <View key={item.id} style={styles.recentContainer}>
                  {item.showMinusSign && (
                    <TouchableOpacity onPress={() => toggleRecent(item.id)}>
                      <Text style={styles.minusSign}>-</Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => navigateToTestScreen(item.id)}
                  >
                    <FoodItem title={item.title} image={item.image} />
                  </TouchableOpacity>
                </View>
              )
          )}
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
    borderRadius: 13,
    padding: 10,
    marginTop: 18,
    backgroundColor: '#343435',
    borderColor: '#2e2e2f',
    color: 'white',
  },
  foodContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 25,
  },
  inputContainer: {
    marginLeft: 20,
    width: 350,
    height: 43,
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#343435',
    borderRadius: 13,
  },
  iconMicrophone: {
    fontSize: 22,
    color: 'white',
    marginLeft: 11,
  },
  iconGlass: {
    color: 'white',
    fontSize: 22,
    marginLeft: 10,
  },
  recentContainer: {
    position: 'relative',
  },
  minusSign: {
    position: 'absolute',
    top: 5,
    right: 5,
    color: 'white',
    fontSize: 20,
  },
  iconStop: {
    color: 'red',
    fontSize: 22,
    marginLeft: 11,
  },
});

export default HomeScreen;
