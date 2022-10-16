import React from 'react'
import BaseCard from '../BaseCard/_BaseCard'

import styles from './_SuccessCard.module.css'

interface IProps {
  children : React.ReactNode
}

const _SuccessCard : React.FC<IProps> = ({children}) => <BaseCard additionalClassNames={`${styles.SuccessCard_Border}`}>
  { children }
</BaseCard>

export default _SuccessCard;