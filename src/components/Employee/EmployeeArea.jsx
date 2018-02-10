import React from 'react';

const EmployeeArea = () => {
  return (
    <h1>Pierre's Employee Area</h1>
     <h2>Restock The Shelves</h2>
     <hr></hr>
     <form>
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
  );
}

export default EmployeeArea;
