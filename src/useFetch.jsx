import React,{useState,useEffect} from 'react'

const useFetch = (url) => {
  
  const [data,SetData] = useState(null);
  const [loading,SetLoading] = useState(true);
  const [error,SetError] = useState("");

  useEffect(()=>{
    fetch(url)
      .then(res => res.json())
      .then(data=> {
        SetData(data)
        SetLoading(false)
      })
      .catch(err =>{
        SetError(err);
      })

      
      
    
  },[data])

  return (
    {data,loading,error}
  )
}

export default useFetch
