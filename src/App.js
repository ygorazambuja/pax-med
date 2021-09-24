import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import React, { useState } from 'react'
import MyDocument from './document'

import { estados } from './db/brStates.json'
import ReactInputMask from 'react-input-mask'
import {
  getOnlyCitiesForTheSelectedStates,
  isAValidState
} from './utils/states'
import Row from './components/Row'
import Column from './components/Column'
import { uniqueId } from 'lodash'

function App() {
  const [contractorName, setContractorName] = useState('')
  const [contractorCpf, setContractorCpf] = useState('')
  const [contractorAddress, setContractorAddress] = useState('')
  const [contractorCity, setContractorCity] = useState('')
  const [contractorState, setContractorState] = useState('')
  const [contractorRG, setContractorRG] = useState('')
  const [contractorPhone, setContractorPhone] = useState('')
  const [parentDegree, setParentDegree] = useState('')
  const [death, setDeath] = useState('')

  const [deceasedName, setDeceasedName] = useState('')
  const [placeOfDeath, setPlaceOfDeath] = useState('')
  const [gender, setGender] = useState('')
  const [deathDate, setDeathDate] = useState('')
  const [associate, setAssociate] = useState('')

  const [servicesDate, setServicesDate] = useState('')
  const [services, setServices] = useState([])

  const returnDocument = () => {
    return (
      <MyDocument
        contractorName={contractorName}
        contractorCpf={contractorCpf}
        contractorAddress={contractorAddress}
        parentDegree={parentDegree}
        contractorRG={contractorRG}
        contractorCity={contractorCity}
        contractorState={contractorState}
        contractorPhone={contractorPhone}
        deceasedName={deceasedName}
        placeOfDeath={placeOfDeath}
        gender={gender}
        deathDate={deathDate}
        associate={associate}
        death={death}
        services={services}
        servicesDate={servicesDate}
      />
    )
  }

  const cleanupForm = () => {
    setContractorName('')
    setContractorCpf('')
    setContractorAddress('')
    setContractorCity('')
    setContractorState('')
    setContractorRG('')
    setContractorPhone('')
    setParentDegree('')
    setDeceasedName('')
    setPlaceOfDeath('')
    setGender('')
    setDeathDate('')
    setAssociate('')
    setDeath('')

    setServicesDate('')

    setServices([])
  }

  const handleServiceChange = (index, target) => {
    const serviceWhereIdEqualToIndex = returnTheServiceInPositionWhereIdEqualTo(
      index
    )
    const newServices = services.map(service => {
      if (service.id === serviceWhereIdEqualToIndex.id) {
        return {
          ...service,
          [target.name]: target.value
        }
      }
      return service
    })
    setServices(newServices)
  }

  const returnTheServiceInPositionWhereIdEqualTo = index =>
    services.filter(service => service.id === index)?.[0]

  const addNewServiceLine = () =>
    setServices([...services, { description: '', value: 0, id: uniqueId() }])

  const removeServiceLine = index => {
    const newServices = services.filter(service => service.id !== index)
    setServices(newServices)
  }

  return (
    <div className="container-fluid" style={{ height: '100vh' }}>
      <Row>
        <div className="col-sm-12 col-md-6 mx-md-4 mb-sm-2">
          <h5 className="my-2">Dados do Contratante</h5>
          <div className="form-floating my-1">
            <input
              placeholder="Nome"
              value={contractorName}
              onChange={e => setContractorName(e.target.value)}
              className="form-control "
            />
            <label>Nome</label>
          </div>
          <Row>
            <Column>
              <div className="form-floating my-1">
                <input
                  className="form-control my-1"
                  placeholder="Endereço"
                  value={contractorAddress}
                  onChange={e => setContractorAddress(e.target.value)}
                />
                <label>Endereço</label>
              </div>
            </Column>
            <Column>
              <Row>
                <Column>
                  <div className="form-floating my-1">
                    <input
                      placeholder="RG"
                      className="form-control my-1"
                      value={contractorRG}
                      onChange={e => setContractorRG(e.target.value)}
                    />
                    <label>RG</label>
                  </div>
                </Column>
                <Column>
                  <div className="form-floating my-1">
                    <ReactInputMask
                      placeholder="CPF"
                      value={contractorCpf}
                      mask={'999.999.999-99'}
                      className="form-control my-1"
                      onChange={e => setContractorCpf(e.target.value)}
                    />
                    <label>CPF</label>
                  </div>
                </Column>
              </Row>
            </Column>
          </Row>
          <Row>
            <Column>
              <Row>
                <Column>
                  <div className="form-floating my-1">
                    <ReactInputMask
                      className="form-control my-1"
                      placeholder="Telefone"
                      value={contractorPhone}
                      mask={'(99) 99999-9999'}
                      onChange={e => setContractorPhone(e.target.value)}
                    />
                    <label>Telefone</label>
                  </div>
                </Column>
                <Column>
                  <div className="form-floating my-1">
                    <input
                      className="form-control my-1"
                      placeholder="Estado"
                      value={contractorState}
                      list="states"
                      onChange={e => setContractorState(e.target.value)}
                    />
                    <label>Estado</label>
                  </div>

                  <datalist id="states">
                    {estados.map(estado => (
                      <option key={estado.sigla} value={estado.nome}>
                        {estado.nome}
                      </option>
                    ))}
                  </datalist>
                </Column>
              </Row>
            </Column>
            <Column>
              <Row>
                <Column>
                  <div className="form-floating my-1">
                    <input
                      disabled={!isAValidState(contractorState)}
                      className="form-control my-1"
                      placeholder="Cidade"
                      value={contractorCity}
                      onChange={e => setContractorCity(e.target.value)}
                      list="cities"
                    />
                    <label>Cidade</label>
                  </div>

                  <datalist id="cities">
                    {isAValidState(contractorState) &&
                      getOnlyCitiesForTheSelectedStates(contractorState).map(
                        cidade => (
                          <option key={cidade} value={cidade}>
                            {cidade}
                          </option>
                        )
                      )}
                  </datalist>
                </Column>
                <Column>
                  <div className="row">
                    <div className="col sm-12">
                      <div className="form-floating my-1">
                        <select
                          className="form-select"
                          aria-label="Default"
                          value={parentDegree}
                          onChange={e => setParentDegree(e.target.value)}
                        >
                          <option value="" />

                          <option value="Pai">Pai</option>
                          <option value="Mãe">Mãe</option>
                          <option value="Esposo(a)">Esposo(a)</option>
                          <option value="Filho(a)">Filho(a)</option>
                          <option value="Irmã(o)">Irmã(o)</option>
                          <option value="Sogro(a)">Sogro(a)</option>
                          <option value="Tio(a)">Tio(a)</option>
                          <option value="Avô(ó)">Avô(ó)</option>
                          <option value="Primo(a)">Primo(a)</option>
                          <option value="Cunhado(a)">Cunhado(a)</option>
                          <option value="Outro">Outro</option>
                        </select>
                        <label>Grau de Parentesco</label>
                      </div>
                    </div>
                  </div>
                </Column>
              </Row>
            </Column>
          </Row>

          <h5 className="my-2">Dados do Falecido</h5>
          <div className="form-floating my-1">
            <input
              className="form-control my-1"
              placeholder="Nome"
              value={deceasedName}
              onChange={e => setDeceasedName(e.target.value)}
            />
            <label>Nome</label>
          </div>

          <Row>
            <Column>
              <div className="form-floating my-1">
                <input
                  className="form-control my-1"
                  value={placeOfDeath}
                  placeholder="Local do Falecimento"
                  onChange={e => setPlaceOfDeath(e.target.value)}
                />
                <label>Local do Falecimento</label>
              </div>
            </Column>
            <Column>
              <Row>
                <Column>
                  <div className="form-floating my-1">
                    <input
                      className="form-control my-1"
                      placeholder="Sexo"
                      value={gender}
                      onChange={e => setGender(e.target.value)}
                      list="genderList"
                    />
                    <datalist id="genderList">
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                    </datalist>
                    <label>Sexo</label>
                  </div>
                </Column>
                <Column>
                  <div className="form-floating my-1">
                    <ReactInputMask
                      className="form-control my-1"
                      placeholder="Data do Falecimento"
                      value={deathDate}
                      mask={'99/99/9999'}
                      onChange={e => setDeathDate(e.target.value)}
                    />
                    <label>Data do Falecimento</label>
                  </div>
                </Column>
              </Row>
            </Column>
          </Row>
          <Row>
            <Column>
              <div className="form-floating my-1">
                <input
                  className="form-control my-1"
                  placeholder="Óbito"
                  value={death}
                  onChange={e => setDeath(e.target.value)}
                />
                <label>Óbito</label>
              </div>
            </Column>
            <Column>
              <div className="form-floating my-1">
                <input
                  className="form-control my-1"
                  placeholder="Associado"
                  value={associate}
                  onChange={e => setAssociate(e.target.value)}
                />
                <label>Associado</label>
              </div>
            </Column>
          </Row>
          <Row>
            <h5 className="my-2">Descrição dos Serviços</h5>
          </Row>

          {services.map(service => (
            <Row key={service.id}>
              <Column>
                <div className="form-floating my-1">
                  <input
                    name="description"
                    className="form-control my-1"
                    placeholder="Descrição"
                    value={service.description}
                    onChange={({ target }) =>
                      handleServiceChange(service.id, target)
                    }
                  />
                  <label>Serviço</label>
                </div>
              </Column>
              <Column>
                <Row>
                  <Column>
                    <div className="form-floating my-1">
                      <input
                        name="value"
                        className="form-control my-1"
                        placeholder="Valor"
                        type="number"
                        value={service.value}
                        onChange={({ target }) =>
                          handleServiceChange(service.id, target)
                        }
                      />
                      <label>Valor</label>
                    </div>
                  </Column>
                  <Column>
                    <div className="my-1 d-grid p-2">
                      <button
                        className="btn btn-danger"
                        onClick={() => removeServiceLine(service.id)}
                      >
                        Excluir
                      </button>
                    </div>
                  </Column>
                </Row>
              </Column>
            </Row>
          ))}

          <Row>
            <Column>
              <div className="form-floating my-1">
                <ReactInputMask
                  className="form-control my-1"
                  placeholder="Data Atual"
                  type="text"
                  mask={'99/99/9999'}
                  value={servicesDate}
                  onChange={({ target }) => {
                    console.log(target.value)
                    setServicesDate(target.value)
                  }}
                />
                <label>Data Atual</label>
              </div>
            </Column>
            <Column>
              <div className="d-grid my-1 p-2">
                <button
                  className="btn btn-outline-dark"
                  onClick={addNewServiceLine}
                >
                  Adicionar novo serviço
                </button>
              </div>
            </Column>
          </Row>
          <Row className="row justify-content-center">
            <div className="d-grid col-sm-12 col-md-6 my-2 mx-auto">
              <button className="btn btn-primary" onClick={cleanupForm}>
                Limpar Formulario
              </button>
            </div>
            <div className="d-grid col-sm-12 col-md-6 my-2 mx-auto">
              <PDFDownloadLink
                document={returnDocument()}
                className="btn btn-success"
              >
                Baixar Arquivo
              </PDFDownloadLink>
            </div>
          </Row>
        </div>
        <Column className="col sm-12 md-6">
          <PDFViewer style={{ height: '95vh', width: '100%' }}>
            {returnDocument()}
          </PDFViewer>
        </Column>
      </Row>
    </div>
  )
}

export default App
