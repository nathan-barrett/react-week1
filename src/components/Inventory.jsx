import React from 'react';
import PropTypes from 'prop-types';

function Inventory(props) {

  return (
    <div className='inventory-container'>
      <h3 className='full-width'>{props.name}</h3>
      <img src={props.image} />
      <p className='full-width'>Price: {props.price}</p>
      <p className='full-width'>Farm: {props.farm}</p>
      <p className='full-width'>Energy Level: {props.energy}</p>
      <style jsx>{`
        .inventory-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          border: 2px solid black;
          box-shadow: 2px 2px 5px grey;
          width: 400px;
          height: 300px;
          margin-top: 2vh;
          flex-direction: column;
        }
        .full-wdith {
          width: 100%;
        }
        img {
          max-width: 100%
        }
      `}
      </style>
    </div>
  );
}

Inventory.propTypes = {
  name: PropTypes.string.IsRequired,
  price: PropTypes.number.IsRequired,
  farm: PropTypes.string.IsRequired,
  energy: PropTypes.number.IsRequired,
  image: PropTypes.any
};

export default Inventory;
