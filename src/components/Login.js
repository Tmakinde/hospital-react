import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardHeader, CardBody, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
//import image from './src/components/img/img3.jpg'

const Login = (props) => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const getCredentials = (e) => {
        e.preventDefault()
        if (!username) {
            alert("Username is required")
        }
        if (!password) {
            alert("Password is required")
        }
        
        props.getCredentials(username, password)
    }

    return (
        <>
            <Row style={{width: "100%", height: "100%"}}>
                <Col md="6" sm="6">
                    <img src={process.env.PUBLIC_URL + 'img/img3.jpg'} style={{width: "100%"}} alt="hospital web app" />
                </Col>
                <Col md="6" sm="6">
                    <Card style={{backgroundColor: "blue"}}>
                        <CardHeader><h1 class="h3 mb-3 font-weight-normal" style={{color: "red"}}>Patient Login Page</h1></CardHeader>
                        <Form onSubmit={getCredentials}>
                            <CardBody>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" placeholder="email address" onChange={(e) => setusername(e.target.value)} />
                                </FormGroup>
                            </CardBody>
                            <CardBody>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" placeholder="password field" onChange={(e) => setpassword(e.target.value)} />
                                </FormGroup>
                            </CardBody>
                            <Button color="success" type="submit" size="lg" block style={{margin: "auto"}}>Submit</Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        
        </>
    )
}

export default Login
