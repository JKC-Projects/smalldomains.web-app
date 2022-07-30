import React from 'react'
import './WaitingCard.css'

const WaitingCard = ({
  children
} : IProps) => (
  <div className="WaitingCard_Card">
    { children }
  </div>
)

interface IProps {
  children : React.ReactNode
}

export default WaitingCard;