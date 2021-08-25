import React from 'react'
import { Wrapper, ProgressBar } from './LineChart.styles'

export function LineChart({ title, percentage, color }) {
  return (
    <Wrapper>
      <span>
        {title}
      </span>

      {percentage.toFixed(1)}%

      <ProgressBar
        percentage={percentage}
        color={color}
      />

    </Wrapper>
  )
}
