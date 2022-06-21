import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

function App({ navigation }) {
    return (
    <View style={styles.container}>
      <Text>Meld je aan om je prestaties te kunnen bekijken</Text>
      <StatusBar style="auto" />
      <Button onPress={() => navigation.navigate('LoadPrestaties')} title="Login"/>
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
});

export default App;