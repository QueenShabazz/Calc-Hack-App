import React from 'react';
import Form from './Form'
import News from './News'
import Footer from './Footer'
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import './App.css';


function App() {
  

  return (
    <>
      <div className="App">
        <h1>Stimulus Package Calculator</h1>
        <iframe src="https://giphy.com/embed/KDgxCt2CTuhnBKn1nm" width="300px" height="300px" frameBorder="0" allowFullScreen></iframe>
        <div>
        <Form />          
        </div>
        <p style={{padding: '0 60px'}}>What will this calculator help you do? The COVID-19 or Coronavirus pandemic has affected all of us. Determine whether your will receive any benefits for the most recently passed stimulus package bill.
        </p>  
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
