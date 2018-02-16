import React from 'react';
import {Switch, Route} from  'react-router-dom';
import InventoryList from './InventoryList';
import EmployeeArea from './Employee/EmployeeArea';
import Header from './Header';
import { v4 } from 'uuid';

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
      masterInventoryList: {
        '0': {
          name: 'Sugar',
          price: 325,
          farm: 'Marnie',
          energy: 25,
          image: Sugar,
          quantity: 48
        },
        '1': {
          name: 'Rice',
          price: 200,
          farm: 'George',
          energy: 13,
          image: Rice,
          quantity: 48
        },
        '2': {
          name: 'Strawberry',
          price: 120,
          farm: 'Egg Festival',
          energy: 25,
          image: Strawberry,
          quantity: 48
        },
        '3': {
          name: 'Hot Peppers',
          price: 40,
          farm: 'Shane',
          energy: 50,
          image: Pepper,
          quantity: 48
        },
        '4': {
          name: 'Eggplant',
          price: 100,
          farm: 'Pam',
          energy: 20,
          image: Eggplant,
          quantity: 48
        },
        '5': {
          name: 'Goat Milk',
          price: 500,
          farm: 'Pam',
          energy: 500,
          image: Milk,
          quantity: 48
        }
      },
      //end of inventory list//
      selectedProduct: null
    };
    this.handleAddingNewInventory = this.handleAddingNewInventory.bind(this);
    this.handleChangingSelectedProduct = this.handleChangingSelectedProduct.bind(this);
  }

  handleAddingNewInventory(newProduct) {
    let newProductId = v4();
    let newMasterList = Object.assign({}, this.state.masterInventoryList, {[newProductId]: newProduct});
    this.setState({masterInventoryList: newMasterList});
  }
  handleChangingSelectedProduct(product) {
    this.setState({selectedProduct: product});
    console.log(this.state.selectedProduct.name);
  }
  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <InventoryList inventoryList={this.state.masterInventoryList} onProductSelection={this.handleChangingSelectedProduct}/> } />
          <Route exact path='/employee' render={(props) => <EmployeeArea inventoryList={this.state.masterInventoryList} onAddNew={this.handleAddingNewInventory} currentRouterPath={props.location.pathname} onProductSelection={this.handleChangingSelectedProduct}/> } />
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
