import React from 'react';
import PropTypes from 'prop-types';

const Inventory = (props) => {
  return (
    <div className='inventory-container'>
      <h3>{props.name}</h3>
      <img src={props.image}/>
      <p>Price: {props.price}</p>
      <p>Farm: {props.farm}</p>
      <p>Energy Level: props.energy</p>
    </div>
  );
};

Inventory.propTypes = {
  name: PropTypes.string.IsRequired,
  price: PropTypes.number.IsRequired,
  farm: PropTypes.string.IsRequired,
  energy: PropTypes.number.IsRequired,
  image: PropTypes.string
};

export default Inventory;
