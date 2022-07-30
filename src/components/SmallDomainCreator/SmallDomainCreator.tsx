import React from 'react'
import SmallDomainInputter from './_SmallDomainInputter'


const SmallDomainCreator = () => {
  const [largeDomain, setLargeDomain] = React.useState<string>('');
  const [disabled, setDisabled] = React.useState<boolean>(false);
  return (
    <SmallDomainInputter
      onSubmit={event => {}}
      largeDomain={largeDomain}
      onChangeOfLargeDomain={event => setLargeDomain(event.target.value)}
      disabled={disabled}
    />
  )
}

export default SmallDomainCreator;