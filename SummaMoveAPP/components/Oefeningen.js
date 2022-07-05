import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,Pressable, ActivityIndicator, FlatList, } from 'react-native';
import {useTranslation} from 'react-i18next';
import { getBeschrijving } from "./Auto";
import { setBeschrijving } from "./Auto";

import './i18n/i18n';
function App({ navigation }) {
  let langoeg = "nl";
  const {t, i18n} = useTranslation();
    
  const [currentLanguage,setLanguage] =useState('nl');
  
  const changeLanguage = value => {
    setBeschrijving(value);
    langoeg =value;
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getApi = async () => {
     try {
      const response = await fetch('http://127.0.0.1:8000/api/oefeningen');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getApi();
  }, []);
if (langoeg == "nl"){
  return (
    <View style={styles.container}>
      <Text style={styles.titel}>{"\n"}  {t('oefeningenlist')}{"\n"}  {"\n"}  </Text>
      {isLoading ? <ActivityIndicator/> : (
      <FlatList
      data={data}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item }) => <Text>
      {item.naam_nl}{"\n"}        
      {item.beschrijving_nl}{"\n"} </Text>
      }
    />
      )}
            <Pressable onPress={() => changeLanguage('en')} >
          <Text>English</Text>
        </Pressable>
        <Pressable
          onPress={() => changeLanguage('nl')}>
          <Text>Dutch</Text>
        </Pressable>
    </View>    
  );
}
else {
  return (
    <View style={styles.container}>
      <Text style={styles.titel}>{"\n"}  {t('oefeningenlist')}{"\n"}  {"\n"}  </Text>
      {isLoading ? <ActivityIndicator/> : (
      <FlatList
      data={data}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item }) => <Text>
      {item.naam_en}{"\n"}        
      {item.beschrijving_en}{"\n"} </Text>
      }
    />
      )}
            <Pressable onPress={() => changeLanguage('en')} >
          <Text>English</Text>
        </Pressable>
        <Pressable
          onPress={() => changeLanguage('nl')}>
          <Text>Dutch</Text>
        </Pressable>
    </View>    
  );
}
}


 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titel:{
    padding: 20,
    fontSize: 17,
    fontWeight: 'bold',
  }
});
 
export default App;