import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, FlatList, Text, View } from 'react-native';

const App = ({ navigation }) => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.titel}>{"\n"}  Een lijst met oefeningen{"\n"}  {"\n"}  </Text>
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
    </View>    
  );
};

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