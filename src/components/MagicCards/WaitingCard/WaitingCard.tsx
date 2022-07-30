import React from 'react'
import './WaitingCard.css'

interface IProps {
  children : React.ReactNode
}

const WaitingCard = ({children} : IProps) => (
  <div className="WaitingCard_Card">
    { children }
  </div>
)

export default WaitingCard;