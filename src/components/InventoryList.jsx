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
        {props.inventoryList.map((inventory, i) =>
          <Inventory
            name={inventory.name}
            price={inventory.price}
            farm={inventory.farm}
            energy={inventory.energy}
            image={inventory.image}
            button={<span key={i} className='button'>Buy</span>}
            key={i}
          />
        )}

      </div>
    </div>
  );
};

InventoryList.propTypes = {
  inventoryList: PropTypes.array
};


export default InventoryList;
