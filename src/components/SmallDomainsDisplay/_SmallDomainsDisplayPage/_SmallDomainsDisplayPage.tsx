import React from 'react'
import { SmallDomain } from '../../../types/SmallDomains'
import { default as NoSmallDomainInfo } from './_NoSmallDomainInfo/_NoSmallDomainInfo'
import { default as SmallDomainInfo } from './_SmallDomainInfo/_SmallDomainInfo'
import './_SmallDomainsDisplayPage.css'

interface IProps {
  smallDomains : SmallDomain[],
  hasSmallDomainBeenCreatedAtLeastOnce : boolean
}

const _SmallDomainsDisplayPage : React.FC<IProps> = ({
  smallDomains,
  hasSmallDomainBeenCreatedAtLeastOnce
}) => {
  const smallDomainObjToSmallDomainInfo = (sd : SmallDomain, index: number) =>
    <li key={sd.smallDomain}>
      <SmallDomainInfo smallDomainObj={sd} flashing={hasSmallDomainBeenCreatedAtLeastOnce && index === 0} />
    </li>

  return <div className="w-[70vw]">
      <ul className="PageList">
      {
        smallDomains.length === 0
          ? <NoSmallDomainInfo />
          : smallDomains.map(smallDomainObjToSmallDomainInfo)
      }
    </ul>
</div>
}

export default _SmallDomainsDisplayPage