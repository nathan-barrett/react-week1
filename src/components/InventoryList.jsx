import React from 'react';
import { Link } from 'react-router-dom';
import Inventory from './Inventory';
import INVENTORY from './InventoryData';
import Sell from './Sell';


const InventoryList = () => {
  const flexStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    flexWrap: 'wrap',
  };
  return (
    <div>
      <header className="header-style">
        <h1>Welcome to Pierre's General Store</h1>
        <div className="links">
          <Link to='/employee'>Employee's Only</Link> | <Link to='/'>Home</Link>
        </div>
      </header>
      <div style={flexStyle}>
        {INVENTORY.map((inventory, i) =>
          <Inventory
            name={inventory.name}
            price={inventory.price}
            farm={inventory.farm}
            energy={inventory.energy}
            image={inventory.image}
            key={i}
          />
        )}

      </div>
      <style jsx>{`
          .header-style {
            background: lightgrey;
            margin-bottom: 25px;
            height: 80px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            margin-right: 25px;
          }
          .links {
            margin-right: 4.25vw;
          }

      `}
      </style>
    </div>
  );
};


export default InventoryList;
