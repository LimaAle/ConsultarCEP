import { ActivityIndicator, View, SafeAreaView } from 'react-native'
import React from 'react'
import useHomeViewModel from './view.model';
import SearchBar from './components/search_bar';
import AppBackground from '../../common/components/app_background';
import SearchButton from './components/search_button';
import ErrorText from '../../common/components/error_text';
import Title from '../../common/components/title';

export default function HomeView() {
	const { cep, setCep, isLoading, onSubmit, hasError, errorMessage, clearText } = useHomeViewModel();

	return (
		<AppBackground>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
					<Title text='Digite um CEP para pesquisar.' />
					<SearchBar cep={cep} setCep={setCep} clearText={clearText} />
					<ErrorText text={hasError ? errorMessage : ''}/>
					{isLoading ? <ActivityIndicator size={'large'} /> : <SearchButton onPress={onSubmit} title="Pesquisar" />}		
				</View>
			</SafeAreaView>
		</AppBackground>
	)
}
