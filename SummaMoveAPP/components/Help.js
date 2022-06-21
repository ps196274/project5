import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.versie}>Versie 0.0.1.0.2</Text>
      <Text style={styles.Titel}>Welkom bij SummaMove</Text>
      <Text>In deze app staan verschillende oefeningen die je{"\n"}</Text>
      <Text>kan uitvoeren en je kan prestaties toeveogen en bekijken{"\n"}</Text>
      <Text >Als je hulp nodig hebt of er zijn vragen contacteer ons{"\n"}</Text>
      <Text style={styles.verander}>{"\n"}{"\n"}{"\n"}{"\n"}Change the language of the app{"\n"}{"\n"}</Text>
      <StatusBar style="auto" />
      <View style={styles.Taal}>
        <Button style={styles.TaalNL} title="NL"/>
        <Text>{"\n"}</Text>
        <Button style={styles.TaalEN} title="EN"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    fontSize: 17,
  },
  versie: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    alignItems: 'center',
  },
  Titel: {
    fontSize: 25,
    padding: 50,
    fontWeight: 'bold',

  },
  Taal: {
    flex: 1,
  },
  TaalNL: {
    padding: 20,
  },
  TaalEN: {
    padding: 20,
  },
  verander:{
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default App;