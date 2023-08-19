
# **CryptoApp** ![](https://github.com/arimaleroi/CryptoApp/blob/main/CryptoApp/cryptoapp-web/src/Logo.svg)

**CryptoApp is a website that provides information such as prices, trade volumes, market capitalization on cryptocurrencies.**






## Installation

Install project with Docker in the root CryptoApp folder.

For example, if the client part is located in

`D:\CryptoApp\CryptoApp\cryptoapp-web` folder

then the commands should be entered in:

`D:\CryptoApp\CryptoApp\` folder


```bash
  docker-compose build --no-cache
  docker-compose up
```

#### The client side will be available at localhost:3333
#### The server part will be available at localhost:5555/swagger/index.html



## Coin list page


![](https://github.com/arimaleroi/CryptoApp/blob/main/CryptoApp/readme-assets/1.gif)

```http
  GET /api/Coin/markets
```

The page displays general information about the top 100 cryptocurrencies such as: name, price, price change in 24 hours as a percentage, total volume in 24 hours and market capitalization.

## Search Bar

![](https://github.com/arimaleroi/CryptoApp/blob/main/CryptoApp/readme-assets/2.gif)

Searches for a coin by name or symbol



## Coin details page


![](https://github.com/arimaleroi/CryptoApp/blob/main/CryptoApp/readme-assets/3.gif)

```http
  GET /api/Coin/coin?id=${coinId}
```

| Parameter | Type     |
| :-------- | :------- |
| `coinId`      | `string`

Shows detailed information about a particular coin such as: rank, name, symbol, price, percentage change in price in 24 hours, market capitalization, trading volume in 24 hours, circulating supply.

#### Also shows:
* Chart of price changes. 
* Description, exchangers and social networks of coins.


## Chart

![](https://github.com/arimaleroi/CryptoApp/blob/main/CryptoApp/readme-assets/4.gif)

```http
  GET /api/Coin/marketchart?id=${coinId}&days=${days}
```

| Parameter | Type     |
| :-------- | :------- |
| `coinId`      | `string`
| `days`      | `string`

Chart of price changes over 1 day, 7 days or 30 days. (default is 7 days)

When you hover over a point on the chart, it shows the price and the exact date
(e.g. Aug 13, 2023, 11:01:15 p.m.).

## Tabs content

![](https://github.com/arimaleroi/CryptoApp/blob/main/CryptoApp/readme-assets/5.gif)

Shows the description of the coin, exchanges that have trading pairs with this coin and social networks for this coin.












## Technologies

![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![](https://img.shields.io/badge/Chart%20js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white) ![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white) ![](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white) 
![](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)






## Project plans

* Sort by price, name, price changes, etc
* Currency Converter
* Night mode
## Authors

- [@arimaleroi](https://www.github.com/arimaleroi)

