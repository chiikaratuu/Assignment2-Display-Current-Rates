// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrencyList from './components/CurrencyList';

const App = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(
          'https://api.currencyfreaks.com/latest?apikey=d231575b9eac44de8b7e94b5ae8bfd63'
        );
        const rates = response.data.rates;

        const currenciesData = [
          { code: 'CAD', name: 'CAD', weBuy: calculateWeBuy(rates.CAD), exchangeRate: rates.CAD, weSell: calculateWeSell(rates.CAD) },
          { code: 'EUR', name: 'EUR', weBuy: calculateWeBuy(rates.EUR), exchangeRate: rates.EUR, weSell: calculateWeSell(rates.EUR) },
          { code: 'IDR', name: 'IDR', weBuy: calculateWeBuy(rates.IDR), exchangeRate: rates.IDR, weSell: calculateWeSell(rates.IDR) },
          { code: 'JPY', name: 'JPY', weBuy: calculateWeBuy(rates.JPY), exchangeRate: rates.JPY, weSell: calculateWeSell(rates.JPY) },
          { code: 'CHF', name: 'CHF', weBuy: calculateWeBuy(rates.CHF), exchangeRate: rates.CHF, weSell: calculateWeSell(rates.CHF) },
          { code: 'GBP', name: 'GBP', weBuy: calculateWeBuy(rates.GBP), exchangeRate: rates.GBP, weSell: calculateWeSell(rates.GBP) },
        ];

        setCurrencies(currenciesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCurrencies();
  }, []);

  const calculateWeBuy = rate => (rate * 1.05).toFixed(4);
  const calculateWeSell = rate => (rate * 0.95).toFixed(4);

  return (
    <div className="container mt-4">
      <CurrencyList currencies={currencies} />
    </div>
  );
};

export default App;
