import { JwtTokens } from '../../types/auth'
import { areWeRunningOnClientSide } from "../../internetApi/utils"

const AUTH_STORAGE_KEY : string = "auth"

const storeJwtTokens = (jwtTokens : JwtTokens) => {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(jwtTokens))
}

const retriveAccessToken = () => {} // TODO

export {
  storeJwtTokens,
  retriveAccessToken
}