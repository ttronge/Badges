import React from 'react'
import ErrorImg from '../Images/404 Error-rafiki.svg'
import './style/NotFound.css'
const NotFound = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="centrar">
                            <h1 className='text'>Error</h1>
                            <img className='foto' src={ErrorImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default NotFound