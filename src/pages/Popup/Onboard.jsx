import axios from 'axios'
import React from 'react'

const Onboard = () => {
  
  /* axios.get('https://dev-ouciyri7.us.auth0.com/authorize', {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  }).then(res => {
    console.log(res)
  }
  ).catch(err => {
    console.log(err)
  }
  ) */

  axios.get(`https://dev-ouciyri7.us.auth0.com/authorize`).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  }
  )


  return (
    <>
      
    </>
  )
}

export default Onboard