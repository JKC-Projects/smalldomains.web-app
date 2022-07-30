import React from 'react'
import SmallDomainInputter from './_SmallDomainInputter'


const SmallDomainCreator = () => {
  const [largeDomain, setLargeDomain] = React.useState('www.google.com');
  const [disabled, setDisabled] = React.useState(false);
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