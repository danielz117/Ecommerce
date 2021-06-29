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
              src={require('./assets/images/weed-1.png').default}
              text='Cartridge'
              label='Indica'
              path='/services'
              price='$29.99'
            />
            <CardItem
              src={require('./assets/images/weed-1.png').default}
              text='Moon Rocks'
              label='Indica'
              path='/services'
              price='$29.99'
            />
            <CardItem
              src={require('./assets/images/weed-1.png').default}
              text='Shatter'
              label='Indica'
              path='/services'
              price='$29.99'
            />
            <CardItem
              src={require('./assets/images/weed-1.png').default}
              text='Ranchers'
              label='Indica'
              path='/products'
              price='$29.99'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('./assets/images/weed-1.png').default}
              text='Lifter'
              label='Sativa'
              path='/services'
              price='$29.99'
            />
            <CardItem
              src={require('./assets/images/weed-1.png').default}
              text='Astroids'
              label='Sativa'
              path='/products'
              price='$29.99'
            />
            <CardItem
              src={require('./assets/images/weed-1.png').default}
              text='Headband'
              label='Sativa'
              path='/sign-up'
              price='$29.99'
            />
            <CardItem
              src={require('./assets/images/weed-1.png').default}
              text='Kush Mintz'
              label='Sativa'
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
