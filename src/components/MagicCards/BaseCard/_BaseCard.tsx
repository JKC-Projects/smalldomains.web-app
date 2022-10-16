import React from 'react'
import styles from './BaseCard.module.css'

interface IProps {
  children : React.ReactNode
  additionalClassNames? : string
}

const _BaseCard : React.FC<IProps> = ({children, additionalClassNames=""}) => <div className={`${styles.BaseCard_Border} ${additionalClassNames}`}>
  <div className={styles.BaseCard_Content}>
    { children }
  </div>
</div>

export default _BaseCard