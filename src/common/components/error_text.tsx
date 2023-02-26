import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class ErrorText extends Component {
  render() {
    return (
        <Text style={styles.text}>ErrorText</Text>
    )
  }
}
const styles=StyleSheet.create({
  text:{
    fontSize:18,
    color:'#b7094c'
  }
})