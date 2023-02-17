import React from 'react'
import Card from './Components/Card'
import './App.css';

const cards = [
  {title: "Зимние ботинки", price:'99', description: "Такие только у нас", url: "https://www.ecco-shoes.by/images/eshop/img/jpg/bigw/722363_53806.jpg", textys: "Отличный выбор"},
  {title: "Пляжные тапки", price:'23', description: "Надеюсь, пригодятся", url: "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/d5/P00432613.jpg", textys: "Верные друзья"},
  {title: "Праздничные туфли", price:"85", description: "Теперь и в светлом цвете", url: "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/0d/P00683243.jpg", textys: "Будь королевой"},
];


class App extends React.Component {

  render() {
 
  return (
    <div className="App">
    
    {
    cards.map((card) =>
    <Card key={card.title} title={card.title} price={card.price} description={card.description} url={card.url} textys={card.textys} addedToCard={card.addedToCard}></Card>)
   }
   
    </div>
  );
}}

export default App; 