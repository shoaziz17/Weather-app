import axios from 'axios';
import React from 'react'

async function  FetchApi({city}) {
    

try{
    const data = await axios.get(baseUrl+`q=${city}&appid=${apiKey}`)
    return data
}catch(err){
    throw err
}

  return (
    <div></div>
  )
}

export default FetchApi