import React from 'react';
import INVENTORY from '../InventoryData';
import Inventory from '../Inventory';

const EmployeeArea = () => {
  const formStyle = {

  };
  return (
    <div>
      <h1>Pierre's Employee Area</h1>
      <h2>Restock!</h2>
      <form style={formStyle}>
        <input type='text'
          id='name'
          placeholder='Item Name'/>
        <input type='number'
          id='price'
          placeholder='What is the price?'/>
        <input type='text'
          id='farm'
          placeholder='What Farm is this From?'/>
        <input type='number'
          id='energy'
          placeholder='Energy Level'/>
        <input type=''
          id='pic'
          placeholder='Picture URL'/>
        <button type='submit'>Add Item</button>
      </form>
      <div className="edit-form">
        <h1>Edit a Product!</h1>
        <p>Please select an Product to be Edited</p>
        <hr> </hr>
      </div>
      <div>
        {INVENTORY.map((inventory, i) =>
          <Inventory
            name={inventory.name}
            price={inventory.price}
            farm={inventory.farm}
            energy={inventory.energy}
            image={inventory.image}
            key={i} />
        )}
      </div>
    </div>
  );
};

export default EmployeeArea;
