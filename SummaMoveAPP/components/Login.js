import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,Pressable } from 'react-native';
import {useTranslation} from 'react-i18next';
import React, { useEffect, useState } from 'react';

import './i18n/i18n';
function App({ navigation }) {
  const {t, i18n} = useTranslation();
  
  const [currentLanguage,setLanguage] =useState('en');
  
  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

    return (
    <View style={styles.container}>
      <Text style={styles.tekst}> {t('titlelogin')}</Text>
      <TextInput style={styles.input} placeholder={t('gebruikersnaam')}></TextInput>
      <TextInput secureTextEntry={true} style={styles.input} placeholder={t('wachtwoord')}></TextInput>
      <Text>{"\n"}</Text>
      <StatusBar style="auto" />
      <View style={styles.login}>
        <Button style={styles.login} onPress={() => navigation.navigate('LoadPrestaties')} title={t('login')}/>
      </View>
      <View style={styles.login}>
        <Button style={styles.login} onPress={() => navigation.navigate('LoadPrestaties')} title={t('account')}/>
      </View>
      <Pressable onPress={() => changeLanguage('en')} >
          <Text>EN</Text>
        </Pressable>
        <Pressable
          onPress={() => changeLanguage('nl')}>
          <Text>NL</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    width: 300,
    alignSelf: 'center',
  },
  tekst: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  login: {
    alignSelf: 'center',
    width: 200,
    height: 50,
  }
});

export default App;