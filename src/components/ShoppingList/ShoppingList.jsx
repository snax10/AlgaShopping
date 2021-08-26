import React from 'react';
import { Checkbox } from '../../shared/Checkbox/Checkbox';
import { Array, Title, Wrapper } from './ShoppingList.styles';
// import { selectAllProducts } from '../../store/products/Products.selectors';
// import { useSelector } from 'react-redux';

export function ShoppingList({ title, products, onToggle }) {
  //const productsFromRedux = useSelector(selectAllProducts)

  return (
    <Wrapper>
      <Title>
        {title}:
      </Title>
      <Array>
        {
          products.map(product => (
            <>
            <Checkbox 
              key={product.id}
              value={product.checked}
              title={product.name} 
              onClick={() => onToggle(product.id, product.checked) }
            />
            <span>R${product.price}</span>
            </>
          ))
        }
      </Array>
    </Wrapper>
  );
}