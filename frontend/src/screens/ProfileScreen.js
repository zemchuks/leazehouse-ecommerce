import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails } from '../redux/actions/userActions'

const ProfileScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user} = userDetails
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo} = userLogin
    
    useEffect(() => {
        if(!userInfo) {
            history.push('/login')
        }else{
            if(!user.name) {
                dispatch(getUserDetails('profile'))
            }else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, userInfo, redirect]) 

    const submitHandler = (e) => {
        e.preventDefault() 
        if(password !== confirmPassword) {
            setMessage('Passwords do not match!')
        } else {
            // Dispatch update profile
        }  
    }

    return <Row>
        <Col md={3}>
        <h2>User Profile</h2>
            {error && <Message variant='danger'>{error}</Message>}
            {message && <Message variant='danger'>{message}</Message>}
            {loading && <Loader />}
            <Form  onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='name' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className='my-3' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className='my-3' controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'> Register</Button>
            </Form>
        </Col>
        <Col md={9}>
            <h2>My Orders</h2>
        </Col>
    </Row>
}

export default ProfileScreen
