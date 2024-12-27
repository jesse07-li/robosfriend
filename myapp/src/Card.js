import React from 'react';

const Card = ({id, name, username, email})=>{
    return(
        <div className='tc dib bg-light-green br3 pa2 ma2 grow bw3 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
        <h2>{name}</h2>
        <p>{email}</p>
        </div>
    )
}


export default Card;
