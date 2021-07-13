import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>TOP SELLERS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('./assets/images/amongImage.png').default}
              text='Among Us'
              label='Small'
              path='/products'
              price='$29.99'
            />
            <CardItem
              src={require('./assets/images/avoImage.jpg').default}
              text='Avocado'
              label='Mini'
              path='/products'
              price='$29.99'
            />
            <CardItem
              src={require('./assets/images/bobaImage.png').default}
              text='Boba'
              label='Mini'
              path='/products'
              price='$29.99'
            />
            <CardItem
              src={require('./assets/images/dinoImage.png').default}
              text='Dinosaur'
              label='Medium'
              path='/products'
              price='$29.99'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('./assets/images/dogoImage.png').default}
              text='Dog'
              label='Mega'
              path='/products'
              price='$29.99'
            />
            <CardItem
              src={require('./assets/images/christPusheen.png').default}
              text='Christmas Pusheen'
              label='Small'
              path='/products'
              price='$29.99'
            />
            <CardItem
              src={require('./assets/images/octoImage.png').default}
              text='Octopus'
              label='Medium'
              path='/products'
              price='$29.99'
            />
            <CardItem
              src={require('./assets/images/sonicImage.png').default}
              text='Sonic'
              label='Small'
              path='/products'
              price='$29.99'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
