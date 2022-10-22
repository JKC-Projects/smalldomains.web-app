import { SmallDomain } from '../../../types/SmallDomains'

interface LocalSmallDomainsManager {
  smallDomains : SmallDomain[],
  storeNewSmallDomain : (toAdd: SmallDomain) => void,
  hasSmallDomainBeenCreatedAtLeastOnce : boolean
}

export default LocalSmallDomainsManager 