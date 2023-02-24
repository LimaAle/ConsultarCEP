import { View, Text, StyleSheet,TextInput,Button, ActivityIndicator } from 'react-native'
import React from 'react'
import useHomeViewModel from './view.model';

export default function HomeView() {
	const { cep, setCep,isLoading,onSubmit } = useHomeViewModel();

	return (
		<View style={styles.container}>
			<Text>HomeScreen</Text>
			<TextInput style={styles.input} value={cep} onChangeText={setCep} />
			<Button onPress={onSubmit} title="Pesquisar"/>
			{isLoading?<ActivityIndicator size={'large'}/>:<></>}
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
	input:{
		borderWidth:1

	}
});