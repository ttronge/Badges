import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Badge from '../Components/Badge/Badge'
import DeleteBadgeModal from '../Components/DeleteBadge/Delete'
import Modal from '../Components/modal/Modal'
import './style/BadgeDetails.css'

function useIncreaseCount(max) {
    const [count, setCount] = useState(0)
    if (count > max) {
        setCount(0)
    }
    return [count, setCount]
}
function BadgeDetails(props) {
    const [count, setCount] = useIncreaseCount(4)
    const badge = props.badge
    return (
        <div>
            <div className='BadgeDetails__hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src="https://static.platzi.com/media/tmp/class-files/git/platzi-badges/platzi-badges-20.DetallesDeUnBadge/src/images/platziconf-logo.svg" alt="Logo de conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name ">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge firstName={badge.firstName} lastName={badge.lastName} email={badge.email} twitter={badge.twitter} jobTitle={badge.jobTitle} />
                    </div>


                    <div className="col-6">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <button onClick={() => {
                                    setCount(count + 1)
                                }} className='btn btn-primary mr-4'>
                                    Incrase Count: {count}
                                </button>
                                <br />
                                <br />
                            </div>
                            <Link to={`/badges/${badge.id}/edit`} >
                                <button className='btn btn-primary mb-4'>
                                    Edit
                                 </button>

                            </Link>
                        </div>
                        <div>
                            <button onClick={props.onOpenModal} className='btn btn-danger'>Delete</button>
                            <DeleteBadgeModal
                                isOpen={props.modalIsOpen}
                                onClose={props.onCloseModal}
                                onDeleteBadge={props.onDeleteBadge}
                            >tomi</DeleteBadgeModal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BadgeDetails