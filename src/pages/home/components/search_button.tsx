import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../../../common/colors';
interface Props {
  title:string;
  onPress:()=>void;
}
export default function SearchButton({ title,onPress }: Props) {
  return (
    
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{title.toUpperCase()}</Text>
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    padding:10,
    paddingHorizontal:15,
    borderRadius:20,
    backgroundColor:COLORS.primary,
    elevation:4,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text:{
    color:COLORS.white
  }
});