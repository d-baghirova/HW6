import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigation from './src/components/navigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  ); 
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#DEEAE8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
