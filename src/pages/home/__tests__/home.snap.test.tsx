import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { HomeViewModel } from "../types";
import HomeView from '../view';
import useHomeViewModel from '../view.model';

jest.mock('../view.model', () => {
  const fnHomeViewModel = jest.fn();
  fnHomeViewModel.mockImplementation(() => ({
    cep: '',
    setCep: jest.fn(),
    isLoading: false,
    onSubmit: jest.fn(),
    hasError:false,
    errorMessage:'error',
    clearText:jest.fn(),
    noInternetMessage:'nomessage',
    hasInternet:false
  } as HomeViewModel));
  return fnHomeViewModel;
});
describe('home view tests',()=>{
  it('should render', () => {
    const { toJSON } = renderer.create(<HomeView />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('should render with cep', () => {
    useHomeViewModel.mockImplementation(() => ({
      cep: '04654000',
      setCep: jest.fn(),
      isLoading: false,
      onSubmit: jest.fn()
    }))
  
    const { toJSON } = renderer.create(<HomeView />);
    expect(toJSON()).toMatchSnapshot();
  })
})


