import React, { useEffect, useState } from 'react'
import AddComment from "./components/AddComment"

const App = () => {

  const[data, setdata]=useState([])

  const fetchApi = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((abcd) => {console.log(abcd)
      setdata(abcd.filter(stopdata => stopdata.id >= 1 && stopdata.id <= 10))
    });    
  };

  useEffect (() => {
    fetchApi();
      }, [])

      const newComment = ( sendingData) => {

        const newNumber = data[data.length -1].id + 1
        // console.log('=in app js=',sendingData);
       
        const newCommentObj = {
          id: newNumber,
          name: sendingData.name,
          username: sendingData.username,
          email: sendingData.email,
          address: {
            street: sendingData.address.street,
            suite: sendingData.address.suite,
            city: sendingData.address.city,
            zipcode: sendingData.address.zipcode,
            geo: {
              lat: sendingData.address.geo.lat,
              lng: sendingData.address.geo.lng
            }
          },
          phone: sendingData.phone,
          website: sendingData.website,
          company: {
            name: sendingData.company.name,
            catchPhrase: sendingData.company.catchPhrase,
            bs: sendingData.company.bs
          }
        }
        
        setdata([...data, newCommentObj])
      }


  return (
    <div>
         <AddComment  fetchdata={data}  getdatafromlist={newComment}/>
    </div>
  )
}

export default App;


