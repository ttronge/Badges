import React from 'react'
import ReactDOM from 'react-dom'
import '../style/Modal.css'
function Modal(props) {
    if (!props.isOpen) {
        return null
    }
    return (
        <div>

            {
                ReactDOM.createPortal(
                    <div className='Modal'>
                        <div className="Modal__container">
                            <button onClick={props.onClose} className="Modal__close-button">
                                X
                            </button>
                            {props.children}
                        </div>
                    </div>,
                    document.getElementById('modal'))
            }

        </div>
    )
}
export default Modal