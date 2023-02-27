import { View, Text,StyleSheet } from 'react-native'
import React,{ReactNode} from 'react'
import { COLORS } from '../colors'

interface props{
  children:ReactNode;
}

export default function Card({children}:props) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    borderRadius:20,
    marginBottom:20,
    backgroundColor:COLORS.white,
    shadowColor: COLORS.primary,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation:4,
    padding:16,
    justifyContent:'center'
  }
})
