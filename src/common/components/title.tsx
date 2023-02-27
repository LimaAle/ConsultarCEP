import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../colors';

export default function Title({text}) {
  return (
      <Text style={styles.title}>{text}</Text>
  )
}
const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		color: COLORS.white,
	},
});