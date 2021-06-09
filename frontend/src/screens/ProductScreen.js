import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Image, ListGroup, Card, Button } from 'react-bootstrap' 
import Rating from '../components/Rating'

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const singleProduct = async () => {
            const res = await fetch(`/api/products/${match.params.id}`)
            const data  = await res.json();
            setProduct(data)
            console.log(data);
        }
        singleProduct()

        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
        <Link to='/' className='btn my-2 action-button shadow animate blue'>Go Back</Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                       <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroup.Item>

                    <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

                    <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price</Col>
                            <Col>
                            <strong>{product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <Row>
                            <Col>Status</Col>
                            <Col>
                            {product.countInStock ? 'In Stock' : 'Out of Stock'}
                            </Col>
                        </Row>
                        
                    </ListGroup.Item>

                    <ListGroup.Item>
                       <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                           Add To Cart
                       </Button>
                    </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        </Fragment>
    )
}

export default ProductScreen