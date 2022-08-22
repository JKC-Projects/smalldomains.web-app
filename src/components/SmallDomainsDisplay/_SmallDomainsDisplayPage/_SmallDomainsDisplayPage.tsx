import React from 'react'
import { SmallDomain } from '../../../types/SmallDomains'
import { default as NoSmallDomainInfo } from './_NoSmallDomainInfo/_NoSmallDomainInfo'
import { default as SmallDomainInfo } from './_SmallDomainInfo/_SmallDomainInfo'
import './_SmallDomainsDisplayPage.css'

interface IProps {
  smallDomains : SmallDomain[]
}

const _SmallDomainsDisplayPage : React.FC<IProps> = (props) => {
  return <div className="w-[70vw]">
      <ul className="PageList">
      { 
        props.smallDomains.length === 0
          ? <NoSmallDomainInfo />
          : props.smallDomains.map(sd => <li key={sd.smallDomain}>
              <SmallDomainInfo smallDomainObj={sd} />
            </li>)
      }
    </ul>
</div>
}

export default _SmallDomainsDisplayPage