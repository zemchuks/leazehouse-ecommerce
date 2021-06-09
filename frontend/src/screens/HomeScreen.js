import React, { useState, useEffect, Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('/api/products')
            const data  = await res.json();
            setProducts(data)
            console.log(data);
        }
        fetchProducts()
        
        // eslint-disable-next-line
    }, [])  

    return (
        <Fragment>
           <h1>Latest Products</h1> 
           <Row>
               {products.map(product => (
                   <Col key={product._id} className='py-3' sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}  />
                   </Col>
               ))}
           </Row>
        </Fragment>
    )
}

export default HomeScreen
