import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';

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
            title: 'Search Voodoo'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

// Yelp Fusion details.
// Client ID: vIs4635BGW473ifxk-2aaw
// API Key: 9SQA3KieKavCp1h1EEHjAd5B_bKKNHB1kFnojMtMYuwqT3UfH9IZ57dyiaD9-zaa1Swmkeay-3CuhLgrmCD6TGzM17Go63aCA8VAARfimmz7O0vTgErVLIl33QrNZXYx 