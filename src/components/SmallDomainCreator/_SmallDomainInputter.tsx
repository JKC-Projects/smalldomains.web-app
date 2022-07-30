import React from 'react'
import WaitingCard from '../MagicCards/WaitingCard/WaitingCard'

interface IProps {
  largeDomain : string
  onChangeOfLargeDomain : (event : React.ChangeEvent<HTMLInputElement>) => void
  onSubmit : (event : React.ChangeEvent<HTMLButtonElement>) => void
  disabled : boolean
}

const SmallDomainInputter = ({
  largeDomain,
  onChangeOfLargeDomain,
  onSubmit,
  disabled
} : IProps) => (
  <WaitingCard>
      <article className="text-left prose prose-stone dark:prose-invert">
        <h3 className="font-normal m-0 mb-3">Do the magic... make your SmallDomain</h3>
        <p>
          SmallDomains is a <a href="https://en.wikipedia.org/wiki/URL_shortening">URL Shortner service</a>. Enter whichever URL you would like to shorten.
        </p>
        <hr className="mt-0 mb-7"/>
        <h5 className="m-0 mb-3">Which URL would you like to shorten today?</h5>
        <form>
          <input className="rounded p-1 text-slate-700"
            type="text" value={largeDomain} onChange={onChangeOfLargeDomain} placeholder="Type any URL here" disabled={disabled}
          />
          <button className="block mt-3 text-sm p-2 rounded bg-blue-500 hover:bg-blue-700 hover:cursor-pointer
            disabled:bg-gray-50 disabled:border-black disabled:cursor-not-allowed disabled:text-slate-500" type="button"
            onSubmit={onSubmit} disabled={disabled}
          >
            Shorten URL
          </button>
        </form>
      </article>
  </WaitingCard>
)

export default SmallDomainInputter;