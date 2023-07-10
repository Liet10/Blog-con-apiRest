import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='jumbo'>
      <h1>Bienvenidos al Blog con React</h1>
      <p>Blog desarrollado con MERN Stark (Mongo, Express, React, NodeJS)</p>
      <Link to='/articles' className='button'>Ver artículos</Link>
    </div>
  )
}
