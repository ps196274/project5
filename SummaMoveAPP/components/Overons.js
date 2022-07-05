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
      <Text style={styles.titleText}>{t('overons')}</Text>
      <Text>{t('overonsbeschrijving')}</Text>
      <Text style={styles.help}>{t('overonshelp')}</Text>
      <Text style={styles.versionnumber}>{t('overonsversie')}</Text>
      <StatusBar style="auto" />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  help: {
    fontSize: 15,
    fontWeight: "italic"
  },
  versionnumber: {
    fontSize: 10,
    fontWeight: "italic"
  },
});

export default App;