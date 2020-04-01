import React from 'react'

export default class Form extends React.Component{
    constructor(props){
        super(props); 
        this.state={
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        
        event.preventDefault();
        var salary = document.getElementById("amount").value;
    
// If statement for salary under 10600
    if ( salary <= 10600)
        {
            document.getElementById("GrossSalary").innerHTML ="<li>"+ "Your Gross Salary is " +salary+"."+"</li>";
            
            document.getElementById("TaxFreeAllowance").innerHTML ="<li>"+ "Your Tax Free Allowance "+ 10600. +"</li>";
                                                                                                                                                     
            document.getElementById("NetSalary").innerHTML ="<li>"+ "Your Net Salary is "+salary + "." + "</li>" ;

        }
    
// statement for salary between 10600 & 31000
    
   else if (( salary >10600) && salary <= 31000 )
        {
            
            var Taxableamount =( salary - 10600 ); 
            
            var Tax = Taxableamount * 0.20;
            
            var NetSalary = salary-Tax;
            
            document.getElementById("GrossSalary").innerHTML ="<li>"+"Your Gross Salary is" +salary+"."+"</li>";
            
            document.getElementById("TaxFreeAllowance").innerHTML ="<li>"+"Your Tax Free Allowance "+ 10600+"."+"</li>";

            document.getElementById("TaxAt20").innerHTML ="<li>" + "Your Tax At 20% is " + Tax+"."+"</li>";

            document.getElementById("NetSalary").innerHTML ="<li>"+ "Your Net Salary is "+NetSalary+"."+"</li>";

        }
    
    // for salary abouve 31000
    else 
        {
            
            var Taxableamount =( 31000 - 10600 ); 
            
            var Tax = Taxableamount * 0.20;
            
            var Taxableamount2 = ( salary - 31000 )
            
            var Tax1 = Taxableamount2 *.40;
            
            var totaltax = Tax + Tax1;
            
            var NetSalary = salary-totaltax;
            
            
            document.getElementById("GrossSalary").innerHTML ="<li>"+"Your Gross Salary is " +salary+"."+"</li>";
            
            document.getElementById("TaxFreeAllowance").innerHTML ="<li>"+"Your Tax Free Allowance "+ 10600+"."+"</li>";

            document.getElementById("TaxAt20").innerHTML = "<li>"+"Your Tax At 20% is " + Tax+"."+"</li>";

            document.getElementById("TaxAt40").innerHTML ="<li>"+ "Your Tax at 40% is " + Tax1+"."+"</li>";

            document.getElementById("NetSalary").innerHTML ="<li>"+ "Your Net Salary is "+NetSalary+"."+"</li>";

        }
        window.location.reload();
    
}

    
    render(){
        return(
            <>
                <form  onSubmit={this.handleSubmit} style ={{display: "flex", flexDirection: "column", }}>
                    <label htmlFor="single"><input name="single"  type="radio"/> Single </label>
                    <label htmlFor="married"><input name="married" type="radio"/> Married </label>
                    <label htmlFor="head"><input name="head" type="radio"/> Head of Household </label>
                    <label htmlFor="income"><input name="income" type="number"/> Adjusted Gross Income </label>
                    <label htmlFor="children"><input name="children" type="number"/>  Number of Children Claimed as Dependents </label>  
                    <input name="submit" type="submit" value="Submit"/> 
                </form>
                <p> Your estimated stimulus check = $</p>
            </>
        )
    }
}