import React from 'react'
import { Page, Document } from '@react-pdf/renderer'

import Header from './Header'
import Body from './Body'
import DeceasedData from './DeceasedData'
import ServiceDescription from './ServiceDescription'
import Footer from './Footer'

export const MyDocument = props => (
  <Document>
    <Page size="A4">
      <Header />
      <Body {...props} />
      <DeceasedData {...props} />
      <ServiceDescription {...props} />
      <Footer {...props} />
    </Page>
  </Document>
)

export default MyDocument
