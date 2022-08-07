import React from 'react'
import { createSmallDomain } from '../../api/SmallDomainsApi'
import { SmallDomain } from '../../types/SmallDomains'
import WaitingCard from '../MagicCards/WaitingCard/WaitingCard'

const SmallDomainCreator = () => {
  const [largeDomain, setLargeDomain] = React.useState<string>('');
  const [errorMessage, setErrorMessage] = React.useState<string>('')
  const [disabled, setDisabled] = React.useState<boolean>(false);

  const handleFormSubmission : React.FormEventHandler = event => {
    event.preventDefault()
    if(!largeDomain.trim()) {
      setErrorMessage("Please enter the URL you want to shorten")
      return
    }

    const resetComponent = () => {
      setLargeDomain('')
      setDisabled(false)
    }

    const onSuccess = (smallDomain : SmallDomain) => {
      resetComponent()
    }

    const onFailure = (errorMessage : string) => {
      resetComponent()
      setErrorMessage(errorMessage)
    }

    setErrorMessage('')
    setDisabled(true)
    createSmallDomain(largeDomain, onSuccess, onFailure)
  }

  return (
    <WaitingCard>
      <article className="text-left prose prose-stone dark:prose-invert">
        <h3 className="font-normal m-0 mb-3">Do the magic... make your SmallDomain</h3>
        <p>
          SmallDomains is a <a href="https://en.wikipedia.org/wiki/URL_shortening">URL Shortner service</a>. Enter whichever URL you would like to shorten.
        </p>
        <hr className="mt-0 mb-7"/>
        <h5 className="m-0 mb-3">Which URL would you like to shorten today?</h5>
        <form onSubmit={handleFormSubmission}>
          <input className="rounded p-1 text-slate-700"
            type="text" value={largeDomain} onChange={event => setLargeDomain(event.target.value)} placeholder="Type any URL here" disabled={disabled}
          />
          <button className="block mt-3 text-sm p-2 rounded bg-blue-500 hover:bg-blue-700 hover:cursor-pointer
            disabled:bg-gray-50 disabled:border-black disabled:cursor-not-allowed disabled:text-slate-500" type="submit"
            disabled={disabled}
          >
            Shorten URL
          </button>
        </form>
      </article>
  </WaitingCard>
  )
}

export default SmallDomainCreator;