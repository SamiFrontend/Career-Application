import { View, Text, StyleSheet, Pressable } from "react-native";
import React , { useState , useCallback } from "react";
import { spacing, colors, fontSize } from "../../utils";
import Icon from "react-native-vector-icons/Ionicons";
import * as DocumentPicker from 'expo-document-picker';

function FileUploaded({ fileName , onPress }) {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text numberOfLines={1} style={{ width: 270 }}>
          { fileName } 
      </Text>
      <Icon name="close" onPress={onPress} size={18} color={colors.danger} />
    </Pressable>
  );
}

export default function UploadInput({ label, setFile }) {

  const [ hasFile , setHasFile ] = useState(false) ; 
  const [ fileName , setFileName ] = useState(null) ; 

  const handleDocumentSelection = useCallback( async () => {
    
    let response = await DocumentPicker.getDocumentAsync({});
    
    if( response.type !== "cancel" ){
      setFile(response) ;
      setHasFile(true) ;
      setFileName(response.name)  
    }

  });

  const clearFile = () => {
    setFile('') ;
    setHasFile(false) ; 
    setFileName('')
  }


  return (
    <Pressable onPress={ hasFile ? null : handleDocumentSelection }>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.Input}>
         { hasFile ? <FileUploaded fileName={fileName} onPress={clearFile} /> : <Text style={styles.placeholder}> Open Files + </Text>}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xl,
  },
  label: {
    fontSize: fontSize.initial,
    fontWeight: "500",
    color: colors.primary,
    textTransform: "capitalize",
  },
  Input: {
    fontSize: fontSize.md,
    padding: spacing.md,
    backgroundColor: colors.bgInput,
    borderRadius: 5,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: colors.borderColor,
    marginTop: 8,
  },
  placeholder: {
    textAlign: "center",
    color: "blue",
    fontSize: fontSize.md - 1,
  },
});
