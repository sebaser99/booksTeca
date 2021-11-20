import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'



function Navbar(){
    return(
        
            <nav>
                <ul className="nav">
                    <Button  variant="text"  onClick={()=>{window.location = "/"}}>Inicio</Button>
                    <Button  variant="text" component={Link} to="/newbook">Nuevo Libro</Button>
                </ul>
            </nav>
       
    )
}

export {Navbar}