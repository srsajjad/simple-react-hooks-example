import React, { useContext } from 'react'
import { CounterContext } from '../CounterContext'
import { Result } from './Result'

export const ResultContainer = () => {
  let { count } = useContext(CounterContext)
  return (
    <div>
      <Result count={count} />
    </div>
  )
}
