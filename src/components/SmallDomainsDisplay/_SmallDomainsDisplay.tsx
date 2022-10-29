import React from 'react'
import { default as usePages } from './_usePages'
import { default as SmallDomainsDisplayPage } from './_SmallDomainsDisplayPage/_SmallDomainsDisplayPage'
import { default as SmallDomainsPageHeader } from './_SmallDomainsPageHeader/_SmallDomainsPageHeader'

import { SmallDomain } from '../../types/SmallDomains'
import { LocalSmallDomainsContext, LocalSmallDomainsManager } from '../Contexts/LocalSmallDomainsContextProvider'

interface IProps {
  noDomainsPerPage? : number
}

const _SmallDomainsDisplay : React.FC<IProps> = ({
  noDomainsPerPage = 5
}) => {
  const { smallDomains, hasSmallDomainBeenCreatedAtLeastOnce} : LocalSmallDomainsManager = React.useContext(LocalSmallDomainsContext)
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

  React.useEffect(goToFirstPage, [smallDomains, goToFirstPage])

  return <div className='w-11/12 xl:w-[50vw]'>
    <SmallDomainsPageHeader currPage={currPage} lastPage={lastPage} prevPageEnabled={canGoToPrevPage} nextPageEnabled={canGoToNextPage} onPrevPageClicked={goToPrevPage} onNextPageClicked={goToNextPage}/>
    <SmallDomainsDisplayPage smallDomains={getCurrElements(smallDomains, currPage)} hasSmallDomainBeenCreatedAtLeastOnce={hasSmallDomainBeenCreatedAtLeastOnce && currPage === 1}/>
  </div>
}

export default _SmallDomainsDisplay