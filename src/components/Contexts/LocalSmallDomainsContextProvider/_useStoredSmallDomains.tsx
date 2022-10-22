import React from 'react'
import { getStoredSmallDomains, storeNewSmallDomain as storeNewSmallDomainInLocalStorage } from './_locallyStoredSmallDomains'
import { SmallDomain } from '../../../types/SmallDomains'
import LocalSmallDomainsManager from './LocalSmallDomainManager'

const useLocalSmallDomains : () => LocalSmallDomainsManager = () => {
  const [smallDomains, setSmallDomains] = React.useState<SmallDomain[]>([])

  // set initial state using useEffect. Guarantee that this runs client-side and avoids NextJS hydration errors
  React.useEffect(() => setSmallDomains(getStoredSmallDomains()), [])
  const [hasSmallDomainBeenCreatedAtLeastOnce, setHasSmallDomainBeenCreatedAtLeastOnce] = React.useState<boolean>(false)

  const storeNewSmallDomain = (toAdd: SmallDomain) => {
    console.log("success")
    storeNewSmallDomainInLocalStorage(toAdd)
    setSmallDomains(getStoredSmallDomains())
    setHasSmallDomainBeenCreatedAtLeastOnce(true)
  }

  return {
    smallDomains,
    storeNewSmallDomain,
    hasSmallDomainBeenCreatedAtLeastOnce
  }
}

export default useLocalSmallDomains