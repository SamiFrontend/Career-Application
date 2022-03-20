import { View , ScrollView , Text, StyleSheet} from 'react-native'
import React , { useState } from 'react'
import MultiSelect from 'react-native-multiple-select';
import { colors, spacing , fontSize } from "../../utils";

export default function SelectMultiple({ items , label }) {
    const [selectedItems , setSelectedItems ] = useState([])

    const onSelectedItemsChange = item => {
        setSelectedItems(item);
    };


    const addItem = ( value ) => {
        alert( JSON.stringify(value) )
    }
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <MultiSelect
           canAddItems={true}
           onAddItem={addItem}
          styleDropdownMenu={{ backgroundColor : colors.bgInput , height : 50 , borderRadius : 5 , paddingVertical : spacing.md , paddingLeft : spacing.md  , borderColor : colors.borderColor , borderWidth : 1 }}
          styleDropdownMenuSubsection={{ backgroundColor : 'transparent' , borderColor : 'transparent'  , height : 50 , borderRadius : 5 }}
          styleInputGroup={{  padding : spacing.md - 1  , borderWidth : 1 , borderColor : colors.borderColor , borderRadius : 5 }}
          styleListContainer={{ backgroundColor : colors.bgColor , height : 90 }}
          hideTags
          items={items}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText={ selectedItems.length > 0 ? "Skill" : "Choose Your Skill"}
          searchInputPlaceholderText="find your skill or add "
          selectedItemTextColor={colors.secondry}
          selectedItemIconColor={colors.secondry}
          noItemsText={"can't found skill"}
          styleItemsContainer={{ paddingVertical : spacing.xs + 3}}
          styleRowList={{ padding : spacing.xs }}
          itemTextColor="#1f1f1f"
          displayKey="name"
          submitButtonColor={colors.primary}
          submitButtonText="Save"
          fixedHeight={true}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        marginTop : spacing.xs,
    },
    label : {
        fontSize : fontSize.initial , 
        fontWeight : "500" , 
        color : colors.primary ,
        marginBottom : spacing.xs + 1  
    } , 
    Input : {
        fontSize : fontSize.md , 
        padding : spacing.md , 
        backgroundColor : colors.bgInput  ,
        borderRadius : 5 ,  
        borderStyle : 'solid' , 
        borderWidth : 1 , 
        marginTop : 8
    } 
})