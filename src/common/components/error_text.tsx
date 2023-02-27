import { Text, View,StyleSheet } from 'react-native'
import React from 'react'

interface errorTextProps{
  text:string;
}
export default function ErrorText({text}:errorTextProps){
  
    return (
        <Text style={styles.text}>{text}</Text>
    )
  
}
const styles=StyleSheet.create({
  text:{
    fontSize:18,
    color:'#b7094c',
    marginVertical:8
  }
})