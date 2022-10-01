import React from 'react'
import '../BaseCard/_BaseCard.css'
import './_SuccessCard.css'

interface IProps {
  children : React.ReactNode
}

const _SuccessCard : React.FC<IProps> = ({children}) => <div className="BaseCard_Border SuccessCard_Border">
  <div className="BaseCard_Content">
    { children }
  </div>
</div>

export default _SuccessCard;