// src/components/CurrencyList.js
import React from 'react';

const CurrencyList = ({ currencies }) => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div>
        <table className="table table-borderless text-center">
          <thead>
            <tr>
              <th>Currency</th>
              <th>We Buy</th>
              <th>Exchange Rate</th>
              <th>We Sell</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map(currency => (
              <tr key={currency.code}>
                <td>{currency.name}</td>
                <td>{currency.weBuy}</td>
                <td>{currency.exchangeRate}</td>
                <td>{currency.weSell}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-center mt-3">Rates are based from 1 USD</p>
        <p className="text-center">This application uses API from https://currencyfreaks.com</p> 
      </div>
    </div>
  );
};

export default CurrencyList;
