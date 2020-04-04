import React from 'react'
import './Footer.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default class Footer extends React.Component{
    constructor(props){
        super(props); 
        this.state={
          
        }
        
    }

    render(){
        return(
            <>
                <footer>
                <TwitterTimelineEmbed sourceType="profile" screenName="CDCgov" options={{height: 400}} />
                    <p style={{margin: "0 15px", fontSize: 14}}>
                        This calculator is for informational purposes only. 
                        Consult the <a href="https://www.irs.gov/coronavirus">IRS</a> and  <a href="https://www.coronavirus.gov/">The U.S. Corona Virus Task Force</a> for more information. 
                       <br></br> Please note that the stimulus check amounts vary based on your adjusted gross income (AGI) and tax filing status. 
                       <small> <a target="_blank" href="http://www.queenscript.com">Built by Queen Shabazz, queenscript.com</a></small>

                    </p>

                </footer>
            </>
        )
    }
}