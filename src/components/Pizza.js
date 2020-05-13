import React from 'react'
import './Pizza.css'

// prop pizza

const Pizza = (props) => {
    return (

        <div>
        Pizza {props.pizza.name}
        </div>
    )
}

export default Pizza
