import React from 'react'

const Card2 = () => {
    return (
        <div className='card'>
            <img  alt='Image' height="100%" width="100%">Image:{props.Image}</img>
            <h3>name:{props.name}</h3>
        </div>
    )
}

export default Card2
