import React from 'react'
import { SmallDomain } from './types/SmallDomains'
import SmallDomainsDisplayPage from './components/SmallDomainsDisplay/_SmallDomainsDisplayPage/_SmallDomainsDisplayPage'
import Header from './components/Header/Header'
import SmallDomainCreator from './components/SmallDomainCreator/SmallDomainCreator'
import SmallDomainInfo from './components/SmallDomainsDisplay/_SmallDomainsDisplayPage/_SmallDomainInfo/_SmallDomainInfo';

const sampleData : SmallDomain[] = [
  {
  "smallDomain": "0awieTa",
  "largeDomain": "https://google.com",
  "createdAt": 1660736048,
  "expiringAt": 1692272048
  },
  {
    "smallDomain": "999999",
    "largeDomain": "https://google.com",
    "createdAt": 1660736048,
    "expiringAt": 1692272048
  },
  {
    "smallDomain": "999991",
    "largeDomain": "https://google.com",
    "createdAt": 1660736048,
    "expiringAt": 1692272048
  }
]

function App() {
  return (
    <div className="App dark">
      <Header />
      <div className="flex flex-col mt-5 items-center">
        <SmallDomainCreator />
        <SmallDomainsDisplayPage smallDomains={sampleData} />
      </div>
    </div>
  );
}

export default App
