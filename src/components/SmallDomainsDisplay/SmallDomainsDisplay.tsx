import React from 'react'
import { default as SmallDomainsDisplayPage } from './_SmallDomainsDisplayPage/_SmallDomainsDisplayPage'
import { default as SmallDomainsPageHeader } from './_SmallDomainsPageHeader/_SmallDomainsPageHeader'

import { SmallDomain } from './../../types/SmallDomains'

interface IProps {
  smallDomains : SmallDomain[]
}

const SmallDomainsDisplay : React.FC<IProps> = ({
  smallDomains
}) => {
  return <div>
    <SmallDomainsPageHeader currPage={1} lastPage={3} prevPageEnabled={true} nextPageEnabled={false} onPrevPageClicked={()=>{}} onNextPageClicked={()=>{}}/>
    <SmallDomainsDisplayPage smallDomains={smallDomains}/>
  </div>
}

export default SmallDomainsDisplay