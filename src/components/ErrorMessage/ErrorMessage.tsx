import React from 'react'
import './ErrorMessage.css'

interface IProps {
  children : React.ReactNode
}

const ErrorMessage : React.FC<IProps> = ({children}) => <div className="ErrorMessage">{ children }</div>

export default ErrorMessage