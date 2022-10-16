import React from 'react'
import BaseCard from '../BaseCard/_BaseCard'

import styles from './_ErrorCard.module.css'

interface IProps {
  children : React.ReactNode
}

const _ErrorCard : React.FC<IProps> = ({children}) => <BaseCard additionalClassNames={`${styles.ErrorCard_Border}`}>
  { children }
</BaseCard>

export default _ErrorCard;