import React, { useEffect, useRef, useState } from 'react';
import { getCurrencies, Currency } from '../../Data/currencyData';
import styles from './CurrencyCard.module.scss';

const CurrencyCard = () => {
  const [currencyList, setCurrencyList] = useState<Currency[]>(getCurrencies());
  const toggleIsChecked = (curr: Currency | undefined) => {
    setCurrencyList(currencyList.map((c) => {
      if (c.id === curr?.id) {
        return { ...c, isChecked: !c.isChecked };
      }
      return c;
    }));
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.top}>
        {currencyList.map((currency) => (
          currency.isChecked
          && (
          <div
            key={currency.id}
            className={styles.topcard}
          >
            <span>
              {currency.name.toLowerCase()}
            </span>
            <button
              value={currency.id}
              className={styles.button}
              onClick={(e) => {
                toggleIsChecked(currencyList
                  .find((item) => item.id === Number(e.currentTarget.value)));
              }}
            >
              X
            </button>
          </div>
          )
        ))}
      </div>
      <div className={styles.bottom}>
        {currencyList.map((currency) => (
          <button
            key={currency.id}
            value={currency.id}
            className={`${styles.card} ${currency.isChecked ? styles.checked : ''}`}
            onClick={(e) => {
              toggleIsChecked(currencyList
                .find((item) => item.id === Number(e.currentTarget.value)));
            }}
          >
            <input
              value={currency.id}
              checked={currency.isChecked}
              className={styles.input}
              onChange={(e) => {
                toggleIsChecked(currencyList.find((item) => item.id === Number(e.target.value)));
              }}
              type="checkbox"
            />
            <span
              className={styles.span}
            >
              {currency.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CurrencyCard;
