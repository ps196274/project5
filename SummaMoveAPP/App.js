import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer,  } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons'; 

import LoadOefening from './components/Oefeningen';
import LoadHelp from './components/Help';
import LoadOverons from './components/Overons';
import LoadLogin from './components/Login';
import LoadPrestaties from './components/Prestaties';

const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Tabnav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="oefeningen"
        component={LoadOefening}  
        options={{
          tabBarLabel: 'Oefeningen',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="directions-walk" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Prestaties"
        component={LoadLogin}  
        options={{
          tabBarLabel: 'Prestaties',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="multiline-chart" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="overons"
        component={LoadOverons}
        options={{ 
          tabBarLabel: 'Over ons',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="groups" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabnav"
          component={Tabnav}
          options={({ navigation }) => ({
            title: 'SummaMove',
            headerRight: () => (
              <Button
                onPress={() => 
                navigation.navigate('LoadHelp')}
                title="Help"
              />
            ),
          })}
        />
      <Stack.Screen 
        name="LoadHelp"
        component={LoadHelp}
        options={{ title: 'Help' }}
      />
      <Stack.Screen 
        name="LoadPrestaties"
        component={LoadPrestaties}
        options={{ title: 'Prestaties' }}
      />
      </Stack.Navigator>
    </NavigationContainer>
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