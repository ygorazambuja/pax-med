import { PDFViewer } from '@react-pdf/renderer'
import React, { useState } from 'react'
import MyDocument from './Document'

import { estados } from './brStates.json'

function App() {
  const [contractorName, setContractorName] = useState('')
  const [contractorCpf, setContractorCpf] = useState('')
  const [contractorAddress, setContractorAddress] = useState('')
  const [contractorCity, setContractorCity] = useState('')
  const [contractorState, setContractorState] = useState('')
  const [contractorRG, setContractorRG] = useState('')
  const [contractorPhone, setContractorPhone] = useState('')
  const [parentDegree, setParentDegree] = useState('')
  const [profession, setProfession] = useState('')
  const [death, setDeath] = useState('')

  const [deceasedName, setDeceasedName] = useState('')
  const [placeOfDeath, setPlaceOfDeath] = useState('')
  const [gender, setGender] = useState('')
  const [deathDate, setDeathDate] = useState('')
  const [associate, setAssociate] = useState('')

  const [servicesDescription, setServicesDescription] = useState('')
  const [servicesValue, setServicesValue] = useState('')
  const [servicesDate, setServicesDate] = useState('')

  const isAValidState = () =>
    estados.filter(estado => estado.nome === contractorState)[0]

  const getOnlyCitiesForTheSelectedStates = () => {
    if (!isAValidState) return []
    if (!contractorState) {
      return []
    }
    const cidades = estados.filter(estado => estado.nome === contractorState)[0]
      ?.cidades
    return cidades
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
    setProfession('')
    setDeath('')

    setServicesDescription('')
    setServicesValue('')
    setServicesDate('')
  }

  const downloadForm = () => {}

  return (
    <div className="container-fluid" style={{ height: '100vh' }}>
      <div className="row">
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
          <div className="row">
            <div className="col">
              <div className="form-floating my-1">
                <input
                  placeholder="CPF"
                  value={contractorCpf}
                  className="form-control my-1"
                  onChange={e => setContractorCpf(e.target.value)}
                />
                <label>CPF</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating my-1">
                <input
                  className="form-control my-1"
                  placeholder="Telefone"
                  value={contractorPhone}
                  onChange={e => setContractorPhone(e.target.value)}
                />
                <label>Telefone</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating my-1">
                <input
                  placeholder="RG"
                  className="form-control my-1"
                  value={contractorRG}
                  onChange={e => setContractorRG(e.target.value)}
                />
                <label>RG</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating my-1">
                <input
                  className="form-control my-1"
                  placeholder="Endereço"
                  value={contractorAddress}
                  onChange={e => setContractorAddress(e.target.value)}
                />
                <label>Endereço</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
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
            </div>
            <div className="col">
              <div className="form-floating my-1">
                <input
                  disabled={!isAValidState()}
                  className="form-control my-1"
                  placeholder="Cidade"
                  value={contractorCity}
                  onChange={e => setContractorCity(e.target.value)}
                  list="cities"
                />
                <label>Cidade</label>
              </div>

              <datalist id="cities">
                {isAValidState() &&
                  getOnlyCitiesForTheSelectedStates().map(cidade => (
                    <option key={cidade} value={cidade.toLowerCase()}>
                      {cidade}
                    </option>
                  ))}
              </datalist>
            </div>
          </div>

          <div className="row">
            <div className="col sm-12">
              <div className="form-floating my-1">
                <select
                  className="form-select"
                  aria-label="Default"
                  value={parentDegree}
                  onChange={e => setParentDegree(e.target.value)}
                >
                  <option value=""></option>

                  <option value="Pai">Pai</option>
                  <option value="Mãe">Mãe</option>
                  <option value="Esposo(a)">Esposo(a)</option>
                  <option value="Filho(a)">Filho(a)</option>
                  <option value="Irmã(o)">Irmã(o)</option>
                  <option value="Sogro(a)">Sogro(a)</option>
                </select>
                <label>Grau de Parentesco</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating my-1">
                <input
                  className="form-control my-1"
                  value={profession}
                  placeholder="Profissão"
                  onChange={e => setProfession(e.target.value)}
                />
                <label>Profissão</label>
              </div>
            </div>
          </div>

          <h5 className="my-2">Dados do Falecido</h5>
          <div className="form-floating my-1">
            <input
              className="form-control my-1"
              placeholder="Nome"
              onChange={e => setDeceasedName(e.target.value)}
            />
            <label>Nome</label>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-floating my-1">
                <input
                  className="form-control my-1"
                  value={placeOfDeath}
                  placeholder="Local do Falecimento"
                  onChange={e => setPlaceOfDeath(e.target.value)}
                />
                <label>Local do Falecimento</label>
              </div>
            </div>
            <div className="col">
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
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating my-1">
                <input
                  className="form-control my-1"
                  placeholder="Data do Falecimento"
                  value={deathDate}
                  type="number"
                  onChange={e => setDeathDate(e.target.value)}
                />
                <label>Data do Falecimento</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating my-1">
                <input
                  className="form-control my-1"
                  placeholder="Associado"
                  value={associate}
                  onChange={e => setAssociate(e.target.value)}
                />
                <label>Associado</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating my-1">
                <input
                  className="form-control my-1"
                  placeholder="Óbito"
                  value={death}
                  onChange={e => setDeath(e.target.value)}
                />
                <label>Óbito</label>
              </div>
            </div>
          </div>

          <div className="row">
            <h5 className="my-2">Descrição dos Serviços</h5>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating my-1">
                <input
                  className="form-control my-1"
                  placeholder="Descrição dos Serviços"
                  value={servicesDescription}
                  onChange={e => setServicesDescription(e.target.value)}
                />
                <label>Descrição dos Serviços</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-floating my-1">
                <input
                  className="form-control my-1"
                  placeholder="Valor"
                  type="number"
                  value={servicesValue}
                  onChange={e => setServicesValue(e.target.value)}
                />
                <label>Valor</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating my-1">
                <input
                  className="form-control my-1"
                  placeholder="Data Atual"
                  type="number"
                  value={servicesDate}
                  onChange={e => setServicesDate(e.target.value)}
                />
                <label>Data Atual</label>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="d-grid col-sm-12 col-md-6 my-2 mx-auto">
              <button className="btn btn-primary" onClick={cleanupForm}>
                Limpar Formulario
              </button>
            </div>
            <div className="d-grid col-sm-12 col-md-6 my-2 mx-auto">
              <button className="btn btn-success" onClick={downloadForm}>
                Baixar Arquivo
              </button>
            </div>
          </div>
        </div>
        <div className="col sm-12 md-6">
          <PDFViewer style={{ height: '95vh', width: '100%' }}>
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
              servicesDescription={servicesDescription}
              servicesValue={servicesValue}
              servicesDate={servicesDate}
            />
          </PDFViewer>
        </div>
      </div>
    </div>
  )
}

export default App
