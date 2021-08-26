import React from 'react'
import { Wrapper, ProgressBar } from './LineChart.styles'

export function LineChart({ title, percentage, color }) {
  return (
    <Wrapper>
      <span>
        {title} -  { percentage.toFixed(2) >= 1 ? percentage : 0 }%
      </span>

      <ProgressBar
        percentage={percentage}
        color={color}
      />

    </Wrapper>
  )
}
