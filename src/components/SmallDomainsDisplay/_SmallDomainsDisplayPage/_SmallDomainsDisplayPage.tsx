import React from 'react'
import { SmallDomain } from '../../../types/SmallDomains'
import SmallDomainInfo from './_SmallDomainInfo/_SmallDomainInfo'
import './_SmallDomainsDisplayPage.css'

interface IProps {
  smallDomains : SmallDomain[]
}

const _SmallDomainsDisplayPage : React.FC<IProps> = (props) => {
  return <div className="w-[70vw]">
      <div className="PageHeader">
      <article className="text-left prose prose-zinc dark:prose-invert p-3">
        <h2 className="font-normal">Your Small Domains</h2>
      </article>
      </div>
      <ul className="PageList">
      { 
        props.smallDomains.map(sd => <li key={sd.smallDomain}>
          <SmallDomainInfo smallDomainObj={sd} />
        </li>)
      }
    </ul>
</div>
}

export default _SmallDomainsDisplayPage