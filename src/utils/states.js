import { estados } from '../db/brStates.json'

export const isAValidState = contractorState =>
  estados.filter(estado => estado.nome === contractorState)[0]

export const getOnlyCitiesForTheSelectedStates = contractorState => {
  if (!isAValidState) return []
  if (!contractorState) {
    return []
  }
  const cidades = estados.filter(estado => estado.nome === contractorState)[0]
    ?.cidades
  return cidades
}
