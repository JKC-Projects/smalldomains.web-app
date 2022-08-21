import React from 'react'
import { SmallDomain } from '../../../types/SmallDomains'
import SmallDomainInfo from './_SmallDomainInfo/_SmallDomainInfo'
import './_SmallDomainsDisplayPage.css'

interface IProps {
  smallDomains : SmallDomain[]
}

const _SmallDomainsDisplayPage : React.FC<IProps> = (props) => {
  return <ul className="PageList">
    { 
      props.smallDomains.map(sd => <li key={sd.smallDomain}>
        <SmallDomainInfo smallDomainObj={sd} />
      </li>)
    }
  </ul>
}

export default _SmallDomainsDisplayPage