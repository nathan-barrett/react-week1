import React from 'react';
import Inventory from './Inventory/Inventory';
import INVENTORY from './InventoryData';


const InventoryList = () => {
  const flexStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    flexWrap: 'wrap',
  };
  return (
    <div>
      <div style={flexStyle}>
        {INVENTORY.map((inventory, i) =>
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


export default InventoryList;
