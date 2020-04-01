import React from 'react'

export default class Form extends React.Component{
    constructor(props){
        super(props); 
        this.state={
            value: '',
            status: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        
        event.preventDefault();
        const payment = document.getElementById("payment")
        const salary = this.state.value
        const status = this.state.status
    // Payment if single & salary at or under $75000
    if (status ==="single" && salary <= 75000)
        {
            payment.innerHTML=" $1,200"

        }
    
//if salary between 75000 & 80000
    
   else if (( salary >75000) && salary <=80000)
        {
            payment.innerHTML=" $950"
        }
    //if salary between 80000 & 85000
    
   else if (( salary >80000) && salary <=85000)
   {
    payment.innerHTML=" $700"
   }
   //if salary between 85000 & 90000
    
   else if (( salary >85000) && salary <=90000)
        {
            payment.innerHTML=" $450"
        }
    //if salary between 95000 & 99000
    
   else if (( salary >95000) && salary <=99000)
   {
    payment.innerHTML=" $200"
   }


    // for salary abouve 99000
    else 
        {
            payment.innerHTML=" $0"
          
        }
        
    
}

    
    render(){
        return(
            <>
                <form  onSubmit={this.handleSubmit} style ={{display: "flex", flexDirection: "column", alignItems: "baseline" }}>
                    <label htmlFor="single"><input name="single"  type="radio"/> Single </label>
                    <label htmlFor="married"><input name="married" type="radio"/> Married </label>
                    <label htmlFor="head"><input name="head" type="radio"/> Head of Household </label>
                    <label htmlFor="income"><input name="income" type="number"/> Adjusted Gross Income </label>
                    <label htmlFor="children"><input name="children" type="number"/>  Number of Children Claimed as Dependents </label>  
                    <input name="submit" type="submit" value="Submit"/> 
                </form>
                <p> Your estimated stimulus check = $</p> <span id="payment"></span>
                <p>*Your information is not collected</p>
            </>
        )
    }
}