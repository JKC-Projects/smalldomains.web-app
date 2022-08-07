import React from 'react'
import { createSmallDomain } from '../../api/SmallDomainsApi'
import { SmallDomain } from '../../types/SmallDomains'
import { ErrorCard, LoadingCard, WaitingCard } from '../MagicCards'
import SmallDomainForm from './SmallDomainForm'

const useSmallDomainCreationSubmission = () => {
  const [largeDomain, setLargeDomain] = React.useState<string>('')
  const [errorMessage, setErrorMessage] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [disabled, setDisabled] = React.useState<boolean>(false);

  const RESET_DELAY_MILLIS = 1200;
  const resetComponent = () => {
    setLargeDomain('')
    setIsLoading(false)
    setDisabled(false)
  }

  const onSuccess = (smallDomain : SmallDomain) => {
    setTimeout(resetComponent, RESET_DELAY_MILLIS) // delay things for a while... let the user see the pretty loading animation :)
  }

  const onFailure = (errorMessage : string) => {
    setTimeout(resetComponent, RESET_DELAY_MILLIS) // delay things for a while... let the user see the pretty loading animation :)
    setErrorMessage(errorMessage)
  }

  const doSubmit = () => {
    if(!largeDomain.trim()) {
      setErrorMessage("Please enter the URL you want to shorten")
      return
    }

    setErrorMessage('')
    setIsLoading(true)
    setDisabled(true)
    createSmallDomain(largeDomain, onSuccess, onFailure)
  }

  return {
    largeDomain, setLargeDomain,
    errorMessage,
    isLoading,
    disabled,
    doSubmit
  }
}

const SmallDomainCreator = () => {
  const {
    largeDomain, setLargeDomain,
    errorMessage,
    isLoading,
    disabled,
    doSubmit
  } = useSmallDomainCreationSubmission();

  const children = <SmallDomainForm largeDomain={largeDomain} onLargeDomainChange={setLargeDomain} onSubmit={doSubmit} disabled={disabled} />

  if (isLoading) {
    return <LoadingCard>{ children }</LoadingCard>  
  } else if (errorMessage !== '') {
    return <ErrorCard>{ children }</ErrorCard>
  } else {
    return <WaitingCard>{ children }</WaitingCard>
  }
}

export default SmallDomainCreator;