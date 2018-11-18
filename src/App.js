import React, { useState } from 'react'
import { CounterContext } from './CounterContext'
import { ButtonContainer } from './Button/ButtonContainer'
import { ResultContainer } from './Result/ResultContainer'
import './styles.css'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <div className="App">
        <ResultContainer />
        <br />
        <ButtonContainer />
      </div>
    </CounterContext.Provider>
  )
}
