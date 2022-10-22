// TODO provide these as env vars
const OAUTH2_SERVICE_ORIGIN : string = "https://auth.dev.john-chung.dev"
const OAUTH2_TOKEN_ENDPOINT : string = `${OAUTH2_SERVICE_ORIGIN}/oauth2/token`
const OAUTH2_CLIENT_ID : string = "5h9p83tirpiv89jg1q62dv2mpe"

const COMMON_HEADERS = {
  "Content-type" : "application/x-www-form-urlencoded"
}

const COMMON_FETCH_OPTIONS : RequestInit = {
  mode: "cors",
  redirect: "follow"
}

interface JwtTokens {
  idToken : string,
  accessToken : string,
  refreshToken : string
}

const exchangeAuthCodeForJwtTokens = (
  authCode : string,
  codeVerifier : string,
  scope : string = "openid",
  successCallback : (jwtTokens : JwtTokens) => void,
  errorCallback : () => void = () => {} 
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
        "redirect_uri": "redirect_uri"
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

export {
  exchangeAuthCodeForJwtTokens
}