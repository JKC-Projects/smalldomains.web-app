import React from 'react'
import '../_BaseCard.css'
import './_SuccessCard.css'

interface IProps {
  children : React.ReactNode
}

const _SuccessCard : React.FC<IProps> = ({children}) => <div className="BaseCard_Card Success_Card">{ children }</div>

export default _SuccessCard;