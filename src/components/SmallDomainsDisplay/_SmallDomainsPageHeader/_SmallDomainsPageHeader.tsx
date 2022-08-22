import React from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

import './_SmallDomainsPageHeader.css'

interface IProps {
  currPage : number,
  lastPage : number,
  prevPageEnabled : boolean,
  nextPageEnabled : boolean,
  onPrevPageClicked : () => void,
  onNextPageClicked : () => void
}

const withDynamicism : (
  ChevronIcon : (props: React.ComponentProps<'svg'>) => JSX.Element,
  enabled : boolean,
  onClick : () => void
) => JSX.Element = (
  ChevronIcon,
  enabled,
  onClick
) => {
  const commonClasses = "h-5 w-5 inline"
  const classesWhenEnabled = "hover:cursor-pointer"
  const classesWhenDisabled = "hover:cursor-not-allowed text-gray-600"

  return <ChevronIcon
    className={`${commonClasses} ${enabled ? classesWhenEnabled : classesWhenDisabled}`}
    onClick={enabled ? () => onClick() : () => {}} 
  />
}

const _SmallDomainsPageHeader : React.FC<IProps> = ({
  currPage,
  lastPage,
  prevPageEnabled,
  nextPageEnabled,
  onPrevPageClicked,
  onNextPageClicked
}) => {
  const commonTailWindArticle = "text-left prose prose-zinc dark:prose-invert"
  return <div className="PageHeader flex justify-between items-center p-3">
    <article className={commonTailWindArticle}>
      <h2 className="font-normal">Your Small Domains</h2>
    </article>
    <article className={`${commonTailWindArticle}`}>
      <>
        { withDynamicism(ChevronLeftIcon, prevPageEnabled, onPrevPageClicked) }
        <p className="text-xl inline">{ `${currPage} / ${lastPage}` }</p>
        { withDynamicism(ChevronRightIcon, nextPageEnabled, onNextPageClicked) }
      </>
    </article>
  </div>
}

export default _SmallDomainsPageHeader