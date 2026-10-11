import React, { useState } from 'react'
import './Header.css'

const Header = () => {
    const  [caunt, setCaunt] = useState(0);


  return (
    <header className='header'>
        <div className="container">
            <div className="header__container">
                <h1>{caunt}</h1>
               <div className="caunter">
                <button className='btn' onClick={()=> setCaunt (caunt +1)}>inc</button>
                <button className='btn' onClick={()=> setCaunt (caunt -1)}>dec</button>
                <button className='btn' onClick={()=> setCaunt (0)}>res</button>
               </div>
            </div>
        </div>
    </header>
  )
}

export default Header