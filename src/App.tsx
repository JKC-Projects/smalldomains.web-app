import React from 'react'
import Header from './components/Header/Header'
import SmallDomainCreator from './components/SmallDomainCreator/SmallDomainCreator'

function App() {
  return (
    <div className="App dark">
      <Header />
      <div className="flex flex-col mt-5 items-center">
        <SmallDomainCreator />
      </div>
    </div>
  );
}

export default App;
