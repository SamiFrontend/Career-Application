import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountScreen from './src/Stack/Account' ; 
import HomeScreen from './src/Stack/Home' ; 
import StartScreen from './src/screen/StartScreen' ; 
import ApplyJob from './src/screen/ApplyJob' ; 


const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='StartScreen'>
             <Stack.Screen name="StartScreen" options={{ headerShown : false }} component={StartScreen} />
             <Stack.Screen name="Account" options={{ headerShown : false }} component={AccountScreen}  />
             <Stack.Screen name="HomeScreen" options={{ headerShown : false}} component={HomeScreen} />
             <Stack.Screen name="ApplyJob" component={ApplyJob} options={{ headerShown : false }} />
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
