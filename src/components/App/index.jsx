import React, { useEffect, useState } from 'react'

import { Container, Wrapper } from './App.styles'

import { AppContainer } from '../AppContainer/AppContainer'
import { AppHeader } from '../AppHeader/AppHeader'
import { Checkbox } from '../../shared/Checkbox/Checkbox'
import { LineChart } from '../../shared/LineChart/LineChart'

export function App() {
  const [lettuce, setLettuce] = useState(false)
  const [rice, setRice] = useState(false)

  const colors = ['#62CBC6','#00ABAD','#00858C','#006073','#004D61']

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer 
          left={ <div>
            Produtos disponíveis

            <Checkbox
              value={lettuce}
              title="Alface"
              onClick={() => setLettuce(!lettuce)}
            />
            <Checkbox
              value={rice}
              title="Arroz"
              onClick={() => setRice(!rice)}
            />

          </div>}
          middle={ <div>
            Sua lista de compras
          </div>}
          right={ <div>
            Estatísticas

            <LineChart color={colors[0]} title="saudável" percentage={80}/>
            <LineChart color={colors[1]} title="não tão saudável" percentage={20}/>
            <LineChart color={colors[2]} title="limpeza" percentage={35}/>
            <LineChart color={colors[3]} title="outros" percentage={15}/>
          </div>}
        />
      </Container>
    </Wrapper>
  )
}
