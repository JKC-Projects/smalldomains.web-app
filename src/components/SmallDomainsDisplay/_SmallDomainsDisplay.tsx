import React from 'react'
import { default as usePages } from './_usePages'
import { default as SmallDomainsDisplayPage } from './_SmallDomainsDisplayPage/_SmallDomainsDisplayPage'
import { default as SmallDomainsPageHeader } from './_SmallDomainsPageHeader/_SmallDomainsPageHeader'

import { SmallDomain } from '../../types/SmallDomains'

interface IProps {
  smallDomains : SmallDomain[]
  noDomainsPerPage? : number
}

const _SmallDomainsDisplay : React.FC<IProps> = ({
  smallDomains,
  noDomainsPerPage = 5
}) => {
  const {
    getCurrElements,
    currPage,
    lastPage,
    canGoToPrevPage,
    canGoToNextPage,
    goToPrevPage,
    goToNextPage
  } = usePages<SmallDomain>(smallDomains, noDomainsPerPage)

  return <div>
    <SmallDomainsPageHeader currPage={currPage} lastPage={lastPage} prevPageEnabled={canGoToPrevPage} nextPageEnabled={canGoToNextPage} onPrevPageClicked={goToPrevPage} onNextPageClicked={goToNextPage}/>
    <SmallDomainsDisplayPage smallDomains={getCurrElements(smallDomains, currPage)}/>
  </div>
}

export default _SmallDomainsDisplay