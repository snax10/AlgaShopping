import React from 'react'
import { Wrapper } from './AppContainer.styles'

export function AppContainer({ left, middle, right }) {
  return (
    <Wrapper>
      <div>{left}</div>
      <div>{middle}</div>
      <div>{right}</div>
    </Wrapper>
  )
}
