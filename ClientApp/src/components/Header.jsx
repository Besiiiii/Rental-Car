import React from "react";
import { Link } from 'react-router-dom'

export const Header = () => {
    return( 
        <div className="head">
          <h1>Hello Headeri</h1>
          <div>
          <h1>Hello</h1>
          <button ><Link to='/signin'>Log in</Link></button>
          <button><Link to='/catalog'>Catalog</Link></button>
        </div>
        </div>
    )
}