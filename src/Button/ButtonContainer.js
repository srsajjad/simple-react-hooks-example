import React, { useContext } from 'react'
import { Button } from './Button'
import { CounterContext } from '../CounterContext'

export const ButtonContainer = () => {
  const { count, setCount } = useContext(CounterContext)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Button handleClick={handleClick} />
    </div>
  )
}
