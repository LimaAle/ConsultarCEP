import { View, Text, StyleSheet, Button, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import useHomeViewModel from './view.model';
import SearchBar from './components/searchBar';
export default function HomeView() {
	const { cep, setCep, isLoading, onSubmit, hasError, errorMessage, clearText,hasInternet } = useHomeViewModel();

	return (
		<View style={styles.container}>
			<Text>Digite um CEP para pesquisar.</Text>
			<SearchBar  cep={cep} setCep={setCep} clearText={clearText}/>

			<Text>{hasError ? errorMessage : ''}</Text>
			<Button onPress={onSubmit} title="Pesquisar" />
			{isLoading ? <ActivityIndicator size={'large'} /> : <></>}
			{!hasInternet?<Text>Sem internet</Text>:null}
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});