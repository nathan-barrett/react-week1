import React from 'react';
import Inventory from './Inventory';

const masterInventory = [
  {
    name: 'Sugar',
    price: 325,
    farm: 'Marnie',
    energy: 25,
    image: 'assets/img/Sugar.png'
  },
  {
    name: 'Rice',
    price: 200,
    farm: 'George',
    energy: 13,
    image: 'assets/img/Rice.png'
  },
  {
    name: 'Strawberry',
    price: 120,
    farm: 'Egg Festival',
    energy: 25,
    image: 'assets/img/Strawberry.png'
  },
  {
    name: 'Hot Peppers',
    price: 40,
    farm: 'Shane',
    energy: 50,
    image: 'assets/img/Pepper.png'
  },
  {
    name: 'Eggplant',
    price: 100,
    farm: 'Pam',
    energy: 20,
    image: 'assets/img/Eggplant.png'
  },
  {
    name: 'Goat Milk',
    price: 500,
    farm: 'Pam',
    energy: 500,
    image: 'assets/img/Milk.png'
  }
];

const InventoryList = () => {
  return (
    <div>
      {masterInventory.map((inventory, i) =>
        <Inventory
          name={inventory.name}
          price={inventory.price}
          farm={inventory.farm}
          energy={inventory.energy}
          image={inventory.image}
          key={i} />
      )}
    </div>
  );
};

export default InventoryList;
