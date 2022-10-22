import React from 'react'
import { createSmallDomain } from '../../internetApi/smallDomains/smallDomainsApi'
import { SmallDomain } from '../../types/SmallDomains'
import { LocalSmallDomainsContext, LocalSmallDomainsManager } from '../Contexts/LocalSmallDomainsContextProvider'

const _useSmallDomainCreation = () => {
  const localSmallDomainsManager : LocalSmallDomainsManager = React.useContext<LocalSmallDomainsManager>(LocalSmallDomainsContext)

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
    localSmallDomainsManager.storeNewSmallDomain(smallDomain)
  }

  const onFailure = (errorMessage : string) => {
    resetComponent()
    setErrorMessage(errorMessage)
  }

  const submitSmallDomainCreateRequest = () => {
    if(!largeDomain.trim()) {
      setErrorMessage("Please enter the URL you want to shorten")
      return
    }

    setHasBeenUsedAtLeastOnce(true)
    setErrorMessage(null)
    setIsLoading(true)
    setDisabled(true)
    createSmallDomain(largeDomain.trim(),
      // I have some very pretty animations... let's delay things a little so people can admire :)
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
    submitSmallDomainCreateRequest
  }
}

export default _useSmallDomainCreation