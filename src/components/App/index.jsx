import React from 'react'

import { Container, Wrapper } from './App.styles'

import { AppContainer } from '../AppContainer/AppContainer'
import { AppHeader } from '../AppHeader/AppHeader'

export function App() {
  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer 
          left={ <div style={{backgroundColor: 'red'}}>
            Produtos disponíveis
          </div>}
          middle={ <div style={{backgroundColor: 'green'}}>
            Sua lista de compras
          </div>}
          right={ <div style={{backgroundColor: 'blue'}}>
            Estatísticas
          </div>}
        />
      </Container>
    </Wrapper>
  )
}
