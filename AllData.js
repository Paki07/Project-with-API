import "./child.css"
import {Card, Row, Col} from "react-bootstrap";

const AllData = (props) => {
   
    return (
        
        <ul>
              <Row>  
            {
                props.fetchdata.map(item => {
                    return (

                        <Col md={4} style={{ marginBottom: '10px'}}>
                        <Card style={{ width: '25rem', height: '30rem' }}>
                        <Card.Body>
                            <Card.Title><b>NAME: </b>{item.name}</Card.Title>
                            <br></br>
                            <Card.Subtitle className="mb-2 text-muted"><b>ID: </b>{item.id} </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted"><b>USER NAME: </b>{item.username} </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted"><b>EMAIL: </b>{item.email} </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted"><b>PHONE NUMBER: </b>{item.phone} </Card.Subtitle>
                            <br></br>
                            <Card.Text><b>ADDRESS:</b>{item.address.street} , {item.address.suite} , {item.address.city} - {item.address.zipcode}</Card.Text>
                            <Card.Text><b>LAT: </b>{item.address.geo.lat} </Card.Text>
                            <Card.Text><b>LNG: </b>{item.address.geo.lng} </Card.Text>
                            <Card.Text><b>WEBSITE: </b>{item.website} </Card.Text>
                            <Card.Text><b>CATCH PHRASE: </b>{item.company.catchPhrase} </Card.Text>
                            <Card.Text><b>BS: </b>{item.company.bs} </Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>
                        
                    )
                })
            }
            </Row>
        </ul>
    )
}

export default AllData;





