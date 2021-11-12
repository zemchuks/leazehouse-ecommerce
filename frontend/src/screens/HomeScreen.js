import React, { useEffect, Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../redux/actions/productActions'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { products, error, loading } = productList
    useEffect(() => {
        dispatch(listProducts())
        
        // eslint-disable-next-line
    }, [])  

    return (
        <Fragment>
           <h1>Latest Products</h1> 
           {loading ? (<Loader />) : error ? <Message variant='danger'>{error}</Message> : <Row>
               {products.map(product => (
                   <Col key={product._id} className='py-3' sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}  />
                   </Col>
               ))}
           </Row>}
          
        </Fragment>
    )
}


export default HomeScreen
