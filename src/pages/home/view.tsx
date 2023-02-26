import { Text, StyleSheet, ActivityIndicator, View } from 'react-native'
import React from 'react'
import useHomeViewModel from './view.model';
import SearchBar from './components/search_bar';
import { useAppContext } from '../../context';
import AppBackground from '../../common/components/app_background';
import SearchButton from './components/search_button';
import { COLORS } from '../../common/colors';
import ErrorText from '../../common/components/error_text';
import Card from '../../common/components/card';

export default function HomeView() {
	const { cep, setCep, isLoading, onSubmit, hasError, errorMessage, clearText, hasInternet } = useHomeViewModel();

	return (
		<AppBackground>
			<View style={{ flex: 1, justifyContent: "center",alignItems:'center' }}>
				<Text style={styles.title}>Digite um CEP para pesquisar.</Text>
				<SearchBar cep={cep} setCep={setCep} clearText={clearText} />

				{/* <ErrorText>{hasError ? errorMessage : ''}</ErrorText> */}

				{isLoading ? <ActivityIndicator size={'large'} /> : <SearchButton onPress={onSubmit} title="Pesquisar" />}
				{/* {!hasInternet ? <Text>Sem internet</Text> : null} */}
			</View>
			{/* <Card></Card> */}
		</AppBackground>
	)
}
const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		color: COLORS.white
	},
});