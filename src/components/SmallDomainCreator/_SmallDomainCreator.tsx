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
    submitSmallDomainCreateRequest
  } = useSmallDomainCreation();

  const children = <SmallDomainForm
    largeDomain={largeDomain}
    onLargeDomainChange={setLargeDomain}
    onSubmit={submitSmallDomainCreateRequest}
    disabled={disabled}
    errorMessage={errorMessage}
  />

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