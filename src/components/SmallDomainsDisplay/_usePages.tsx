import React from 'react'

interface PagesReturnType<T> {
  currElements : T[],
  currPage : number,
  lastPage : number,
  canGoToPrevPage : boolean,
  canGoToNextPage : boolean,
  goToPrevPage : () => void,
  goToNextPage : () => void
}

const _usePages = <T,>(
  elements : T[],
  noElementsPerPage : number
) : PagesReturnType<T> => {
  const [currPage, setCurrPage] = React.useState(1)
  const getCurrElements = () : T[] => {
    const indexOfFirstCurrElement = noElementsPerPage * (currPage - 1)
    return elements.slice(indexOfFirstCurrElement, indexOfFirstCurrElement + noElementsPerPage)
  }

  const [currElements, setCurrElements] = React.useState<T[]>(getCurrElements())
  React.useEffect(() => setCurrElements(getCurrElements()), [currPage])

  const lastPage : number = function() {
    const possibleLastPage = Math.ceil(elements.length / noElementsPerPage)
    return possibleLastPage === 0 ? 1 : possibleLastPage 
  }()
  
  const canGoToPrevPage = currPage !== 1 
  const canGoToNextPage = currPage !== lastPage 

  const goToPrevPage = () => {
    if(canGoToPrevPage) {
      setCurrPage(currPage - 1)
    }
  }

  const goToNextPage = () => {
    if(canGoToNextPage) {
      setCurrPage(currPage + 1)
    }
  }

  return {
    currElements,
    currPage,
    lastPage,
    canGoToPrevPage,
    canGoToNextPage,
    goToPrevPage,
    goToNextPage
  }
}

export default _usePages