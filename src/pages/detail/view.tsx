import { View } from 'react-native'
import React from 'react'
import { MaskedText } from "react-native-mask-text";
import AppBackground from '../../common/components/app_background'
import Card from '../../common/components/card'
import Title from '../../common/components/title'
import ListTile from '../../common/components/list_tile'
import Divider from '../../common/components/divider'
import { useAppContext } from '../../context'
import { formatCEP } from '../../common/utils';

export default function DetailView() {
  const { address} = useAppContext();

  return (
    <AppBackground>
      <View style={{ justifyContent: 'center' }}>
        <Title text='Informações do endereço.' />

        <Card>
          <ListTile title='CEP' text={formatCEP(address.cep)} />
          <Divider />
          <ListTile title='Rua' text={address.street} />
          <Divider />
          <ListTile title='Bairro' text={address.neighborhood} />
          <Divider />
          <ListTile title='Cidade' text={address.city} />
          <Divider />
          <ListTile title='Estado' text={address.state} />
        </Card>
      </View>
    </AppBackground>
  )
}
