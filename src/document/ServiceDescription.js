import { Text, View } from '@react-pdf/renderer'
import React from 'react'

export const ServiceDescription = ({ ...props }) => (
  <View>
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: '25px',
        borderBottom: '1px solid black',
        marginVertical: '24px'
      }}
    >
      <Text style={{ fontSize: '10px' }}>Descrição dos Serviços</Text>
      <View style={{ flex: 1 }}></View>
      <View>
        <Text style={{ fontSize: '10px' }}>
          Total: R$ {props.servicesValue}
        </Text>
      </View>
    </View>
    <View style={{ marginHorizontal: '25px', marginBottom: '18px' }}>
      <Text style={{ fontSize: '10px' }}>{props.servicesDescription}</Text>
    </View>
  </View>
)

export default ServiceDescription
