import { View,StyleSheet } from 'react-native'
import React from 'react'

export default function Divider() {
  return (
    <View style={styles.divider}/>  
  )
}
const styles=StyleSheet.create({
  divider:{
    width:'90%',
    borderWidth:1,
    borderColor:'#5C6B73',
    marginVertical:8
  }
})