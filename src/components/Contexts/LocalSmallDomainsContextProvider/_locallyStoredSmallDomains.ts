import { SmallDomain } from '../../../types/SmallDomains'
import { areWeRunningOnClientSide } from '../../../internetApi/utils'

const SMALL_DOMAIN_KEY = 'smalldomains'

const getStoredSmallDomains  = () : SmallDomain[] => {
  if(areWeRunningOnClientSide() === false) {
    console.error("detected that we are not being run client-side... so we will not run")
    return []
  }

  const stored = localStorage.getItem(SMALL_DOMAIN_KEY)

  if(stored) {
    return JSON.parse(stored)
  }

  localStorage.setItem(SMALL_DOMAIN_KEY, '[]')
  return []
}

const storeNewSmallDomain = (toAdd: SmallDomain): void => {
  if(areWeRunningOnClientSide() === false) {
    console.error("detected that we are not being run client-side... so we will not run")
    return
  }

  const currStoredSmallDomains = getStoredSmallDomains()
  const newStoredSmallDomains = [
    toAdd, 
    ...currStoredSmallDomains
  ]
  
  localStorage.setItem(SMALL_DOMAIN_KEY, JSON.stringify(newStoredSmallDomains))
}

export {
  getStoredSmallDomains,
  storeNewSmallDomain
}