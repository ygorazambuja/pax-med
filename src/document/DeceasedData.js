import { Text, View } from '@react-pdf/renderer'
import React from 'react'

export const DeceasedData = ({ ...props }) => (
  <View>
    <View
      style={{ flex: 1, paddingHorizontal: '25px', paddingVertical: '8px' }}
    >
      <Text style={{ fontSize: '12px', fontWeight: 'extrabold' }}>
        Dados do Falecido
      </Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        fontSize: '12px',
        paddingHorizontal: '25px',
        paddingBottom: '12px',
        justifyContent: 'space-between'
      }}
    >
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>Nome: {props.deceasedName}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Local do Falecimento: {props.placeOfDeath}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Sexo: {props.gender}</Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>Data: {props.deathDate}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Associado: {props.associate}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Óbito: {props.death}</Text>
        </View>
      </View>
    </View>
  </View>
)

export default DeceasedData
