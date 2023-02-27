import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface listtileprops {
  title: string;
  text: string;
}

export default function ListTile({ title, text }: listtileprops) {
  return (
    <View style={styles.tile}>
      <Text style={styles.title}>{title}:</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  tile: {
    flexDirection: 'row'
  },
  title: {
    fontWeight: 'bold',
    marginRight:8
  },
  text: {

  }
})