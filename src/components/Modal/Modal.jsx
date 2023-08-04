import React from 'react'
import './Modal.css';
import { useState } from 'react';


const Modal = ({show, onClose, onSubmit, title, children}) => {
    const [item, setItem] = useState('')

    const handleSubmit = () => {
        setItem('')
        onSubmit(item)
    }

    if (!show) {
        return null
    }

    return (
        <div className='modal' onClick={onClose}>
            <div className='modalcontent' onClick={(e) => e.stopPropagation()}>
                <div className='modalheader'>
                    <h4 className='modaltitle'>{title}</h4>
                </div>
                <div className='modalbody'>
                    {children}
                    <form className='formitem' onSubmit={handleSubmit}>
                        <input 
                            className='inputitem'
                            type="textarea" 
                            id="item" 
                            placeholder="Add a new item" 
                            value={item} 
                            onChange={(e) => setItem(e.target.value)} />
                    </form>
                </div>
                <div className='modalfooter'>
                    <button onClick={onClose} className='buttonclose'>Close</button>
                    <button onClick={handleSubmit} className='buttonagregar'>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Modal