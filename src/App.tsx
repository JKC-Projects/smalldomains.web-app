import React from 'react'
import { SmallDomain } from './types/SmallDomains'
import Header from './components/Header/Header'
import SmallDomainCreator from './components/SmallDomainCreator/_SmallDomainCreator'
import SmallDomainsDisplay from './components/SmallDomainsDisplay'

const sampleData : SmallDomain[] = [
  {
    "smallDomain": "1",
    "largeDomain": "https://google.com",
    "createdAt": 1660736048,
    "expiringAt": 1692272048
  },
  {
    "smallDomain": "2",
    "largeDomain": "https://google.com",
    "createdAt": 1660736048,
    "expiringAt": 1692272048
  },
  {
    "smallDomain": "3",
    "largeDomain": "https://google.com",
    "createdAt": 1660736048,
    "expiringAt": 1692272048
  },
  {
    "smallDomain": "4",
    "largeDomain": "https://google.com",
    "createdAt": 1660736048,
    "expiringAt": 1692272048
  },
  {
    "smallDomain": "5",
    "largeDomain": "https://google.com",
    "createdAt": 1660736048,
    "expiringAt": 1692272048
  },
  {
    "smallDomain": "6",
    "largeDomain": "https://google.com",
    "createdAt": 1660736048,
    "expiringAt": 1692272048
  },
  {
    "smallDomain": "7",
    "largeDomain": "https://google.com",
    "createdAt": 1660736048,
    "expiringAt": 1692272048
    },
  {
    "smallDomain": "8",
    "largeDomain": "https://google.com",
    "createdAt": 1660736048,
    "expiringAt": 1692272048
  },
  {
    "smallDomain": "9",
    "largeDomain": "https://google.com",
    "createdAt": 1660736048,
    "expiringAt": 1692272048
  },
  {
    "smallDomain": "10",
    "largeDomain": "https://google.com",
    "createdAt": 1660736048,
    "expiringAt": 1692272048
  },
  {
    "smallDomain": "11",
    "largeDomain": "https://google.com",
    "createdAt": 1660736048,
    "expiringAt": 1692272048
  },
  {
    "smallDomain": "12",
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
        <SmallDomainsDisplay smallDomains={sampleData} />
      </div>
    </div>
  );
}

export default App
