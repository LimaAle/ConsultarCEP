import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../colors'

export default function NoInternet() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sem internet!</Text>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:COLORS.red,
    width:'100%',
    alignItems:'center',
    padding:8,
    marginVertical:12
  },
  text:{
    color:COLORS.white
  }
})