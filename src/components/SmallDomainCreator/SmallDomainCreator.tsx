import React from 'react'
import { createSmallDomain } from '../../api/SmallDomainsApi'
import { SmallDomain } from '../../types/SmallDomains'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { SuccessCard, ErrorCard, LoadingCard, WaitingCard } from '../MagicCards'
import SmallDomainForm from './SmallDomainForm'

const useSmallDomainCreation = () => {
  const [ hasBeenUsedAtLeastOnce, setHasBeenUsedAtLeastOnce] = React.useState<boolean>(false)
  const [largeDomain, setLargeDomain] = React.useState<string>('')
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [disabled, setDisabled] = React.useState<boolean>(false);

  const resetComponent = () => {
    setLargeDomain('')
    setIsLoading(false)
    setDisabled(false)
  }

  const onSuccess = (smallDomain : SmallDomain) => {
    resetComponent()
    setErrorMessage(null)
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

    setErrorMessage(null)
    setIsLoading(true)
    setDisabled(true)
    const RESET_DELAY_MILLIS = 500
    createSmallDomain(largeDomain,
      () => setTimeout(onSuccess, RESET_DELAY_MILLIS), 
      () => setTimeout(onFailure, RESET_DELAY_MILLIS)
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

  const children = <SmallDomainForm
    largeDomain={largeDomain}
    onLargeDomainChange={setLargeDomain}
    onSubmit={doSubmit}
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

export default SmallDomainCreator;