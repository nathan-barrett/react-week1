import React from 'react';
import PropTypes from 'prop-types';

function Inventory(props) {

  function onProductClick() {
    props.onProductSelection({name: props.name, price: props.price, farm: props.farm, energy: props.energy, image: props.image, quantity: props.quantity});
  }

  // onClick={() => {props.onProductSelection(props.productId);}} className='button'
  return (
    <div className='inventory-container'>
      <h3 className='full-width'>{props.name}</h3>
      <img src={props.image} />
      <p className='full-width'>Amount Left: {props.quantity}</p>
      <p className='full-width'>Price: {props.price}</p>
      <p className='full-width'>Farm: {props.farm}</p>
      <p className='full-width'>Energy Level: {props.energy}</p>
      <button className='button' onClick={onProductClick}>Buy</button>


      <style jsx>{`
        .inventory-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          border: 2px solid black;
          box-shadow: 2px 2px 5px grey;
          width: 400px;
          height: 350px;
          margin-bottom: 4vh;
          flex-direction: column;
        }
        .full-wdith {
          width: 45%;
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
  image: PropTypes.any,
  button: PropTypes.any,
  quantity: PropTypes.number,
  currentPath: PropTypes.string,
  productId: PropTypes.string.isRequired,
  onProductSelection: PropTypes.func
};

export default Inventory;
