import React from 'react'

interface PagesReturnType<T> {
  currPage : number,
  lastPage : number,
  canGoToPrevPage : boolean,
  canGoToNextPage : boolean,
  goToPrevPage : () => void,
  goToNextPage : () => void,
  goToFirstPage : () => void,
  getCurrElements : (elements : T[], currPages : number) => T[]
}

const _usePages = <T,>(
  elements : T[],
  noElementsPerPage : number
) : PagesReturnType<T> => {
  const [currPage, setCurrPage] = React.useState(1)
  const getCurrElements = (elements : T[], currPage : number) : T[] => {
    const indexOfFirstCurrElement = noElementsPerPage * (currPage - 1)
    return elements.slice(indexOfFirstCurrElement, indexOfFirstCurrElement + noElementsPerPage)
  }

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

  const goToFirstPage = () => setCurrPage(1)

  return {
    currPage,
    lastPage,
    canGoToPrevPage,
    canGoToNextPage,
    goToPrevPage,
    goToNextPage,
    goToFirstPage,
    getCurrElements
  }
}

export default _usePages