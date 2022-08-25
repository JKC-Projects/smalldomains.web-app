import React from 'react'
import './_BaseCard.css'

interface IProps {
  children : React.ReactNode
  additionalClassNames? : string
}

const _BaseCard : React.FC<IProps> = ({children, additionalClassNames=""}) => <div className={`BaseCard_Card ${additionalClassNames}`}>{ children }</div>

export default _BaseCard