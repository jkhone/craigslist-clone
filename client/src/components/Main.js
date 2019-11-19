import React from "react"
import Side from './Side'
import Categories from './Categories'
import City from './City'
import '../styles/styles.css'

export default props => {
  return (
    <div className='main'>
      <Side />
      <Categories />
      <City />
    </div>
  )
}
