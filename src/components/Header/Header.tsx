import React from 'react'
import { generateLoginUrl } from '../../webStorageApi/localAuthInProgress'

const Header = () => (
  <header className="sticky w-full top-0 z-50 bg-gray-300 dark:bg-slate-700 shadow-lg p-7">
    <div className="flex justify-center items-center">
      <article className="text-center prose prose-stone dark:prose-invert">
        <h1 className="font-medium m-0">SmallDomains</h1>
        <p className="text-sm m-2">Making your domains... small</p>
      </article>
    </div>
    <div className="flex justify-center">
      <article className="flex flex-col items-center prose prose-stone dark:prose-invert grow">
        <hr className="m-0 mt-2 text-slate-50 bg-slate-50 h-px border-none w-11/12" />
        <p className="text-sm mt-3 text-center">Powered by AWS, Typescript, React, Go, Java (Spring Webflux), Terraform, GitHub Actions</p>
        <a className="text-sm" href="https://github.com/orgs/JKC-Projects/repositories">Click here to see the source code</a>
      </article>
    </div>
    <button onClick={() => {
      const loginUrl : URL = generateLoginUrl()
      console.log(loginUrl)
      location.href = loginUrl.toString()
    }}>
      Log in
    </button>
  </header>
)

export default Header