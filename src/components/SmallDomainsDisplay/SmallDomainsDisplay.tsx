import React from 'react'
import { SmallDomain } from '../../types/SmallDomains'
import { ArrowRightIcon } from '@heroicons/react/outline'

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

}

const SmallDomainsDisplay : React.FC<IProps> = () => {
  const {
    smallDomain,
    largeDomain,
    createdAt,
    expiringAt
  } = sampleData;
  
  return (
    <div className="bg-amber-200 border-4 border-orange-600 w-[70vw] p-5 rounded-md">
      <div>
        <a href={`https://${FRIENDLY_FORWARDER_URL}/${smallDomain}`}>{ `${FRIENDLY_FORWARDER_URL}/${smallDomain}` }</a>
      </div>
      <div className="flex justify-between">
        <div className="inline-block">
          <ArrowRightIcon className="h-5 w-5 mr-3 inline align-middle"/>
          <p className="inline">{ largeDomain }</p>
        </div>
        <div>
          <p className="inline">{ `expires ${getExpiryString(sampleData)}` }</p>
        </div>
      </div>
    </div>
  )
}

export default SmallDomainsDisplay