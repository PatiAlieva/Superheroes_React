import React from 'react'

export default function Card(props) {
  return (
    <div className='hero'>
        <h2 className='card-title'>{props.name}</h2>
        <div><p className='card-text'>{props.universe}</p></div>
        <div><p className='card-text'>{props.alterEgo}</p></div>
        <div><p className='card-text'>{props.typeOfActivity}</p></div>
        <div><p className='card-text'>{props.friends}</p></div>
        <div><p className='card-text'>{props.superpowers}</p></div>
        <div><p className='card-text'>{props.rating}</p></div>
        <img alt='picture' src={props.url} className='img'/>
    </div>
  );
}
