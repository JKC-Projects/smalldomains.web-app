import React from 'react'

interface IProps {
  children : React.ReactNode
}

const _ErrorCard : React.FC<IProps> = ({children}) => <div className="BaseCard_Card ErrorCard_Card">{ children }</div>

export default _ErrorCard;