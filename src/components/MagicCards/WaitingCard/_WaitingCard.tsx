import React from 'react'
import BaseCard from '../BaseCard/_BaseCard'

import styles from './WaitingCard.module.css'

interface IProps {
  children : React.ReactNode
}

const _WaitingCard : React.FC<IProps> = ({children}) => <BaseCard additionalClassNames={`${styles.WaitingCard_Border}`}>
  { children }
</BaseCard>

export default _WaitingCard;