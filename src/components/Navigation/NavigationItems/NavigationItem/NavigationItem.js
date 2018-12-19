import React from 'react';
import './NavigationItem.css';

const navigationItem = (props) => {
    let classes = [];
    classes.push('active');
    classes.push('hover');

    return (
        <li className="NavigationItem">
            <a
                href={props.link}
                className={props.active ? classes.join(' ') : null}
            >
                {props.children}
            </a>
        </li>
    );
};


export default navigationItem;
