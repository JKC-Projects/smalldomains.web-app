import React from 'react'
import '../BaseCard/_BaseCard.css'
import './_ErrorCard.css'

interface IProps {
  children : React.ReactNode
}

const _ErrorCard : React.FC<IProps> = ({children}) => <div className="BaseCard_Card ErrorCard_Card">{ children }</div>

export default _ErrorCard;