import React from 'react'
import Header from './components/Header'
import WaitingCard from './components/MagicCards/WaitingCard/WaitingCard';

function App() {
  return (
    <div className="App dark">
      <Header />
      <div className="flex flex-col mt-5 items-center w-screen h-screen">
        <WaitingCard >
          <article className="text-left prose prose-stone dark:prose-invert">
            <h3 className="font-normal m-0">Do the magic... make your SmallDomain</h3>
          </article>
          <input type="text"/>
        </WaitingCard>
      </div>
    </div>
  );
}

export default App;
