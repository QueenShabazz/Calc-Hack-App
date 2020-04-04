import React from 'react'

export default class Footer extends React.Component{
    constructor(props){
        super(props); 
        this.state={
          
        }
        
    }

    render(){
        return(
            <>
                <footer style={{backgroundColor: "grey", height: "30vh", display: "flex", padding: "20px"}}>
                    <p>About this calculator: </p>
                    
                        The stimulus check amounts will vary based on your adjusted gross income (AGI) and tax filing status. Our coronavirus stimulus check calculator will show you how much you can expect to receive:


                </footer>
            </>
        )
    }
}