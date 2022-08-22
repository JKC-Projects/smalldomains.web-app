import React from 'react'
import { SmallDomain } from '../../../../types/SmallDomains'
import { ArrowRightIcon } from '@heroicons/react/outline'

import './_SmallDomainInfo.css'

const FRIENDLY_FORWARDER_URL : string = process.env.REACT_APP_SMALL_DOMAINS_FORWARDER_USER_FRIENDLY_URL

const getExpiryString = (smallDomain: SmallDomain) => {
  const stringifyDate = (d: Date) : string => `${d.toLocaleString('default', {month: 'long'})} ${d.getDay()}, ${d.getFullYear()} | ${d.getHours()}:${d.getMinutes()}`
  const date = new Date(smallDomain.expiringAt * 1000)
  return stringifyDate(date)
}

interface IProps {
  smallDomainObj : SmallDomain
}

const _SmallDomainInfo : React.FC<IProps> = (props) => {
const {
  smallDomain,
  largeDomain,
  createdAt,
  expiringAt
} = props.smallDomainObj

  return (
    <div className="SmallDomainInfo p-5">
      <div>
        <u><a className="text-lg text-blue-900" href={`https://${FRIENDLY_FORWARDER_URL}/${smallDomain}`}>{ `${FRIENDLY_FORWARDER_URL}/${smallDomain}` }</a></u>
      </div>
      <div className="flex justify-between">
        <div className="inline-block">
          <ArrowRightIcon className="h-3 w-3 mr-1 inline"/>
          <p className="text-sm inline">{ largeDomain }</p>
        </div>
        <div>
          <p className="inline">{ `expires ${getExpiryString(props.smallDomainObj)}` }</p>
        </div>
      </div>
    </div>
  )
}

export default _SmallDomainInfo