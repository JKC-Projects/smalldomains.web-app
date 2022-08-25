import React from 'react'
import '../BaseCard/_BaseCard.css'
import './_WaitingCard.css'

interface IProps {
  children : React.ReactNode
}

const _WaitingCard : React.FC<IProps> = ({children}) => <div className="BaseCard_Card WaitingCard_Card">{ children }</div>

export default _WaitingCard;