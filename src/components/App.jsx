import React from 'react';
import {Switch, Route} from  'react-router-dom';
import InventoryList from './InventoryList';
import EmployeeArea from './Employee/EmployeeArea';
import Header from './Header';


class App extends React.Component {
  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={InventoryList} />
          <Route exact path='/employee' component={EmployeeArea} />
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
