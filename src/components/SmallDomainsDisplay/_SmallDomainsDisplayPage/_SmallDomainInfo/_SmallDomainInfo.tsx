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
      <div className="flex justify-between content-center flex-wrap">
        <div className="m-1 flex content-center w-10/12 md:w-7/12">
          <div className="flex mr-3">
            <ArrowRightIcon className="h-3 w-3 m-auto"/>
          </div>
          <p title={largeDomain} className="whitespace-nowrap text-ellipsis overflow-hidden">{ largeDomain }</p>
        </div>
        <div className="flex">
          <i className="m-auto text-slate-500">{ `expires ${getExpiryString(smallDomainObj)}` }</i>
        </div>
      </div>
    </div>
  )
}

export default _SmallDomainInfo