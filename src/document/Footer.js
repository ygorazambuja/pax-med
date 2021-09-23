import { Text, View } from '@react-pdf/renderer'
import React from 'react'

export const Footer = ({ servicesDate }) => (
  <View style={{ marginHorizontal: '25px' }}>
    <Text style={{ fontSize: '10px' }}>Pedro Gomes - MS, {servicesDate}</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: '34px'
        }}
      >
        <Text style={{ fontSize: '10px' }}>_______________________</Text>
        <Text style={{ fontSize: '10px', paddingVertical: '12px' }}>
          PAX MED SÃO MARCOS
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: '24px'
        }}
      >
        <Text style={{ fontSize: '10px' }}>_______________________</Text>
        <Text style={{ fontSize: '10px', paddingVertical: '12px' }}>
          CONTRATANTE
        </Text>
      </View>
    </View>

    <Text style={{ paddingVertical: '12px', fontSize: '10px' }}>
      DECLARO PARA OS DEVIDOS FINS, QUE O A PAX MED SÃO MARCOS PRESTOU O
      ATENDIMENTO FUNERAL AO FALECIDO(A) CITADO ACIMA, ISENTO DE QUALQUER
      DESPESA FUNERARIA
    </Text>
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}
    >
      <Text style={{ fontSize: '10px', paddingVertical: '20px' }}>CIENTE</Text>
      <Text style={{ fontSize: '10px' }}>_______________________</Text>
      <Text style={{ fontSize: '10px', paddingVertical: '8px' }}>
        ASSINATURA
      </Text>
    </View>
  </View>
)

export default Footer
