import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, FlatList, Text, View } from 'react-native';

const App = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getApi = async () => {
     try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
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
      {item.name}{"\n"}        
      {item.email}{"\n"} </Text>
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