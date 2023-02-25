import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { MaskedTextInput } from 'react-native-mask-text';
import { FontAwesome } from '@expo/vector-icons';
interface searchBarProps {
  cep: string;
  setCep: Dispatch<SetStateAction<string>>;
  clearText: () => void;
}
export default function SearchBar({ cep, clearText, setCep }: searchBarProps) {
  let hasCep:boolean= cep.length >= 1?true:false;
  return (
    <View style={styles.searchBar}>
      <FontAwesome name='search' size={24} color='#777' />
      <MaskedTextInput
        mask="99999-999"
        style={styles.input} value={cep} onChangeText={setCep}
        placeholder="CEP"
        keyboardType='numeric'
      />
      <TouchableOpacity
        disabled={!hasCep}
          onPress={clearText}>
          <FontAwesome name='close' size={24} color={hasCep?'#555':'#ddd'} />
        </TouchableOpacity> 
      
    </View>
  )
}
const styles = StyleSheet.create({

  input: {
    flex: 1,
    maxWidth:150,
    marginLeft: 15
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    height: 40,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 5,
    paddingRight: 10
  }
});