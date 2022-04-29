import React from 'react'
import AllData from './AllData'
import Forms from "./Form"
// import {Container} from "react-bootstrap";

const AddComment = (props) => {

    const newAddedData = (sendingData) => {
        props.getdatafromlist(sendingData)
        return sendingData
    }
    console.log('inside addComment->',props.fetchdata);
    return (
        <div>
            <Forms newdata={newAddedData}/>
            <AllData fetchdata = {props.fetchdata}/>
        </div>
  )
}

export default AddComment;