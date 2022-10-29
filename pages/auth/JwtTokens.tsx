import React from 'react'
import { useRouter } from 'next/router'

import { exchangeAuthCodeForJwtTokens } from '../../src/internetApi/auth/authApi'
import { getCodeVerifier, doesStateForCsrfProtectionMatch, resetAuthInProgress } from '../../src/webStorageApi/localAuthInProgress' 

const RetrieveJwtTokensPage = () => {
  const router = useRouter()



  React.useEffect(() => {
    if(!router.isReady) return;
    const authCode : string = router.query.code as string
    const stateForCsrfProtectionMatch : string = router.query.state as string
    console.log(authCode, stateForCsrfProtectionMatch)
    if(doesStateForCsrfProtectionMatch(stateForCsrfProtectionMatch) == false) {
      console.error("state does not match!!", stateForCsrfProtectionMatch)
    }
    
    const codeVerifier : string = getCodeVerifier() as string
    exchangeAuthCodeForJwtTokens(authCode, codeVerifier, console.log, console.log)
  }, [router.isReady])
}

export default RetrieveJwtTokensPage