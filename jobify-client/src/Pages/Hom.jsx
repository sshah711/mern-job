import React, { useState } from 'react'
import Banner from '../components/Banner'

const Hom = () => {
  const [query, setQuery] = useState("");
        const handleInputChange = (event) => {
        setQuery(event.target.value)
        //console.log(event.target.value)
    }

  return (
  <Banne query={query} handleInputChange={handleInputChange} />
  )
}

export default Hom