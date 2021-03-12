import React from 'react';
import Button from './Button';


const Card = (props) => {
  return (
    <figure>
      <img src={props.img} alt="" />
      <figcaption>
        <h5>{props.product}</h5>
        <h5>{props.price}</h5>
        <Button btntext={props.buttonText} />
      </figcaption>
    </figure>
  );
}

export default Card;
