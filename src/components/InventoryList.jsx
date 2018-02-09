import React from 'react';
import Inventory from './Inventory';
import Sugar from '../../assets/images/Sugar.png';
import Rice from '../../assets/images/Rice.png';
import Strawberry from '../../assets/images/Strawberry.png';
import Pepper from '../../assets/images/Pepper.png';
import Eggplant from '../../assets/images/Eggplant.png';
import Milk from '../../assets/images/Milk.png';


const masterInventory = [
  {
    name: 'Sugar',
    price: 325,
    farm: 'Marnie',
    energy: 25,
    image: Sugar
  },
  {
    name: 'Rice',
    price: 200,
    farm: 'George',
    energy: 13,
    image: Rice
  },
  {
    name: 'Strawberry',
    price: 120,
    farm: 'Egg Festival',
    energy: 25,
    image: Strawberry
  },
  {
    name: 'Hot Peppers',
    price: 40,
    farm: 'Shane',
    energy: 50,
    image: Pepper
  },
  {
    name: 'Eggplant',
    price: 100,
    farm: 'Pam',
    energy: 20,
    image: Eggplant
  },
  {
    name: 'Goat Milk',
    price: 500,
    farm: 'Pam',
    energy: 500,
    image: Milk
  }
];

const InventoryList = () => {
  const flexStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    flexWrap: 'wrap',

  };
  return (
    <div style={flexStyle}>
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
