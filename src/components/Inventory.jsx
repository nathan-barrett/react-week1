import React from 'react';
import PropTypes from 'prop-types';
import Sell from './Sell';

function Inventory(props) {

  return (
    <div className='inventory-container'>
      <h3 className='full-width'>{props.name}</h3>
      <img src={props.image} />
      <p className='full-width'>Price: {props.price}</p>
      <p className='full-width'>Farm: {props.farm}</p>
      <p className='full-width'>Energy Level: {props.energy}</p>
      <Sell />
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
          margin-bottom: 4vh;
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
  name: PropTypes.string,
  price: PropTypes.number,
  farm: PropTypes.string,
  energy: PropTypes.number,
  image: PropTypes.any
};

export default Inventory;
