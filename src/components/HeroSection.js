import React,{useState} from 'react';
import '../App.css';
import { Button } from './Button';
import { useHistory } from "react-router-dom";
import './HeroSection.css';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';

function HeroSection() {

  const [isOpen, setOpen] = useState(false)

  const history = useHistory();

  const ShopRoute = () =>{ 
    let path = `/products`; 
    history.push(path);
  }

  return (
    <div className='hero-container'>
      {/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
      <h1>What's your Pick?</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={ShopRoute}
        >
          SHOP NOW
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={()=> setOpen(true)}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Dk_jhTp1UEE" onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}

export default HeroSection;