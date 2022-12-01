import { JwtTokens } from "../../types/auth"

const OAUTH2_SERVICE_ORIGIN : string = process.env.NEXT_PUBLIC_OAUTH2_SERVICE_ORIGIN
const OAUTH2_CLIENT_ID : string = process.env.NEXT_PUBLIC_OAUTH2_CLIENT_ID
const OAUTH2_TOKEN_ENDPOINT : string = `${OAUTH2_SERVICE_ORIGIN}/oauth2/token`

const COMMON_HEADERS = {
  "Content-type" : "application/x-www-form-urlencoded"
}

const COMMON_FETCH_OPTIONS : RequestInit = {
  mode: "cors",
  redirect: "follow"
}

const exchangeAuthCodeForJwtTokens = (
  authCode : string,
  codeVerifier : string,
  successCallback : (jwtTokens : JwtTokens) => void = () => {},
  errorCallback : () => void = () => {}, 
  scope : string = "openid"
) : void => {
  fetch(OAUTH2_TOKEN_ENDPOINT, {
    ...COMMON_FETCH_OPTIONS,
    headers: COMMON_HEADERS,
    method: "POST",
    body: new URLSearchParams({
      "code" : authCode,
      "code_verifier" : codeVerifier,
      "scope" : scope,
      "client_id" : OAUTH2_CLIENT_ID,
      "grant_type": "authorization_code",
      "redirect_uri": new URL(window.location.href).origin + "/auth/JwtTokens"
    })
  })
  .then(response => response.json())
  .then(body => ({
    idToken: body['id_token'],
    accessToken : body['access_token'],
    refreshToken : body['refresh_token']
  }))
  .then(successCallback)
  .catch(errorCallback)
}

const exchangeRefreshTokenForAuthTokens = (
  refresh_token : string,
  successCallback : (idToken : string, accessToken : string) => void = () => {},
  errorCallback : () => void = () => {}
) : void => {
  fetch(OAUTH2_TOKEN_ENDPOINT, {
    ...COMMON_FETCH_OPTIONS,
    headers: COMMON_HEADERS,
    method: "POST",
    body: new URLSearchParams({
      "client_id" : OAUTH2_CLIENT_ID,
      "grant_type": "refresh_token",
      "refresh_token": refresh_token
    })
  })
  .then(response => response.json())
  .then(body => {
    successCallback(
      body['id_token'],
      body['access_token']
    )
  })
  .catch(errorCallback)
}

export {
  exchangeAuthCodeForJwtTokens,
  exchangeRefreshTokenForAuthTokens
}