import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import BusinessScreen from './src/screens/BusinessScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home"
          component={ HomeScreen }
          options={{
            title: 'Home'
          }}
        />
        <Stack.Screen 
          name="Search"
          component={ SearchScreen }
          options={{
            title: 'Search Foodoo'
          }}
        />
        <Stack.Screen 
          name="Business"
          component={ BusinessScreen }
          options={{
            title: 'Profile'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}