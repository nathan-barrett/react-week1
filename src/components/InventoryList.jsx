import React from 'react';
import Inventory from './Inventory/Inventory';
import PropTypes from 'prop-types';


const InventoryList = (props) => {
  const flexStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    flexWrap: 'wrap',
  };
  return (
    <div>
      <div style={flexStyle}>
        {Object.keys(props.inventoryList).map(function(productId) {
          let inventory = props.inventoryList[productId];
          return <Inventory
            name={inventory.name}
            price={inventory.price}
            farm={inventory.farm}
            energy={inventory.energy}
            image={inventory.image}
            quantity={inventory.quantity}
            button={<span onClick={props.onProductSelection} className='button'>Buy</span>}
            key={productId}
            productId={productId}
            onProductSelection={props.onProductSelection}
          />;
        })}

      </div>
    </div>
  );
};

InventoryList.propTypes = {
  inventoryList: PropTypes.object,
  onProductSelection: PropTypes.func
};


export default InventoryList;
