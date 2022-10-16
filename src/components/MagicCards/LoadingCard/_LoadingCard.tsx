import React from 'react'
import BaseCard from '../BaseCard/_BaseCard'

import styles from './_LoadingCard.module.css'

interface IProps {
  children : React.ReactNode
}

const _LoadingCard : React.FC<IProps> = ({children}) => <BaseCard additionalClassNames={`${styles.LoadingCard_Border}`}>
  { children }
</BaseCard>

export default _LoadingCard;