import React from 'react'

interface IProps {
  largeDomain : string,
  onLargeDomainChange : (newLargeDomain : string) => void,
  onSubmit : () => void,
  disabled : boolean,
  errorMessage : string | null
}

const _SmallDomainForm : React.FC<IProps> = ({
  largeDomain,
  onLargeDomainChange,
  onSubmit,
  disabled,
  errorMessage
}) => {
  const handleFormSubmission : React.FormEventHandler = event => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <article className="text-left prose prose-stone dark:prose-invert">
      <h3 className="font-normal m-0">Do the magic... make your SmallDomain</h3>
      <p>
        SmallDomains is a <a href="https://en.wikipedia.org/wiki/URL_shortening">URL Shortner service</a>. Enter whichever URL you would like to shorten.
      </p>
      <hr className="mt-7 mb-7"/>
      <h5 className="m-0 mb-3">Which URL would you like to shorten today?</h5>
      <form onSubmit={handleFormSubmission}>
        <input className="rounded p-1 text-slate-700"
          type="text" value={largeDomain} onChange={event => onLargeDomainChange(event.target.value)} placeholder="Type any URL here" disabled={disabled}
        />
        <button className="block mt-3 text-sm p-2 rounded bg-blue-500 hover:bg-blue-700 hover:cursor-pointer
          disabled:bg-gray-50 disabled:border-black disabled:cursor-not-allowed disabled:text-slate-500" type="submit"
          disabled={disabled}
        >
          Shorten URL
        </button>
      </form>
      { 
        errorMessage !== null && 
        <>
          <hr className="mt-7 mb-7"/>
          <div>{ errorMessage }</div>
        </>
      }
  </article>
  )
}

export default _SmallDomainForm