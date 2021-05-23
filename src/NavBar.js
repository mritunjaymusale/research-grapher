import React from 'react'
import { Navbar } from 'react-materialize';
import * as M from 'materialize-css'

export const NavBar = () => {
    return (
        <React.Fragment>
            <Navbar brand={<a href="" className="center">Research Grapher</a>} className='black' >
            </Navbar>
        </React.Fragment>
    )
}

export default NavBar;