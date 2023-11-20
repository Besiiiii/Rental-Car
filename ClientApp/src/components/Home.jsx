import React from "react"
import { Link } from "react-router-dom"

export const Home = () => {
    return( 
        <div>
          <h1>Hello</h1>
          <button ><Link to='/signin'>Log in</Link></button>
          <button><Link to='/catalog'>Catalog</Link></button>
        </div>
    )
}