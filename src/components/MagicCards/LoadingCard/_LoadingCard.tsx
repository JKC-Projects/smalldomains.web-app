import React from 'react'
import '../BaseCard/_BaseCard.module.css'
import './_LoadingCard.module.css'

interface IProps {
  children : React.ReactNode
}

const _LoadingCard : React.FC<IProps> = ({children}) => <div className="BaseCard_Border LoadingCard_Border">
  <div className="BaseCard_Content">
    { children }
  </div>
</div>

export default _LoadingCard;