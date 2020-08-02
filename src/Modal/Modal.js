import React from "react";
import './Modal.css';

export default class Modal extends React.Component {
    state = {
        isOpen:false
    }
    render() {
        return (
            <React.Fragment>
                <button className='modal__btn' onClick={() => this.setState({isOpen:true})}>Open modal</button>
                {this.state.isOpen && (
                    <div className='modal'>
                    <div className='modal__body'>
                        <h1>Modal title</h1>
                        <p>I'm awesome modal!!!</p>
                        <button onClick={() => this.setState({isOpen:false})}>Close button</button>
                    </div>
                </div>
                )}
            </React.Fragment>
        )
    }
}