import React, { useEffect } from 'react'
import { storeNewSmallDomain } from '../../api/LocallyStoredSmallDomains'
import { createSmallDomain } from '../../api/SmallDomainsApi'
import { SmallDomain } from '../../types/SmallDomains'
import { SuccessCard, ErrorCard, LoadingCard, WaitingCard } from '../MagicCards'
import SmallDomainForm from './SmallDomainForm'

const useSmallDomainCreation = () => {
  const [hasBeenUsedAtLeastOnce, setHasBeenUsedAtLeastOnce] = React.useState<boolean>(false)
  const [largeDomain, setLargeDomain] = React.useState<string>('')
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [disabled, setDisabled] = React.useState<boolean>(false)

  const resetComponent = () => {
    setLargeDomain('')
    setIsLoading(false)
    setDisabled(false)
    setErrorMessage(null)
  }

  const onSuccess = (smallDomain : SmallDomain) => {
    resetComponent()
    storeNewSmallDomain(smallDomain)
  }

  const onFailure = (errorMessage : string) => {
    resetComponent()
    setErrorMessage(errorMessage)
  }

  const doSubmit = () => {
    if(!largeDomain.trim()) {
      setErrorMessage("Please enter the URL you want to shorten")
      return
    }

    setHasBeenUsedAtLeastOnce(true)
    setErrorMessage(null)
    setIsLoading(true)
    setDisabled(true)
    createSmallDomain(largeDomain,
      (smallDomain : SmallDomain) => setTimeout(() => onSuccess(smallDomain), 500), 
      (errorMessage : string) => setTimeout(() => onFailure(errorMessage), 200)
    )
  }

  return {
    hasBeenUsedAtLeastOnce,
    largeDomain, setLargeDomain,
    errorMessage,
    isLoading,
    disabled,
    doSubmit
  }
}

const SmallDomainCreator = () => {
  const {
    hasBeenUsedAtLeastOnce,
    largeDomain, setLargeDomain,
    errorMessage,
    isLoading,
    disabled,
    doSubmit
  } = useSmallDomainCreation();

  const children = <div className="w-[70vw]">
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

export default SmallDomainCreator;