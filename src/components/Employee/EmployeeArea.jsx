import React from 'react';
import Add from './Add';
import Edit from './Edit';

const EmployeeArea = () => {
  return (
    <div>
      <h1>Pierre's Employee Area</h1>
      <h2>Restock!</h2>
      <Add />
      <Edit />
    </div>
  );
};

export default EmployeeArea;
