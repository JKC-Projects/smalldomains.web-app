import React from 'react'

import Header from './components/Header/Header'
import SmallDomainCreator from './components/SmallDomainCreator'
import SmallDomainsDisplay from './components/SmallDomainsDisplay'

import { getStoredSmallDomains, addListenerOfLocallyStoredSmallDomains } from './api/LocallyStoredSmallDomains'

import { SmallDomain } from './types/SmallDomains'

function App() {
  const [localSmallDomains, setLocalSmallDomains] = React.useState<SmallDomain[]>(getStoredSmallDomains())
  React.useEffect(() => {
    // https://stackoverflow.com/questions/60540985/react-usestate-doesnt-update-in-window-events
    return addListenerOfLocallyStoredSmallDomains(setLocalSmallDomains)}, [])

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
