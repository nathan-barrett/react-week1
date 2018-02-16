import React from 'react';
import Inventory from '../Inventory/Inventory';
import PropTypes from 'prop-types';


const Edit = (props) => {
  const flexStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    flexWrap: 'wrap',
  };
  return (
    <div>
      <div className="edit-form">
        <h1>Edit a Product!</h1>
        <p>Please select an Product to be Edited</p>
      </div>
      <div style={flexStyle}>
        {Object.keys(props.inventoryList).map(function(productId) {
          const inventory = props.inventoryList[productId];
          return <Inventory
            name={inventory.name}
            price={inventory.price}
            farm={inventory.farm}
            energy={inventory.energy}
            image={inventory.image}
            quantity={inventory.quantity}
            button={<span onClick={props.onProductSelection} className='button'>Buy</span>}
            key={productId}
            currentPath={props.currentPath}
            productId={productId}
            onProductSelection={props.onProductSelection}
          />;
        })}

      </div>
    </div>
  );
};

Edit.propTypes = {
  inventoryList: PropTypes.object,
  currentPath: PropTypes.string,
  onProductSelection: PropTypes.func
};

export default Edit;
