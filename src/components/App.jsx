import React from 'react';
import {Switch, Route} from  'react-router-dom';
import InventoryList from './InventoryList';
import EmployeeArea from './Employee/EmployeeArea';


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={InventoryList} />
        <Route exact path='/employee' component={EmployeeArea} />
      </Switch>
    </div>
  );
};

export default App;
