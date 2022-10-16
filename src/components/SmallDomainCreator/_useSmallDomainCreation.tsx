import React from 'react'
import { storeNewSmallDomain } from '../../api/locallyStoredSmallDomains'
import { createSmallDomain } from '../../api/smallDomainsApi'
import { SmallDomain } from '../../types/SmallDomains'

const _useSmallDomainCreation = () => {
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
    createSmallDomain(largeDomain.trim(),
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

export default _useSmallDomainCreation