import React from 'react'

import Header from '../src/components/Header'
import SmallDomainCreator from '../src/components/SmallDomainCreator'
import SmallDomainsDisplay from '../src/components/SmallDomainsDisplay'

import { getStoredSmallDomains, addListenerOfLocallyStoredSmallDomains } from '../src/api/LocallyStoredSmallDomains'

import { SmallDomain } from '../src/types/SmallDomains'

const useSmallDomainsState = () => {
  const [localSmallDomains, setLocalSmallDomains] = React.useState<SmallDomain[]>(getStoredSmallDomains())

  React.useEffect(() => addListenerOfLocallyStoredSmallDomains(setLocalSmallDomains), [])

  return {
    localSmallDomains
  }
}

function App() {
  const { localSmallDomains } = useSmallDomainsState();

  return (
    <div className="App dark">
      <Header />
      <div className="flex flex-col w-full mt-5 items-center">
        <SmallDomainCreator />
        <SmallDomainsDisplay smallDomains={localSmallDomains} />
      </div>
    </div>
  );
}

export default App
