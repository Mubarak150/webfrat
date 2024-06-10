import React from "react";
import classNames from 'classnames';

export default function (props) {
    return (
        <a href={props.href}>
            <button className={classNames('px-8 py-2 rounded-3xl text-sm', props.buttonClass)}>
                {props.text}
            </button>
        </a>
        
    )
}