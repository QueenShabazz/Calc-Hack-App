import React from 'react';
import Form from './Form'
import News from './News'
import Footer from './Footer'
import ReactPlayer from 'react-player'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import './App.css';


function App() {
  

  return (
    <>
      <div className="App">
        <h1>Stimulus Package Calculator</h1>
        <p>What will this calculator help you do? The COVID-19 or Coronavirus pandemic has affected all of us. Below is a calculator to help you determine whether your will receive any benefits for the most recently passed stimulus package bill. </p>
        <ReactPlayer url='./gif.mp4' playing />
        <Form />
      {/* New component not displaying initially intended news API stream */}
      <News />
      <div id="social">
        <TwitterTimelineEmbed sourceType="profile" screenName="CDCgov" options={{height: 400}} />
        <TwitterTimelineEmbed sourceType="profile" screenName="Corona_Update_" options={{height: 400}} />
      </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
