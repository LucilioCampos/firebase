import React, { useState, useEffect } from 'react';

import { withAuthContext } from '../AuthProvider'
import Loader from '../Loader';
import Product from '../Products/Product'


import { api } from '../../utils'



import './styles.css'

const ListProducts = props => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const getProducts = async () => {
    setLoading(true)
    try {
      const response = (await api.get('/api/v1/products')).data
      setProducts(response)
      console.table("Products", products)
      setLoading(false)
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }

  useEffect(() => { getProducts() }, [])

  return (
    <Loader waiting={loading}>
      <div className="products-list-wrapper flex-box">
      <div className="products-wrapper">
        <div className="content-header"><h1>Produtos</h1></div>
        <div className="content">
            <span>
                <strong>ID</strong>
                <strong>Tipo</strong>
                <strong>Descrição</strong>
                <strong>Status</strong>
            </span>
            <br/>
        </div>
        
    </div>
        {products.map(product => (
          <Product product={product} />
        ))}
      </div>
    </Loader>

  )
}

export default ListProducts