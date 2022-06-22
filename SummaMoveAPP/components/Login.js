import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

function App({ navigation }) {
    return (
    <View style={styles.container}>
      <Text style={styles.tekst}>Meld je aan om je prestaties te kunnen bekijken{"\n"}</Text>
      <TextInput style={styles.input} placeholder="Gebruikersnaam"></TextInput>
      <TextInput secureTextEntry={true} style={styles.input} placeholder="Wachtwoord"></TextInput>
      <Text>{"\n"}</Text>
      <StatusBar style="auto" />
      <Button style={ styles.login } onPress={() => navigation.navigate('LoadPrestaties')} title="Login"/>
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

  }
});

export default App;