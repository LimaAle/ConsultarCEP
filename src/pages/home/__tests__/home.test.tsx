import MockAdapter from 'axios-mock-adapter';
import { renderHook, act } from '@testing-library/react-hooks';
import { AddressModel } from '../../../models/address.model';
import api from '../../../repositories/client';
import useHomeViewModel from '../view.model';
import { Alert } from 'react-native';
const mock = new MockAdapter(api);
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});
describe('HomeViewModel test', () => {
  it('should be able to search', async () => {
    const address: AddressModel = {
      cep: '04654000',
      city: 'sao paulo',
      neighborhood: 'sul',
      state: 'sp',
      street: 'manuel murguia'
    };

    const cep = '04654000'
    mock.onGet(`/cep/v2/${cep}`).reply(200, address);

    const { result, waitFor } = renderHook(() => useHomeViewModel());

    act(() =>
      result.current.setCep(cep));
    await waitFor(()=>result.current.cep===cep);

    await act(()=>{
      result.current.onSubmit();
    })
    await waitFor(()=>result.current.isLoading===false);

    expect(result.current.isLoading).toBe(false);
    expect(result.current.cep).toBe(cep);

  })

  it('should return error invalid cep',async ()=>{
    const cep = '04654000'
    mock.onGet(`/cep/v2/${cep}`).reply(404, 'invalid cep');

    const alert= jest.spyOn(Alert,'alert');
    const { result, waitFor } = renderHook(() => useHomeViewModel());

    act(() =>
      result.current.setCep(cep));
    await waitFor(()=>result.current.cep===cep);

    await act(()=>{
      result.current.onSubmit();
    })

    expect(result.current.isLoading).toBe(false);
    expect(result.current.cep).toBe(cep);
  })
})