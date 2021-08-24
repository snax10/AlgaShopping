import React from 'react'
import { Indicator, Wrapper } from './Checkbox.styles'

export function Checkbox({ value, title, onClick }) {
  return (
    <Wrapper onClick={onClick} >
      <Indicator value={value} />
      {title}
    </Wrapper>
  )
}
