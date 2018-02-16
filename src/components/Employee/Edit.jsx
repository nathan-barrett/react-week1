import React from 'react';
import INVENTORY from '../InventoryData';
import Inventory from '../Inventory/Inventory';

const Edit = () => {
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
        {INVENTORY.map((inventory, i) =>
          <Inventory
            name={inventory.name}
            price={inventory.price}
            farm={inventory.farm}
            energy={inventory.energy}
            image={inventory.image}
            button={<span key={i}>Edit</span>}
            key={i} />
        )}
      </div>
    </div>
  );
};

export default Edit;
