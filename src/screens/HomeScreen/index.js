import React from 'react';
import {View, ImageBackground, Text, Pressable } from 'react-native';
import styles from './styles';
import {Auth} from 'aws-amplify';
import { FontAwesome5 } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const index = (props) => {
  const navigation = useNavigation();

  const signOut = () => {
    Auth.signOut();
  };

  return (
    <View style={{flex: 1}}>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}>
        <FontAwesome5 name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, sweet home</Text>
      <Text
        onPress={signOut}
        style={{
          width: '100%',
          textAlign: 'center',
          color: 'red',
          marginTop: 'auto',
          marginVertical: 20,
          fontSize: 20,
        }}>
        Sign out
      </Text>
    </View>
  );
};

export default index;