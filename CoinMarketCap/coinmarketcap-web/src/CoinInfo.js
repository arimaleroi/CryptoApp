import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CoinInfo() {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    getData(id);
  }, [id]);

  const getData = async (coinId) => {
    try {
      const response = await fetch(
        `https://localhost:44330/api/coincontroller/getcoin/${coinId}`,
        {
          method: 'get'
        }
      );

      if (response.ok) {
        const data = await response.json();

        setCoinData(data.data[coinId]);
      } else {
        console.error('Ошибка при получении данных');
      }
    } catch (error) {
      console.error('Ошибка при получении данных', error);
    }
  };

  if (!coinData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{coinData.name}</h1>
      {/* Вывод информации о монете */}
    </div>
  );
}

export default CoinInfo;