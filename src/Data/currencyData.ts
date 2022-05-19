export type Currency ={
    id:number,
    name:string,
    isChecked:boolean,
}

const currencies: Currency[] = [
  {
    id: 1,
    name: 'EUR',
    isChecked: false,
  },
  {
    id: 2,
    name: 'PLN',
    isChecked: false,
  },
  {
    id: 3,
    name: 'GEL',
    isChecked: false,
  },
  {
    id: 4,
    name: 'DKK',
    isChecked: false,
  },
  {
    id: 5,
    name: 'CZK',
    isChecked: false,
  },
  {
    id: 6,
    name: 'GBP',
    isChecked: false,
  },
  {
    id: 7,
    name: 'SEK',
    isChecked: false,
  },
  {
    id: 8,
    name: 'USD',
    isChecked: false,
  },
  {
    id: 9,
    name: 'RUB',
    isChecked: false,
  },

];
export const getCurrencies = () => [...currencies];
export default currencies;
