import { SmallDomain } from '../../types/SmallDomains'
import FetchError from '../FetchError'

const API_BASE_URL : string = process.env.NEXT_PUBLIC_SMALL_DOMAINS_REST_API_BASE_URL
const CREATE_SMALL_DOMAIN_URL : string = `${API_BASE_URL}/smalldomains`

const COMMON_HEADERS = {
  "Content-type" : "application/json",
  "Accept" : "application/json"
}

const COMMON_FETCH_OPTIONS : RequestInit = {
  mode: "cors",
  redirect: "follow"
}

const createSmallDomain = (
  largeDomain: string,
  successCallBack: (smallDomain: SmallDomain) => void,
  errorCallBack: (errorMessage: string) => void
) : void => {
  fetch(CREATE_SMALL_DOMAIN_URL, {
      ...COMMON_FETCH_OPTIONS,
      headers: COMMON_HEADERS,
      method: "POST",
      body: JSON.stringify({ largeDomain })
    })
    .then(handleErrorsIfAny)
    .then(response => response.json())
    .then(data => data as SmallDomain)
    .then(successCallBack)
    .catch(error => {
      const errorMsg = (error instanceof FetchError) ? error.getErrorMessage() : "There was an error when connecting to the server"
      errorCallBack(errorMsg)
    })
}

const handleErrorsIfAny = (response : Response) : Promise<Response> => {
  if(response.ok) {
    return Promise.resolve(response)
  }

  switch(response.status) {
    case 400:
      return response.json()
        .then(_ => { throw new FetchError("You entered an invalid URL. We can only shorten valid URLs.") })
    default:
      return response.json()
        .then(data => data.error)
        .then(errMsg => { throw new FetchError(errMsg) } )
  }
} 

export {
  createSmallDomain
}