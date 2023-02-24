import  { useState } from 'react'
import { Alert } from 'react-native';
import { searchAddress } from '../../repositories/cep.repository';
import { HomeViewModel } from './types';

export default function useHomeViewModel():HomeViewModel {
	const [cep, setCep] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const onSubmit= async()=>{
		console.log(cep);
		try{
			setIsLoading(true);
			const response= await searchAddress({cep});
			console.log(response.street);
		}catch(error){
			console.log(error);
			Alert.alert('Error', 'Not found!');
		}finally{
			setIsLoading(false);
		}
	}

	return {
		cep,setCep,isLoading,onSubmit
	}
}