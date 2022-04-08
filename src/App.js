import Countdown from 'react-countdown';
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';
import './App.css';

import BgImage from './images/BgImage.svg'

function App() {
  return (
    <div className="App">

      <div className='container'>

        <div className='left-section'>

          <div className='left-section-header'>
            <h1>COMING SOON</h1>
            <p>Stay Connected, Stay Updated</p>
          </div>

          <div className='left-section-body'>
            <img id='bg-image' alt='cta' src={BgImage} />
          </div>

          <div className='left-section-footer'>
          </div>

        </div>

        <div className='right-section'>

          <div className='right-section-body'>
            <Countdown
              date={new Date('6,1,2022')}
              renderer={renderer}
            />
            <hr id='horizontal' />

            <div>
              <h1>Get Updates!</h1>

              <div className='email-sub-container'>
                <input type='email' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>

            </div>
          </div>

          <div className='right-section-footer'>
            <a href='https://twitter.com/JsEvans'>
              <BsTwitter />
            </a>

            <a href='https://www.linkedin.com/in/christopher-evans-3858b6207/'>
              <BsLinkedin />
            </a>
            <BsFacebook />
          </div>



        </div>
      </div>

    </div>
  );
}


const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {

    return <h1>Completed</h1>
  } else {
    return (
      <div className='date-item-container'>
        <DateItem value={days} label='Days' />
        <DateItem value={hours} label='Hours' />
        <DateItem value={minutes} label='Minutes' />
        <DateItem value={seconds} label='Seconds' />
      </div>
    )
  }
};

const DateItem = ({ value, label }) => {
  return (
    <div className='date-item'>
      <div className='date-item-value'>{value}</div>
      <div className='date-item-label'>{label}</div>
    </div>
  )
}


export default App;
