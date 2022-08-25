import React from 'react'
import { BaseCard } from '../MagicCards'

const SmallDomainDoesNotExist = () => <BaseCard additionalClassNames="flex justify-center">
  <article className="prose prose-stone dark:prose-invert">
    <h1 className="text-center text-5xl mb-2">404</h1>
    <h2 className="font-normal text-center mt-0 mb-5">SmallDomain does not exist</h2>
    <hr className="mb-5"/>
    <h3 className="font-normal text-center mt-0">Would you like to create one?</h3>
  </article>
</BaseCard>

export default SmallDomainDoesNotExist