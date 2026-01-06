import { useState } from 'react'
import useFetch from './useFetch'
import FetchStyle from '../components/FetchStyle.jsx'

function App() {
  const {data,loading,error} = useFetch("https://api.escuelajs.co/api/v1/products");
  if (loading) return (
    <div className='bg-black text-white h-200'>
        <p className='text-center items-center text-2xl'>Loading...</p>
    </div>
  );
  if (error) return (
     <div className='bg-black text-white h-200'>
        <p className='text-center items-center text-2xl'>Error...</p>
    </div>
  );

  return (
    <div className='bg-black text-white'>
    <h1 className='text-center p-5 text-2xl font-extrabold'>Photos</h1>
    <div className='flex flex-wrap justify-between'>
    {
      data.map((each)=>(
        <div>
          <FetchStyle key={each.id} data={each}/>
          
        </div>
      )
        
      )
    }
    </div>
    </div>
  )
}

export default App
