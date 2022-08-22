import React from 'react'

import Header from './components/Header/Header'
import SmallDomainCreator from './components/SmallDomainCreator'
import SmallDomainsDisplay from './components/SmallDomainsDisplay'

import { getStoredSmallDomains, addListenerOfLocallyStoredSmallDomains } from './api/LocallyStoredSmallDomains'

import { SmallDomain } from './types/SmallDomains'

function App() {
  const [localSmallDomains, setLocalSmallDomains] = React.useState<SmallDomain[]>(getStoredSmallDomains())
  React.useEffect(() => {
    return addListenerOfLocallyStoredSmallDomains((sd) => {
      setLocalSmallDomains(sd)
      console.log(sd)
    })
  }, [])

  return (
    <div className="App dark">
      <Header />
      <div className="flex flex-col mt-5 items-center">
        <SmallDomainCreator />
        <SmallDomainsDisplay smallDomains={localSmallDomains} />
      </div>
    </div>
  );
}

export default App
