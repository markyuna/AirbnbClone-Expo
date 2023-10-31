import React from "react";
import { View, Pressable, Text } from "react-native";
import { Auth } from 'aws-amplify';


const ProfileScreen = () => {

  const signOut = () => {
    Auth.signOut();
  };

  return (
    <View style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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

export default ProfileScreen;