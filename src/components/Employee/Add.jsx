import React from 'react';

const Add = () => {
  return (
    <form className="form-style">
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
      <button className="button" type='submit'>Add Item</button>
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

export default Add;
