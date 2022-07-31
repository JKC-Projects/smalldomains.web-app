import { SmallDomain } from '../types/SmallDomains'
import FetchError from './FetchError'

const API_BASE_URL : string = process.env.SMALL_DOMAINS_REST_API_BASE_URL
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
  errorCallBack: (errorMessages: string[]) => void
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
      const errorMsgs = (error instanceof FetchError) ? error.getErrorMessages() : ["Error connecting to server"]
      errorCallBack(errorMsgs)
    })
}

const handleErrorsIfAny = (response : Response) : Promise<Response> => {
  if(response.ok) {
    return Promise.resolve(response)
  }

  switch(response.status) {
    case 400:
      return http400Handler(response)
    default:
      return response.json()
        .then(data => data.error)
        .then(errMsg => {throw new FetchError([errMsg])} )
  }
} 

const http400Handler = (response : Response) : Promise<any> => { 
  return response.json()
    .then(data => data.validationErrors)
    .then(errors => errors.values() as string[][])
    .then(errorValues => errorValues.reduce((currAccum : string[], currEl : string[]) : string[] => {
        currAccum.push(...currEl)
        return currAccum
      }, []))
    .then(errorMessages => { throw new FetchError(errorMessages) })
}

export {
  createSmallDomain
}