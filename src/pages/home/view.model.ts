import { useEffect, useState } from 'react'
import { Alert } from 'react-native';
import { searchAddress } from '../../repositories/address.repository';
import { HomeViewModel } from './types';
import NetInfo from '@react-native-community/netinfo';
import { useAppContext } from '../../context';

export default function useHomeViewModel(): HomeViewModel {
	const [cep, setCep] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [hasError, setHasError] = useState<boolean>(false);
	const [hasInternet, setHasInternet] = useState<boolean>(false);

	let errorMessage: string = 'CEP inválido!';
	let noInternetMessage: string = 'Sem conexão com a internet';

	const { handleAddress} = useAppContext();

	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener(state => {
			setHasInternet(state.isConnected);
		})

		return () => {
			unsubscribe();
		}
	}, [])

	const onSubmit = async () => {
		try {
			if (cep.length < 9) {
				setHasError(true);
				return;
			} else {
				setHasError(false);
				setIsLoading(true);
				const response = await searchAddress({ cep });
				handleAddress(response)
			}

		} catch (error) {
			console.log(error);
			Alert.alert('Error', 'Not found!');
		} finally {
			setIsLoading(false);
		}
	}

	const clearText = () => {
		setCep('');
		setHasError(false);
	}

	return {
		cep, setCep, isLoading, onSubmit, hasError, errorMessage, clearText, noInternetMessage, hasInternet
	}
}