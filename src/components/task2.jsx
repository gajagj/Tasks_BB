import React from 'react';

class Task2 extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            noOfStar: '',
            serverAndCustomer: {
                "server1": [],
                "server2": [],
                "server3": [], //sample customers
                "server4": [],
                "server5": [],
                "server6": [],
                "server7": [],
                "server8": [],
                "server9": [],
                "server10": [],
            },
            resultCustomerArray: []
        }
    }

    displayCustomers = () => {
        let maxi = this.state.serverAndCustomer.server1.length;
        for (let i = 1; i <= 10; i++) {
            if (this.state.serverAndCustomer["server" + i].length > maxi) {
                maxi = this.state.serverAndCustomer["server" + i].length;
            }
        }
        let mainArray = [];
        for (let i = 0; i < maxi; i++) {
            let customerRow = [];
            for (let j = 1; j <= 10; j++) {
                if (i < this.state.serverAndCustomer["server" + j].length) {
                    let value = this.state.serverAndCustomer["server" + j]
                    customerRow.push(<td>{value[i]}</td>)
                } else {
                    customerRow.push(<td></td>)
                }
            }
            mainArray.push(<tr key={i}>{customerRow}</tr>);
        }
        this.setState({ resultCustomerArray: mainArray });
    }

    serverTable = () => {
        let servers = [];
        for (let i = 1; i <= 10; i++) {
            servers.push(<th key={i}> Server {i}</th>)
        }
        return servers;
    }
    fieldOnchange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }
    onFormSubmit = (e) => {
        e.preventDefault();
        let { name, noOfStar } = this.state;
        const serverRating = parseInt(noOfStar) * 2 - 1;
        let min = this.state.serverAndCustomer["server" + serverRating].length;
        let tempAnswer = serverRating
        for (let i = serverRating; i <= 10; i++) {
            let serverStr = "server" + i;
            if (this.state.serverAndCustomer[serverStr].length < min) {
                min = this.state.serverAndCustomer[serverStr].length;
                tempAnswer = i;
            }
        }
        this.state.serverAndCustomer["server" + tempAnswer].push(name);
        this.displayCustomers();
    }
    render() {
        return (
            <div className="container">
                <h1>Task2</h1>
                <form className="col-md-4" onSubmit={this.onFormSubmit}>
                    <div className="form-group row">
                        <label>Customer Name : </label>
                        <input name="name" type="text" onChange={this.fieldOnchange} required className="form-control" />
                    </div>
                    <div className="form-group row">
                        <label>Number of Star : </label>
                        <select name="noOfStar" className="form-control" onChange={this.fieldOnchange} required>
                            <option value="">Select One</option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary row">Submit</button>
                </form><br></br>
                <table className="table table-bordered">
                    <thead><tr>{this.serverTable()}</tr></thead>
                    <tbody>{this.state.resultCustomerArray}</tbody>
                </table>
            </div>
        )
    }
}
export default Task2;