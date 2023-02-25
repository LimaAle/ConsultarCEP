import { AddressModel } from "../models/address.model";
import api from "./client";

export interface cepDTO{
  cep:string;
}

export const searchAddress= async ({cep}:cepDTO)=>{
  const {data}= await api.get<AddressModel>(`/cep/v2/${cep}`);
  return data;
}