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

interface JwtTokens {
  idToken : string,
  accessToken : string,
  refreshToken : string
}

const exchangeAuthCodeForJwtTokens = (
  authCode : string,
  codeVerifier : string,
  successCallback : (jwtTokens : JwtTokens) => void = () => {},
  errorCallback : () => void = () => {}, 
  scope : string = "openid"
) : void => {
  console.log(authCode, codeVerifier)
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

export {
  exchangeAuthCodeForJwtTokens
}