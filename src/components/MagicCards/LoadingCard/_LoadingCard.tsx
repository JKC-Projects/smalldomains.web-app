import React from 'react'
import '../BaseCard/_BaseCard.css'
import './_LoadingCard.css'

interface IProps {
  children : React.ReactNode
}

const _LoadingCard : React.FC<IProps> = ({children}) => <div className="BaseCard_Card LoadingCard_Card">{ children }</div>

export default _LoadingCard;