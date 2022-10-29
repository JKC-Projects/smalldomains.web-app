import crypto from 'crypto'
import { areWeRunningOnClientSide } from "../../internetApi/utils"

const OAUTH2_SERVICE_ORIGIN : string = process.env.NEXT_PUBLIC_OAUTH2_SERVICE_ORIGIN
const OAUTH2_CLIENT_ID : string = process.env.NEXT_PUBLIC_OAUTH2_CLIENT_ID

const AUTH_IN_PROGRESS_KEY = "authInProgress"

interface AuthInProgress {
  codeVerifier : string
  stateForCsrfProtection : string
}

function base64ToBase64Url(base64String : string) {
  return base64String
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "")
}

function generateSecureRandomBytes(length:number=32) : Uint8Array {
  return crypto.randomBytes(length)
}

function generateHash(codeVerifier : string) : string {
  return base64ToBase64Url(
    crypto.createHash("sha256")
    .update(codeVerifier)
    .digest("base64")
  )
}

function generateLoginUrl(scope : string = "openid") : URL {
  const { codeChallenge, stateForCsrfProtection } = generateOauth2CodeChallengeAndState()

  let url = new URL(`${OAUTH2_SERVICE_ORIGIN}/login`)

  url.searchParams.append("code_challenge", codeChallenge)
  url.searchParams.append("state", stateForCsrfProtection)
  url.searchParams.append("code_challenge_method", "S256")

  url.searchParams.append("client_id", OAUTH2_CLIENT_ID)
  url.searchParams.append("response_type", "code")
  
  url.searchParams.append("redirect_uri", `${new URL(window.location.href).origin}/auth/JwtTokens`)
  url.searchParams.append("scope", scope)

  return url
}

function generateOauth2CodeChallengeAndState() : {codeChallenge : string, stateForCsrfProtection : string} {
  if(areWeRunningOnClientSide() === false) {
    throw new Error("detected that we are not being run client-side... so we will not run")
  }

  // generate stateForCsrfProtection
  const stateForCsrfProtection = (() => {
    const secureRandomBytes : Uint8Array = generateSecureRandomBytes()
    return base64ToBase64Url(Buffer.from(secureRandomBytes).toString('base64'))
  })()

  // store plaintext secure random bytes in localStorage
  const codeVerifier : string = base64ToBase64Url(Buffer.from(generateSecureRandomBytes()).toString('base64'))

  // create the SHA256 of these secure random bytes
  const codeChallenge = generateHash(codeVerifier)

  // add this SHA256 to the query params of the login URL somehow
  localStorage.setItem(AUTH_IN_PROGRESS_KEY, JSON.stringify({
    codeVerifier,
    stateForCsrfProtection
  }))

  // return the code challenge
  return {
    codeChallenge,
    stateForCsrfProtection
  }
}

function getCodeVerifier() : string | null {
  if(areWeRunningOnClientSide() === false) {
    throw new Error("detected that we are not being run client-side... so we will not run")
  }

  const unparsedAuthInProgress : string | null = localStorage.getItem(AUTH_IN_PROGRESS_KEY)

  if(unparsedAuthInProgress === null) {
    return null
  }

  const authInProgress : AuthInProgress = JSON.parse(unparsedAuthInProgress) as AuthInProgress
  return authInProgress.codeVerifier
}

function doesStateForCsrfProtectionMatch(stateForCsrfProtection : string) : boolean {
  if(areWeRunningOnClientSide() === false) {
    throw new Error("detected that we are not being run client-side... so we will not run")
  }

  const unparsedAuthInProgress : string | null = localStorage.getItem(AUTH_IN_PROGRESS_KEY)

  if(unparsedAuthInProgress === null) {
    return false
  }

  const authInProgress : AuthInProgress = JSON.parse(unparsedAuthInProgress as string)
  return authInProgress.stateForCsrfProtection === stateForCsrfProtection
}

function resetAuthInProgress() : void {
  localStorage.removeItem(AUTH_IN_PROGRESS_KEY)
}


export {
  generateLoginUrl,
  getCodeVerifier,
  doesStateForCsrfProtectionMatch,
  resetAuthInProgress
}