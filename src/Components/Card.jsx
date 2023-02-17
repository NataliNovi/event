import React from 'react';
import Button from 'react-bootstrap/Button';

export default class Card extends React.Component {
    constructor(props)
    {
    super(props)
    this.state = {}

    this.onClick = this.onClick.bind(this);
    }

        // без е
        // onClick=(title) => {
    //     this.setState({title:title});
    // }

    // onClick=(title,e) => {
    //     this.setState({title:title});
    // }

    //третий вариант записи
    // onClick=(title)=> (e) => {
    //     this.setState({title:title});
    // }

    //4ый вариант
    onClick= (e) => {
    this.setState({title:e.target.dataset.title});
    }


   render() {
   const{title,price,url} = this.props;
   console.log(this.props);
   
   return (
    <Card style={{width: '15rem'}}>
        <Card.Img variant="top" src={url}/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                <span className='card_price'>${price}</span>
            </Card.Text>
            {/*это через bind: <Button variant="primary" onClick={this.onClick.bind(this.title)}>Add to cart </Button>
            {
                this.state.title&&
                <p>Вы положили в корзину {this.state.title}</p>
            } */}

            {/* это второй вариант <Button variant="primary" onClick={(e)=>this.onClick(title,e)}>Add to cart </Button>
            {
                this.state.title&&
                <p>Вы положили в корзину {this.state.title}</p>
            } */}

               {/* это третий вариант - самый быстрый. е передается неявно
               <Button variant="primary" onClick={this.onClick(title)}>Add to cart </Button>
            {
                this.state.title&&
                <p>Вы положили в корзину {this.state.title}</p>
            } */}

            {/* четвертый вариант - самый лучший с дата-атрибутами*/}
            <Button variant="primary" data-title={title} onClick={this.onClick}>Add to cart </Button>
            {
                this.state.title&&
                <p>Вы положили в корзину {this.state.title}</p>
            } 




        </Card.Body>
    </Card>
   )

   }
}