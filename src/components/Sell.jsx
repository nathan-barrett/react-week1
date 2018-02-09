import React from 'react';

const Sell = () => {
  return (
    <div>
      <button className="sell-button">Buy!</button>
      <style jsx>{`
        .sell-button:hover {
          color: #fff;
          background-color: #c82333;
          border-color: #bd2130;
        }
        .sell-button {
          color: #fff;
          background-color: #dc3545;
          border-color: #dc3545;
          display: inline-block;
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
};

export default Sell;
