import React from 'react'
import ConfLogo from '../../Images/badge-header.svg'
import '../style/Badge.css'
import avatar from '../../Images/Tomas_tronge.JPG'
import Gravatar from '../Gravatar/Gravatar'

class Badge extends React.Component {

    render() {

        return (
            <div className='Badge' >
                <div className='Badge__header'>
                    <img src={ConfLogo} alt="Logo de la conferrebcua" />
                </div>

                <div className='Badge__section-name '>
                    <Gravatar className="Badge__avatar"
                        email={this.props.email}
                        alt='avatar'
                    />
                    <h1> {this.props.name}<br /> {this.props.lastName} </h1>
                </div>

                <div className='Badge__section-info'>
                    <h3>{this.props.job} </h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className='Badge__footer'>
                    #PlatiziConf
                </div>
            </div>
        )
    }
}

export default Badge