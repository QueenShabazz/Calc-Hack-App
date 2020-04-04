import React from 'react'
import './Form.css'
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            status: '',
            payment: '',
        }
        this.onStatusChanged = this.onStatusChanged.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        event.preventDefault()
        this.setState({ value: event.target.value });
    }

    onStatusChanged(event) {
        this.setState({
            status: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const res = document.querySelector('.result')
        res.style.display="block"
        const salary = this.state.value
        const status = this.state.status
        // Payment if single & salary at or under $75000
        if (status === 'single' && salary < 75000) {
            this.setState({ payment: "$1,200" })
        }
        //if salary between 75000 & 80000

        if (status === "single" && (salary > 75000) && salary <= 80000) {
            this.setState({ payment: "$950" })
        }
        //if salary between 80000 & 85000
        if (status === "single" && (salary > 80000) && salary <= 85000) {
            this.setState({ payment: "$700" })
        }
        //if salary between 85000 & 90000
        if (status === "single" && (salary > 85000) && salary <= 90000) {
            this.setState({ payment: "$450" })
        }
        //if salary between 95000 & 99000
        if (status === "single" && (salary > 95000) && (salary < 99000)) {
            this.setState({ payment: "$200" })
        }
        // for salary abouve 99000
        else if (status === "single" && (salary >= 99000)) {
            this.setState({ payment: "$0" })
        }
        if (status === 'head' && salary < 112500) {
            this.setState({ payment: "$1,700" })
        }
        if (status === 'head' && (salary > 112500) && salary <= 117500) {
            this.setState({ payment: "$1,450" })
        }
        if (status === 'head' && (salary > 117500) && salary <= 122500) {
            this.setState({ payment: "$1,200" })
        }
        if (status === 'head' && (salary > 122500) && salary <= 127500) {
            this.setState({ payment: "$950" })
        }
        if (status === 'head' && (salary > 122500) && salary <= 127500) {
            this.setState({ payment: "$950" })
        }
        if (status === 'head' && (salary > 127500) && salary <= 132500) {
            this.setState({ payment: "$700" })
        }
        if (status === 'head' && (salary > 132500) && salary <= 142500) {
            this.setState({ payment: "$200" })
        }
        else if (status === 'head' && (salary >= 146500)) {
            this.setState({ payment: "$0" })

        }

        if (status === 'married' && salary < 150000) {
            this.setState({ payment: "$2,400" })


        }


        if (status === 'married' && (salary > 150000) && salary <= 160000) {
            this.setState({ payment: "$1,900" })
        }

        if (status === 'married' && (salary > 160000) && salary <= 170000) {
            this.setState({ payment: "$1,400" })
        }

        if (status === 'married' && (salary > 170000) && salary <= 180000) {
            this.setState({ payment: "$900" })
        }

        if (status === 'married' && (salary > 180000) && (salary <= 190000)) {
            this.setState({ payment: "$400" })
        }
        else if (status === 'married' && (salary >= 198000)) {
            this.setState({ payment: "$0" })

        }
    

    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "baseline" }}>
                    <label>
                        <input
                            type="radio"
                            value="single"
                            checked={this.state.status === "single"}
                            onChange={this.onStatusChanged}
                        /> Single
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="married"
                            checked={this.state.status === "married"}
                            onChange={this.onStatusChanged}
                        /> Married
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="head"
                            checked={this.state.status === "head"}
                            onChange={this.onStatusChanged}
                        /> Head of Household
                    </label>
                    <div className="form-group">
                        <label htmlFor="income"><input name="income" type="number" onChange={this.handleChange} /> Adjusted Gross Income </label>
                    </div>

                    <input name="submit" type="submit" value="Submit" />
                </form>
               <p className="result" style={{display: "none"}}>
               With a filing status of {this.state.status}, and an estimated salary of {this.state.value} you should expect to see a stimulus payment of {this.state.payment}
                </p>
                <small>*Your information is not collected</small>
            </>
        )
    }
}