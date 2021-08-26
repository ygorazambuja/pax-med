import React from 'react'
import { Page, Text, View, Document } from '@react-pdf/renderer'

export const MyDocument = ({ ...props }) => (
  <Document>
    <Page size="A4">
      <Header />
      <Body {...props} />
      <DeceasedData {...props} />
      <ServiceDescription {...props} />
      <Footer />
    </Page>
  </Document>
)

const Header = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: '35px'
    }}
  >
    <View style={{ flexDirection: 'column' }}>
      <Text>Logo</Text>
    </View>
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Text style={{ fontSize: '10px' }}>
        AV. MANOEL ALVES DE MORAIS JR, 699 - CENTRO
      </Text>
      <Text style={{ fontSize: '10px' }}>
        CEP. 79410-000 - PEDRO GOMES - MS
      </Text>
      <Text style={{ fontSize: '10px' }}>CNPJ 03.812.277/0001-07</Text>
      <Text style={{ fontSize: '10px' }}>FONE: (67) 3230-1111</Text>
    </View>
  </View>
)

const Body = ({ ...props }) => (
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
          <Text>Nome: {props.contractorName}</Text>
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

const DeceasedData = ({ ...props }) => (
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
          <Text>Data: {props.contractorRG}</Text>
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

const ServiceDescription = ({ ...props }) => (
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
      <Text style={{ fontSize: '10px' }}>Total: R$ {props.servicesValue}</Text>
    </View>
  </View>
)

const Footer = ({ ...props }) => (
  <View style={{ marginHorizontal: '25px' }}>
    <Text style={{ fontSize: '10px' }}>
      {props.actualDate}
      Pedro Gomes - MS, 25 de Agosto de 2021
    </Text>
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

export default MyDocument
