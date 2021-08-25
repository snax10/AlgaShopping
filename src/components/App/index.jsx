import React, { useEffect, useState } from 'react'
import productsMock from '../../mocks/products.json'

import { Container, Wrapper } from './App.styles'

import { AppContainer } from '../AppContainer/AppContainer'
import { AppHeader } from '../AppHeader/AppHeader'
import { LineChart } from '../../shared/LineChart/LineChart'
import { ShoppingList } from '../ShoppingList/ShoppingList'
import extractPercentage from '../../utils/extractPercentage'


export function App() {
  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

  const [products, setProducts] = useState(productsMock.products)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const newSelectedProducts = products.filter(product => product.checked === true)

    setSelectedProducts(newSelectedProducts)
  }, [products])

  useEffect(() => {
    const totalPrice = selectedProducts.map(product => product.price)
      .reduce((a, b) => a + b, 0)

    setTotalPrice(totalPrice)
  }, [selectedProducts])

  function handleToggle(id, checked) {
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
              onToggle={handleToggle}
            />}

          middle={
            <ShoppingList
              title="Sua lista de compras"
              products={selectedProducts}
              onToggle={handleToggle}
            />}

          right={<div>
            Estatísticas

            <LineChart
              color={colors[0]}
              title="saudável"
              percentage={extractPercentage(
                selectedProducts.length,
                selectedProducts.filter(product => product.tags.includes('healthy')).length
              )}
            />
            <LineChart
              color={colors[1]}
              title="não tão saudável"
              percentage={extractPercentage(
                selectedProducts.length,
                selectedProducts.filter(product => product.tags.includes('junk')).length
              )}
            />
            <LineChart
              color={colors[2]}
              title="limpeza"
              percentage={extractPercentage(
                selectedProducts.length,
                selectedProducts.filter(product => product.tags.includes('cleaning')).length
              )}
            />
            <LineChart
              color={colors[3]}
              title="outros"
              percentage={extractPercentage(
                selectedProducts.length,
                selectedProducts.filter(product => product.tags.includes('others', 'higiene')).length
              )}
            />

            <div style={{ marginTop: 12 }}>
              <h2 style={{ fontSize: 12, fontWeight: 400, color: '#003644' }}>
                Previsão de gastos:
                <div style={{ fontSize: 24 }}>
                  {totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </div>
              </h2>
            </div>
          </div>}
        />
      </Container>
    </Wrapper>
  )
}
