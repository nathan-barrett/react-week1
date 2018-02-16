import React from 'react';
import {Switch, Route} from  'react-router-dom';
import InventoryList from './InventoryList';
import EmployeeArea from './Employee/EmployeeArea';
import Header from './Header';

//images for inventory//
import Sugar from '../../assets/images/Sugar.png';
import Rice from '../../assets/images/Rice.png';
import Strawberry from '../../assets/images/Strawberry.png';
import Pepper from '../../assets/images/Pepper.png';
import Eggplant from '../../assets/images/Eggplant.png';
import Milk from '../../assets/images/Milk.png';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterInventoryList: [
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
      ]
      //end of inventory list//
    };
    this.handleAddingNewInventory = this.handleAddingNewInventory.bind(this);
  }

  handleAddingNewInventory(newProduct) {
    let newMasterList = this.state.masterInventoryList.slice();
    newMasterList.push(newProduct);
    this.setState({masterInventoryList: newMasterList});
  }

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <InventoryList inventoryList={this.state.masterInventoryList} /> } />
          <Route exact path='/employee' render={() => <EmployeeArea inventoryList={this.state.masterInventoryList} onAddNew={this.handleAddingNewInventory} /> } />
        </Switch>
        <style global jsx>{`
          .button:hover {
            color: #fff;
            background-color: #c82333;
            border-color: #bd2130;
          }
          .button {
            color: #fff;
            background-color: #dc3545;
            border-color: #dc3545;
            font-weight: 400;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            user-select: none;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: .25rem;
            transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
          }

        `}
        </style>
      </div>
    );
  }
}

export default App;
