import { Pressable , View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons' ; 
import { colors } from '../../utils';

export default function BackButton({ style , onPress = null  }) {

  const navigation = useNavigation() ; 

  const goBack = () => {
      navigation.goBack()
  }

  return (
    <Pressable style={style} onPress={onPress || goBack }>
       <Icon name='arrow-back' color={colors.primary} size={25} />
    </Pressable>
  )
}