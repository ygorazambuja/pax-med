import { Text, View, StyleSheet } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
  bolder: {
    fontWeight: 'bold'
  }
})

export const Body = ({ ...props }) => (
  <View>
    <View
      style={{
        flex: 1,
        paddingHorizontal: '25px',
        paddingTop: '24px',
        paddingBottom: '8px'
      }}
    >
      <Text style={{ fontSize: '12px', fontWeight: 'bold' }}>
        Dados do Contratante
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
          <Text>Nome: </Text>
          <Text style={styles.bolder}>{props.contractorName}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>CPF: {props.contractorCpf}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Endereço: {props.contractorAddress}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Grau de Parentesco: {props.parentDegree}</Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>RG: {props.contractorRG}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>UF: {props.contractorState}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Cidade: {props.contractorCity}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Telefone: {props.contractorPhone}</Text>
        </View>
      </View>
    </View>
  </View>
)

export default Body
