import { Image, StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'

export const Header = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingTop: '15px'
    }}
  >
    <View style={{ flexDirection: 'column' }}>
      <Image src="https://i.imgur.com/2Ra1afy.jpg" style={styles.image} />
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
export default Header

const styles = StyleSheet.create({
  image: {
    objectFit: 'cover',
    width: '200px',
    height: '100px'
  }
})
