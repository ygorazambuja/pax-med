import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { transformNumberToBrazilianCoinWithDecimal } from '../utils/moneyFormatter'

const getTotalSumFromServices = services => {
  return services.reduce(
    (sum, service) => Number(Number(sum) + Number(service.value)),
    0
  )
}

export const ServiceDescription = ({ services }) => (
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
      <View style={{ flex: 1 }} />
      <View>
        <Text style={{ fontSize: '10px' }}>
          Total:{' '}
          {transformNumberToBrazilianCoinWithDecimal(
            getTotalSumFromServices(services)
          )}
        </Text>
      </View>
    </View>
    <View style={{ marginHorizontal: '25px', marginBottom: '18px' }}>
      {services.map((service, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row'
          }}
        >
          <Text style={{ fontSize: '11px' }}>{service.description}</Text>
          <View style={{ flex: 1 }} />
          <View>
            <Text style={{ fontSize: '10px' }}>
              {transformNumberToBrazilianCoinWithDecimal(service.value)}
            </Text>
          </View>
        </View>
      ))}
    </View>
  </View>
)

export default ServiceDescription
