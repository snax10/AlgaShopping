import React, { useEffect, useState } from 'react'
import productsMock from '../../mocks/products.json'

import { Container, Wrapper } from './App.styles'

import { AppContainer } from '../AppContainer/AppContainer'
import { AppHeader } from '../AppHeader/AppHeader'
import { LineChart } from '../../shared/LineChart/LineChart'
import { ShoppingList } from '../ShoppingList/ShoppingList'


export function App() {
  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

  const [products, setProducts] = useState(productsMock.products)
  const [selectedProducts, setSelectedProducts] = useState([])


  useEffect(() => {
    const newSelectedProducts = products.filter(product => product.checked === true)
    setSelectedProducts(newSelectedProducts)
  }, [products])

  function hanldeToggle(id, checked) {
    const newProducts = products.map(product => product.id === id ?
      { ...product, checked: !product.checked }
      : product
    )
    setProducts(newProducts)
  }

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={
            <ShoppingList
              title="Produtos disponíveis"
              products={products}
              onToggle={hanldeToggle}
            />}

          middle={
            <ShoppingList
              title="Sua lista de compras"
              products={selectedProducts}
              onToggle={hanldeToggle}
            />}

          right={<div>
            Estatísticas

            <LineChart color={colors[0]} title="saudável" percentage={80} />
            <LineChart color={colors[1]} title="não tão saudável" percentage={20} />
            <LineChart color={colors[2]} title="limpeza" percentage={35} />
            <LineChart color={colors[3]} title="outros" percentage={15} />
          </div>}
        />
      </Container>
    </Wrapper>
  )
}
