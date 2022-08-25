import React from 'react'
import { default as useSmallDomainCreation } from './_useSmallDomainCreation'
import { SuccessCard, ErrorCard, LoadingCard, WaitingCard } from '../MagicCards'
import SmallDomainForm from './_SmallDomainForm'

const _SmallDomainCreator = () => {
  const {
    hasBeenUsedAtLeastOnce,
    largeDomain, setLargeDomain,
    errorMessage,
    isLoading,
    disabled,
    doSubmit
  } = useSmallDomainCreation();

  const children = <div className="">
    <SmallDomainForm
      largeDomain={largeDomain}
      onLargeDomainChange={setLargeDomain}
      onSubmit={doSubmit}
      disabled={disabled}
      errorMessage={errorMessage}
    />
  </div>

  if (isLoading) {
    return <LoadingCard>{ children }</LoadingCard>  
  } else if (errorMessage !== null) {
    return <ErrorCard>{ children }</ErrorCard>
  } else if (hasBeenUsedAtLeastOnce) {
    return <SuccessCard>{ children }</SuccessCard>
  } else {
    return <WaitingCard>{ children }</WaitingCard>
  }
}

export default _SmallDomainCreator