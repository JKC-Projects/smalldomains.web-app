import { SmallDomain } from '../types/SmallDomains'

const SMALL_DOMAIN_KEY = 'smalldomains'
const UPDATED_SMALL_DOMAIN_EVENT_NAME = 'updatedSmallDomains'

const createUpdatedSmallDomainsEvent = () => new Event(UPDATED_SMALL_DOMAIN_EVENT_NAME)

const getStoredSmallDomains  = () : SmallDomain[] => {
  if(typeof window === undefined) {
    const stored = localStorage.getItem(SMALL_DOMAIN_KEY)

    if(stored) {
      return JSON.parse(stored)
    }

    localStorage.setItem(SMALL_DOMAIN_KEY, '[]')
    return []
  }

  // error: if this point reached, then we're not on client-side
  console.error("detected that we are not being run client-side... so we will not run")
  return []
}

const storeNewSmallDomain = (toAdd: SmallDomain): void => {
  if(typeof window === undefined) {
    console.error("detected that we are not being run client-side... so we will not run")
    return
  }

  const currStoredSmallDomains = getStoredSmallDomains()
  const newStoredSmallDomains = [
    toAdd, 
    ...currStoredSmallDomains
  ]
  
  localStorage.setItem(SMALL_DOMAIN_KEY, JSON.stringify(newStoredSmallDomains))
  window.dispatchEvent(createUpdatedSmallDomainsEvent())
}

/**
 * 
 * @param listenerToAdd the function to be invoked when there is an update to smallDomain localStorage
 * @returns a callback function. When invoked, it will remove the function as a listener
 */
const addListenerOfLocallyStoredSmallDomains = (
  listenerToAdd: (smallDomains: SmallDomain[]) => void
) : (() => void) => {
  if(typeof window === undefined) {
    console.error("detected that we are not being run client-side... so we will not run")
    return () => {}
  }

  const eventHandler = (_: Event) => listenerToAdd(getStoredSmallDomains())
  window.addEventListener(UPDATED_SMALL_DOMAIN_EVENT_NAME, eventHandler)
  return () => window.removeEventListener(UPDATED_SMALL_DOMAIN_EVENT_NAME, eventHandler)
}

export {
  getStoredSmallDomains,
  storeNewSmallDomain,
  addListenerOfLocallyStoredSmallDomains
}