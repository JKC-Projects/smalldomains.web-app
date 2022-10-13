import React from 'react'

import { default as ButtonifiedElement } from './_ButtonifiedElement/_ButtonifiedElement'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

import './_SmallDomainsPageHeader.module.css'

interface IProps {
  currPage : number,
  lastPage : number,
  prevPageEnabled : boolean,
  nextPageEnabled : boolean,
  onPrevPageClicked : () => void,
  onNextPageClicked : () => void
}

const _SmallDomainsPageHeader : React.FC<IProps> = ({
  currPage,
  lastPage,
  prevPageEnabled,
  nextPageEnabled,
  onPrevPageClicked,
  onNextPageClicked
}) => {
  const commonIconClasses = "h-5 w-5 inline"
  const commonArticleClasses = "text-left prose prose-zinc dark:prose-invert"
  return <div className="PageHeader flex justify-between items-center p-3">
    <article className={commonArticleClasses}>
      <h2 className="font-normal">Your Small Domains</h2>
    </article>
    <article className={`${commonArticleClasses}`}>
      <ButtonifiedElement enabled={prevPageEnabled} onClick={onPrevPageClicked}>
        <ChevronLeftIcon className={commonIconClasses} />
      </ButtonifiedElement>
      <p className="text-xl select-none inline">{ `${currPage} / ${lastPage}` }</p>
      <ButtonifiedElement enabled={nextPageEnabled} onClick={onNextPageClicked}>
        <ChevronRightIcon className={commonIconClasses} />
      </ButtonifiedElement>
    </article>
  </div>
}

export default _SmallDomainsPageHeader