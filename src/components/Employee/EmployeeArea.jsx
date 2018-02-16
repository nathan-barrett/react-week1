import React from 'react';
import Add from './Add';
import Edit from './Edit';
import PropTypes from 'prop-types';

const EmployeeArea = (props) => {
  return (
    <div>
      <h1>Pierre's Employee Area</h1>
      <h2>Restock!</h2>
      <Add onAddNew={props.onAddNew}/>
      <Edit inventoryList={props.inventoryList}/>
    </div>
  );
};
EmployeeArea.propTypes = {
  inventoryList: PropTypes.array,
  onAddNew: PropTypes.func
};

export default EmployeeArea;
