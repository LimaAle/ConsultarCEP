import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Card() {
  return (
    <View style={styles.container}>
      <Text>Card</Text>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    width:'80%',
    borderRadius:20,
    marginBottom:20,
    backgroundColor:COLORS.white,
    shadowColor: COLORS.primary,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation:4
  }
})
