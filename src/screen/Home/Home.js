import { View , StyleSheet ,  Platform , StatusBar  } from 'react-native'
import React , { useContext , useEffect } from 'react'
import Header from '../../components/Home/Header/Header' ; 
import { colors } from '../../utils';
import FindYourJob from '../../components/Home/FindYourJob';
import JobList from '../../components/Home/JobList';
import Notification from '../../components/UI/Notification';
import { NotificationContext } from '../../store/Notification';

const TIME_REMOVE_NOTI_MESSAGE = 3000 ; 

export default function Home({ route , navigation }) {

  const notification = useContext(NotificationContext) ; 

  useEffect(() => {
    let canceled = false ; 
    let clearNotificationTimer ;

    if( !canceled ){
      clearNotificationTimer = setTimeout(() => {
        if( notification.show ){
         notification.removeNotification()
        }
      } , TIME_REMOVE_NOTI_MESSAGE );
 
    }

     return () => {
       canceled = true ; 
       clearTimeout(clearNotificationTimer)
     } ; 

  } , [notification.show])

  return (
    <View style={styles.container}>
      <Header />
      <FindYourJob />
      <JobList />
      { notification.show && <Notification message={notification.Message} removeNotification={notification.removeNotificationa} />}
    </View>
  )
}


const isAndroid = Platform.OS === "android" ; 


const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    position : 'relative' , 
    backgroundColor : colors.white , 
    paddingTop : isAndroid ? StatusBar.currentHeight + 10 : 0
  }
})