import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titel}>Bekijk hier alle Prestaties die jij hebt behaald</Text>
      <Text>Hier kan je prestaties bekijken toevoegen en verwijderen</Text>
      <StatusBar style="auto" />
    </View>
  );
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