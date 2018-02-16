import React from 'react';
import PropTypes from 'prop-types';

const Add = (props) => {

  let _name = null;
  let _price = null;
  let _energy = null;
  let _pic = null;
  let _farm = null;

  function handleNewProductAdd(event) {
    event.preventDefault();
    props.onAddNew({name: _name.value, price: parseInt(_price.value), farm: _farm.value, energy: parseInt(_energy.value), pic: _pic.value });
    _name.value = '';
    _price.value= '';
    _farm.value= '';
    _energy.value= '';
    _pic.value= '';
  }
  return (
    <form className="form-style">
      <input type='text'
        id='name'
        placeholder='Item Name'
        ref={(input) => {_name = input;}} />
      <input type='number'
        id='price'
        placeholder='What is the price?'
        ref={(input) => {_price = input;}} />
      <input type='text'
        id='farm'
        placeholder='What Farm is this From?'
        ref={(input) => {_farm = input;}} />
      <input type='number'
        id='energy'
        placeholder='Energy Level'
        ref={(input) => {_energy = input;}} />
      <input type=''
        id='pic'
        placeholder='Picture URL'
        ref={(input) => {_pic = input;}} />
      <button className="button" type='submit' onClick={handleNewProductAdd}>Add Item</button>
      <style jsx>{`
        .form-style {
          display: block;
          margin-top: 0em;
        }
        input {
          margin-bottom: 1rem;
          display: block;
          width: 80%;
          padding: .375rem .75rem;
          font-size: 1rem;
          line-height: 1.5;
          color: #495057;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #ced4da;
          border-radius: .25rem;
          transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        }
      `}
      </style>
    </form>
  );
};

Add.propTypes = {
  onAddNew: PropTypes.func
};

export default Add;
