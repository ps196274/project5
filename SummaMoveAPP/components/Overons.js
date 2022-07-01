import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Over ons</Text>
      <Text>Deze app is gemaakt en ontwikkeld door studenten van de Summa College.
        Deze app gaat er voor zorgen dat er studen van het Summa College meer gaan bewegen in plaats van achter de laptop zitten.
        Op Summa Move staan allerlei soorten oefeningen en verschillende. De oefeningen vindt je hier onderin op de navigatiebalk bij "oefeningen".
      </Text>
      <Text style={styles.help}>Voor help klik op de knop rechtsboven "help"</Text>
      <Text style={styles.versionnumber}>Versie: V1.0.0</Text>
      <StatusBar style="auto" />
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