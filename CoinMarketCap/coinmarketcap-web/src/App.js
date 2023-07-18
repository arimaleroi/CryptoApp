import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const response = await fetch(
        'https://localhost:44330/api/coincontroller',
        {
          method: 'get'
        }
      );

      if (response.ok) {
        const data = await response.json();
        const dataList = data.data || [];

        this.setState({
          data: dataList
        });
      } else {
        console.error('Ошибка при получении данных');
      }
    } catch (error) {
      console.error('Ошибка при получении данных', error);
    }
  }

  render() {
    const { data } = this.state;

    const dataList = data.map((item, index) => (
      <li key={index}>
        <p>{item.name} {item.symbol} {''}
        {' $'}{item.quote.usd.price.toLocaleString('en', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
        {' '}{item.quote.usd.percent_change_1h.toFixed(2)}{'%'}
        {' '}{item.quote.usd.percent_change_24h.toFixed(2)}{'%'}
        {' '}{item.quote.usd.percent_change_7d.toFixed(2)}{'%'}
        {' $'}{Math.floor(item.circulating_supply * item.quote.usd.price).toLocaleString('en', { useGrouping: true })} 
        </p>
      </li>
    ));

    return (
      <div className='App'>
        <ol>{dataList}</ol>
      </div>
    );
  }
}

export default App;