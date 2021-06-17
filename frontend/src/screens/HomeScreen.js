import React, { useEffect, Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { connect } from 'react-redux'
import { listProducts } from '../redux/ActionCreators'

const HomeScreen = ({ productList: { products, error, loading }, listProducts }) => {

    useEffect(() => {
        listProducts()
        
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

const mapStateToProps = state => ({
    productList: state.productList
})
export default connect(mapStateToProps, { listProducts })(HomeScreen)
