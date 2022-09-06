import React from 'react'
import { SmallDomain } from '../../../../types/SmallDomains'
import { ArrowRightIcon } from '@heroicons/react/outline'

import './_SmallDomainInfo.css'

const FRIENDLY_FORWARDER_URL : string = process.env.REACT_APP_SMALL_DOMAINS_FORWARDER_USER_FRIENDLY_URL as string

const getExpiryString = (smallDomain: SmallDomain) => {
  const stringifyDate = (d: Date) : string => `${d.toLocaleString('default', {month: 'long'})} ${d.getDate()}, ${d.getFullYear()} | ${d.toLocaleTimeString('default', {hour: '2-digit', minute: '2-digit'})}`
  const date = new Date(smallDomain.expiringAt * 1000)
  return stringifyDate(date)
}

const getTrimmedLargeDomain = (largeDomain : string) => {
  const MAX_CHARS = 22
  if(largeDomain.length <= MAX_CHARS) {
    return largeDomain
  } else {
    return largeDomain.slice(0, MAX_CHARS) + "..."
  }
}

interface IProps {
  smallDomainObj : SmallDomain,
  flashing? : boolean
}

const _SmallDomainInfo : React.FC<IProps> = ({
  smallDomainObj,
  flashing = false
}) => {
const {
  smallDomain,
  largeDomain
} = smallDomainObj

  return (
    <div className={`SmallDomainInfo p-5 ${flashing ? "FlashingSmallDomainInfo" : ""}`}>
      <div>
        <u><a className="text-xl text-blue-900" href={`https://${FRIENDLY_FORWARDER_URL}/${smallDomain}`}>{ `${FRIENDLY_FORWARDER_URL}/${smallDomain}` }</a></u>
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="m-1">
          <ArrowRightIcon className="h-3 w-3 mr-2 inline"/>
          <p title={largeDomain} className="text-base inline">{ getTrimmedLargeDomain(largeDomain) }</p>
        </div>
        <i className="text-base">{ `expires ${getExpiryString(smallDomainObj)}` }</i>
      </div>
    </div>
  )
}

export default _SmallDomainInfo