import { vectorIcons } from './utils/IconsBlock'

export const areTwoClickedBlocksSame = (updatedBlocks, clickedBlock) => {
  return clickedBlock[0].vector === clickedBlock[1].vector
}

export const unmarkSelectedBlocksAsClicked = (updatedBlocks) => {
  return updatedBlocks.map((block) => {
    return {
      ...block,
      clicked: false,
    }
  })
}

export const getNewArray = (length) => {
  const newChosenVectors = getVectors(length)
  return Array.from({ length: length }).map((item, idx) => ({
    id: idx,
    clicked: false,
    complete: false,
    vector: newChosenVectors[idx],
  }))
}

export const getVectors = (length) => {
  let newChosenVectors = []

  while (newChosenVectors.length < length / 2) {
    const randomVector = vectorIcons[Math.floor(Math.random() * vectorIcons.length)].vector
    if (newChosenVectors.filter((element) => element === randomVector).length === 0) {
      newChosenVectors.push(randomVector)
    }
  }
  newChosenVectors = [...newChosenVectors, ...newChosenVectors]
  newChosenVectors.sort(() => Math.random() - 0.5)
  return newChosenVectors
}
