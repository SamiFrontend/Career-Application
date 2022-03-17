import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "../components/Navigation/Navigation";
import Home from '../screen/Home/Home' ; 


const HomeStack = createNativeStackNavigator() ; 


export default function HomeViews(){
    return (
        <>
         <HomeStack.Navigator>
            <HomeStack.Screen options={{ headerShown : false }} name="Home" component={Home} />
         </HomeStack.Navigator>
         <Navigation /> 
        </>
    )
}