import { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useBusiness from '../hooks/useBusiness';
 
export default function BusinessScreen({ navigation, route }) {
  const { businessId } = route.params;
  
  const [ businessSearchApi,
    errorMessage,
    businessResult ] = useBusiness();

  useEffect(() => businessSearchApi(businessId), [businessId]);
  
  return (
    <View>
      <Text>BusinessScreen.js</Text>
      <Text>{businessResult.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
})