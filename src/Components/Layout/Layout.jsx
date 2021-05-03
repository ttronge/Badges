import React from 'react'
import Navar from '../Navbar/Navbar'


const Layaout = (props) => {
    return (
        <React.Fragment>
            <Navar />
            {props.children}
        </React.Fragment>
    )
}
export default Layaout