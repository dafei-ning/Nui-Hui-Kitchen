import React from 'react';
import './Model.css';

const model = (props) => (
    <div
        className="Model"
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
        {props.children}
    </div>
);

export default model;