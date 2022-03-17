import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/Account/Login';
import Register from '../screen/Account/Register';


const AccountStack = createNativeStackNavigator() ; 

export default function AccountScreen(){ 
   return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Login"  options={{ headerShown : false }} component={Login} />
      <AccountStack.Screen name="Register"  options={{ headerShown : false }} component={Register} />
 </AccountStack.Navigator>
   )
}
