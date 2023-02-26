import { ReactNode, useState } from "react"
import { createContext, useContext } from "react";
import { AddressModel } from "../models/address.model";

interface Props {
  children: ReactNode;
}

export const INITIAL_STATE: AddressModel = {
  cep: '',
  city: '',
  neighborhood: '',
  state: '',
  street: ''
}

export const AppContext = createContext({
  address:INITIAL_STATE,
  handleAddress:({}:AddressModel)=>{}
});

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
}

export const AppContextProvider = ({ children }: Props) => {
  const [address,setAddress]=useState<AddressModel>(INITIAL_STATE);


  function handleAddress(address:AddressModel){
    setAddress(address)
  }

  return (
    <AppContext.Provider value={{
      address,
      handleAddress
    }}>
      {children}
    </AppContext.Provider>
  )
}