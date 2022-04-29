
import React from 'react'
import { useState } from 'react';
import "./child.css"  
import {
  Button,
  Form,
  Col, Row
} from "react-bootstrap";

const Forms = (props) => {


    const [id, setId] = useState("");
    const [name, setname] = useState("");
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [street, setstreet] = useState("");
    const [suite, setsuite] = useState("");
    const [city, setcity] = useState("");
    const [zipcode, setzipcode] = useState("");
    const [lat, setlat] = useState("");
    const [lng, setlng] = useState("");
    const [phone, setphone] = useState("");
    const [website, setwebsite] = useState("");
    const [names, setnames] = useState("");
    const [catchPhrase, setcatchpharse] = useState("");
    const [bs, setbs] = useState("");

    
    const handleid = (event) => {
      setId(event.target.value)
    }

    const handlename = (event) => {
      setname(event.target.value)
    }

    const handleusername = (event) => {
      setusername(event.target.value)
    }

    const handleemail = (event) => {
      setemail(event.target.value)
    }

    const handlestreet = (event) => {
      setstreet(event.target.value)
    }

    const handlesuite = (event) => {
      setsuite(event.target.value)
    }

    const handlecity = (event) => {
      setcity(event.target.value)
    }

    const handlezipcode = (event) => {
      setzipcode(event.target.value)
    }

    const handlelat = (event) => {
      setlat(event.target.value)
    }

    const handlelng = (event) => {
      setlng(event.target.value)
    }

    const handlephone = (event) => {
      setphone(event.target.value)
    }

    const handlewebsite = (event) => {
      setwebsite(event.target.value)
    }


    const handlenames = (event) => {
      setnames(event.target.value)
    }


    const handlecatchPharse = (event) => {
      setcatchpharse(event.target.value)
    }


    const handlebs = (event) => {
      setbs(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if ( 
        name === "" || 
        username === "" || 
        email === "" ||
        street === ""  || 
        suite === ""  || 
        city === ""  || 
        zipcode === ""  ||
        lat === ""  || 
        lng === "" || 
        phone === "" || 
        website === "" ||
        names === "" ||
        catchPhrase === "" ||
        bs === "") 
        {
            alert("please fill all the form")
            return
        }

        const submitobj = {
          id: id,
          name: name,
          username: username,
          email: email,
          address: {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
              lat: lat,
              lng: lng
            }
          },
          phone: phone,
          website: website,
          company: {
            name: name,
            catchPhrase: catchPhrase,
            bs: bs
          }
        }

        // const submitobj = {
        //   id : id,
        //   name : name,
        //   username : username,
        //   email : email,
        //   street : street,
        //   suite : suite,
        //   city : city,
        //   zipcode : zipcode,
        //   lat : lat,
        //   lng : lng,
        //   phone : phone,
        //   website : website,
        //   catchPhrase : catchPhrase,
        //   bs : bs, 
        // }
    
          props.newdata(submitobj);
          console.log( "--->", submitobj)
    
          setId("");
          setname("");
          setusername("");
          setemail("");
          setstreet("");
          setsuite("");
          setcity("");
          setzipcode("");
          setlat("");
          setlng("");
          setphone("");
          setwebsite("");
          setnames("");
          setcatchpharse("");
          setbs("");
    }

  return (
      <Form onSubmit={onSubmitHandler} style={{ margin: "1%" }}>
      <Row>
      <Col md={3}>
        <Form.Group className="mb-3" controlId="id">
          <Form.Label  className="design_middle"> id : </Form.Label>
            <Form.Control 
              type="text" 
              name = "id" 
              value ={id} 
              disabled
              onChange={handleid}>
            </Form.Control>
        </Form.Group>
        </Col>

        <Col md={3}>
        <Form.Group className="mb-3" controlId="name">  
          <Form.Label  className="design_middle"> name : </Form.Label>
            <Form.Control 
              type="text" 
              name = "name" 
              value ={name} 
              onChange={handlename}>
            </Form.Control>
          <Form.Text className="text-muted">Please enter body</Form.Text>
        </Form.Group>
        </Col>

        <Col md={3}>
        <Form.Group className="mb-3" controlId="username">  
          <Form.Label  className="design_middle"> username : </Form.Label>
            <Form.Control 
              type="text" 
              name = "username" 
              value ={username} 
              onChange={handleusername}>
            </Form.Control>
          <Form.Text className="text-muted">Please enter body</Form.Text>
        </Form.Group>
        </Col>


        <Col md={3}>
        <Form.Group className="mb-3" controlId="email"> 
          <Form.Label  className="design_middle"> email : </Form.Label>
            <Form.Control 
            type="text" 
            name = "email" 
            value ={email} 
            onChange={handleemail}>
            </Form.Control>
          <Form.Text className="text-muted">Please enter body</Form.Text>
        </Form.Group>
        </Col>
        </Row>


      <Row>
        <Col md={3}>
        <Form.Group className="mb-3" controlId="street"> 
          <Form.Label  className="design_middle"> street : </Form.Label>
            <Form.Control 
            type="text" 
            name = "street" 
            value ={street} 
            onChange={handlestreet}>
            </Form.Control>
          <Form.Text className="text-muted">Please enter body</Form.Text>
        </Form.Group>
        </Col>
        

        <Col md={3}>
        <Form.Group className="mb-3" controlId="suite">
          <Form.Label  className="design_middle"> suite : </Form.Label>
            <Form.Control 
            type="text" 
            name = "suite" 
            value ={suite} 
            onChange={handlesuite}>
            </Form.Control>
          <Form.Text className="text-muted">Please enter body</Form.Text>
        </Form.Group> 
        </Col>  


        <Col md={3}>
        <Form.Group className="mb-3" controlId="city"> 
          <Form.Label  className="design_middle"> city : </Form.Label>
            <Form.Control 
            type="text" 
            name = "city" 
            value ={city} 
            onChange={handlecity}>
              </Form.Control>
          <Form.Text className="text-muted">Please enter body</Form.Text>
        </Form.Group>
        </Col>


        <Col md={3}>
        <Form.Group className="mb-3" controlId="zipcode">  
          <Form.Label  className="design_middle"> zipcode : </Form.Label>
            <Form.Control 
            type="text" 
            name = "zipcode" 
            value ={zipcode} 
            onChange={handlezipcode}>
              </Form.Control>
          <Form.Text className="text-muted">Please enter body</Form.Text>
        </Form.Group>
        </Col>
        </Row>

        <Row>
        <Col md={3}>
        <Form.Group className="mb-3" controlId="lat">  
          <Form.Label  className="design_middle"> lat : </Form.Label>
            <Form.Control 
            type="text" 
            name = "lat" 
            value ={lat} 
            onChange={handlelat}>
              </Form.Control>
          <Form.Text className="text-muted">Please enter body</Form.Text>
        </Form.Group>   
        </Col> 

        <Col md={3}>
        <Form.Group className="mb-3" controlId="lng">  
          <Form.Label  className="design_middle"> lng : </Form.Label>
            <Form.Control 
              type="text" 
              name = "lng" 
              value ={lng} 
              onChange={handlelng}>
            </Form.Control>
          <Form.Text className="text-muted">Please enter body</Form.Text>
        </Form.Group>
        </Col>

        <Col md={3}>
        <Form.Group className="mb-3" controlId="phone">  
          <Form.Label  className="design_middle"> phone : </Form.Label>
            <Form.Control 
              type="text" 
              name = "phone" 
              value ={phone} 
              onChange={handlephone}>
            </Form.Control>
          <Form.Text className="text-muted">Please enter body</Form.Text>
        </Form.Group>
        </Col>

        <Col md={3}>
        <Form.Group className="mb-3" controlId="website">  
          <Form.Label  className="design_middle"> website : </Form.Label>
            <Form.Control 
              type="text" 
              name = "website" 
              value ={website} 
              onChange={handlewebsite}>
            </Form.Control>
          <Form.Text className="text-muted">Please enter body</Form.Text>
        </Form.Group>
        </Col>
        </Row>

        <Row>
        <Col md={3}>
        <Form.Group className="mb-3" controlId="name">  
          <Form.Label  className="design_middle"> lng : </Form.Label>
            <Form.Control 
              type="text" 
              name = "name" 
              value ={names} 
              onChange={handlenames}>
            </Form.Control>
          <Form.Text className="text-muted">Please enter body</Form.Text>
        </Form.Group>
        </Col>


        <Col md={3}>
        <Form.Group className="mb-3" controlId="catchPhrase">  
          <Form.Label  className="design_middle"> catchPhrase : </Form.Label>
            <Form.Control 
              type="text" 
              name = "catchPhrase" 
              value ={catchPhrase} 
              onChange={handlecatchPharse}>
            </Form.Control>
          <Form.Text className="text-muted">Please enter body</Form.Text>
        </Form.Group>
        </Col>


        <Col md={3}>
        <Form.Group className="mb-3" controlId="bs">  
          <Form.Label  className="design_middle"> bs : </Form.Label>
            <Form.Control 
              type="text" 
              name = "bs" 
              value ={bs} 
              onChange={handlebs}>
            </Form.Control>
          <Form.Text className="text-muted">Please enter body</Form.Text>
        </Form.Group>
        </Col>
        </Row>
          <Button variant="primary" type="submit"> Submit </Button>
      </Form>
      
  )
}

export default Forms;


