import React from 'react'

import Header from '../src/components/Header'
import SmallDomainCreator from '../src/components/SmallDomainCreator'
import SmallDomainsDisplay from '../src/components/SmallDomainsDisplay'

const App = () => <div className="App dark">
  <Header />
  <div className="flex flex-col w-full mt-5 items-center">
    <SmallDomainCreator />
    <SmallDomainsDisplay />
  </div>
</div>

export default App
