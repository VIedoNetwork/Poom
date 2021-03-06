import * as React from 'react';
import {useContext, Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FilledButton} from '../components/FilledButton';
import {AuthContext} from '../navigaiton/AuthProvider';
import firestore from '@react-native-firebase/firestore';

export default function homeScreenStudent({navigation}) {
  const {user, logout} = useContext(AuthContext);


  return (
    <View style={styles.container}>
      <Text>Welcome Student {user.email}</Text>

      <FilledButton
        title={'TakeTest'}
        style={styles.loginButton}
        onPress={() => navigation.navigate('NameExame')}
      />

      <FilledButton
        title={'Logout'}
        style={styles.loginButton}
        onPress={() => logout()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginVertical: 10,
    marginBottom: 15,
  },
  loginButton: {
    marginVertical: 32,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 100,
  },
});
