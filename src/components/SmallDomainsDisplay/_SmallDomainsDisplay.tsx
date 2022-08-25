import React from 'react'
import { default as usePages } from './_usePages'
import { default as SmallDomainsDisplayPage } from './_SmallDomainsDisplayPage/_SmallDomainsDisplayPage'
import { default as SmallDomainsPageHeader } from './_SmallDomainsPageHeader/_SmallDomainsPageHeader'

import { addListenerOfLocallyStoredSmallDomains } from '../../api/LocallyStoredSmallDomains' 

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
    currPage,
    lastPage,
    canGoToPrevPage,
    canGoToNextPage,
    goToPrevPage,
    goToNextPage,
    goToFirstPage,
    getCurrElements
  } = usePages<SmallDomain>(smallDomains, noDomainsPerPage)

  const [hasSmallDomainBeenCreatedAtLeastOnce, setHasSmallDomainBeenCreatedAtLeastOnce] = React.useState<boolean>(false)

  React.useEffect(() => {
    addListenerOfLocallyStoredSmallDomains(() => {
      goToFirstPage()
      setHasSmallDomainBeenCreatedAtLeastOnce(true)
    })
  })

  return <div>
    <SmallDomainsPageHeader currPage={currPage} lastPage={lastPage} prevPageEnabled={canGoToPrevPage} nextPageEnabled={canGoToNextPage} onPrevPageClicked={goToPrevPage} onNextPageClicked={goToNextPage}/>
    <SmallDomainsDisplayPage smallDomains={getCurrElements(smallDomains, currPage)} hasSmallDomainBeenCreatedAtLeastOnce={hasSmallDomainBeenCreatedAtLeastOnce && currPage === 1}/>
  </div>
}

export default _SmallDomainsDisplay