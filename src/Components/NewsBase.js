import React from 'react'
import { Media } from 'react-bootstrap'

export function NewsBase(props){
    return(
        <Media className = 'm-4'>
            <img
                width = {200}
                height = {150}
                className = ' mr-3'
                src = {props.img}
                alt = 'img'
                onClick = {() => window.open(props.url)}
            />
            <Media.Body>
                <h4>{props.title}</h4>
                <p style = {{ fontStyle: '' }}>{props.text}</p>
            </Media.Body>
        </Media>
    )
}