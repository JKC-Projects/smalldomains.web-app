import React from 'react'
import useLocalSmallDomains from './_useStoredSmallDomains'
import LocalSmallDomainsManager from './LocalSmallDomainManager'

interface LocalSmallDomainsContextProviderProps {
  children : React.ReactNode 
}

const LocalSmallDomainsContext = React.createContext<LocalSmallDomainsManager>({
  // temp values that will be immediately overriden
  smallDomains : [],
  storeNewSmallDomain : () => {},
  hasSmallDomainBeenCreatedAtLeastOnce : false
})

const LocalSmallDomainsContextProvider : React.FC<LocalSmallDomainsContextProviderProps> = ({children}) => {
  return <LocalSmallDomainsContext.Provider value={useLocalSmallDomains()}>
    { children }
  </LocalSmallDomainsContext.Provider>
}

export {
  LocalSmallDomainsContext,
  LocalSmallDomainsContextProvider
}