import React from 'react'
import { SmallDomain } from '../../../../types/SmallDomains'
import { ArrowRightIcon } from '@heroicons/react/outline'

import './_SmallDomainInfo.css'

const FRIENDLY_FORWARDER_URL : string = process.env.REACT_APP_SMALL_DOMAINS_FORWARDER_USER_FRIENDLY_URL

const sampleData : SmallDomain = {
  "smallDomain": "0awieTa",
  "largeDomain": "https://google.com",
  "createdAt": 1660736048,
  "expiringAt": 1692272048
}

const getExpiryString = (smallDomain: SmallDomain) => {
  const stringifyDate = (d: Date) : string => `${d.toLocaleString('default', {month: 'long'})} ${d.getDay()}, ${d.getFullYear()} | ${d.getHours()}:${d.getMinutes()}`
  const date = new Date(smallDomain.expiringAt * 1000)
  return stringifyDate(date)
}

interface IProps {
  smallDomainObj : SmallDomain
}

const SmallDomainInfo : React.FC<IProps> = (props) => {
const {
  smallDomain,
  largeDomain,
  createdAt,
  expiringAt
} = props.smallDomainObj

  return (
    <div className="SmallDomainInfo w-[70vw] p-5">
      <div>
        <a href={`https://${FRIENDLY_FORWARDER_URL}/${smallDomain}`}>{ `${FRIENDLY_FORWARDER_URL}/${smallDomain}` }</a>
      </div>
      <div className="flex justify-between">
        <div className="inline-block">
          <ArrowRightIcon className="h-5 w-5 mr-3 inline align-middle"/>
          <p className="inline">{ largeDomain }</p>
        </div>
        <div>
          <p className="inline">{ `expires ${getExpiryString(props.smallDomainObj)}` }</p>
        </div>
      </div>
    </div>
  )
}

export default SmallDomainInfo