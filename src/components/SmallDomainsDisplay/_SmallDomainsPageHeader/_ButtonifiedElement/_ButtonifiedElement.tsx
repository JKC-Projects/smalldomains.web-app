import React from 'react'

interface IProps {
  children : React.ReactNode,
  enabled : boolean,
  onClick : () => void
}

const classesWhenEnabled = "hover:cursor-pointer"
const classesWhenDisabled = "hover:cursor-not-allowed text-gray-600"

const _ButtonifiedElement : React.FC<IProps> = ({
  children,
  enabled,
  onClick
}) => <button
  className={`${enabled ? classesWhenEnabled : classesWhenDisabled}`}
  onClick={enabled ? () => onClick() : () => {}} 
  disabled={!enabled} 
  >
  { children }
</button>

export default _ButtonifiedElement