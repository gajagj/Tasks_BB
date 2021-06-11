import React from 'react';

class Task1 extends React.Component {
    constructor() {
        super();
        this.state = {
            brand: 0,
            noOfContact: 0,
            photoClarity: 0,
            noOfSubmission: 0,
            companyOrCollege: 0,
            average:0
        }
    }
    calculateAvg=(e)=> {
        e.preventDefault();
        let {brand,noOfContact,photoClarity,noOfSubmission,companyOrCollege} = this.state;
        let avg=0;
        if(brand && noOfContact && photoClarity && noOfSubmission && companyOrCollege){
            avg= (brand+noOfContact+photoClarity+noOfSubmission+companyOrCollege)/5;
        }
        this.setState({average: avg});
        
    }
    fieldOnchange=(e)=> {
        this.setState({ [e.target.name]: parseInt(e.target.value) });
      
    }
    render() {
        
        return (<div>
            <h1>Task1</h1>
            <form className="col-md-6 offset-3" onSubmit={this.calculateAvg}>
                <div className="form-group row">
                    <label>Phone Brand :</label>
                    <select name="brand" className="form-control" onChange={this.fieldOnchange} required>
                    <option value="">Select One</option>
                        <option value="5">Samsung</option>
                        <option value="3">Nokia</option>
                        <option value="3">Redmi</option>
                        <option value="2">Oppo</option>
                        <option value="1">Vivo</option>
                        <option value="4">One Plus</option>
                        <option value="1">Others</option>
                    </select>
                </div>
                <div className="form-group row">
                    <label>Number of Contact :</label>
                    <select name="noOfContact" className="form-control" onChange={this.fieldOnchange} required>
                    <option value="">Select One</option>
                        <option value="5">300+</option>
                        <option value="4">200-300</option>
                        <option value="3">150-200</option>
                        <option value="2">100-150</option>
                        <option value="1">0-100</option>
                    </select>
                </div>
                <div className="form-group row">
                    <label>Photo Clarity :</label>
                    <select name="photoClarity" className="form-control" onChange={this.fieldOnchange} required>
                    <option value="">Select One</option>
                        <option value="5">80-100</option>
                        <option value="4">60-80</option>
                        <option value="3">40-60</option>
                        <option value="2">20-40</option>
                        <option value="1">0-20</option>
                    </select>
                </div>
                <div className="form-group row">
                    <label>Number of Submission :</label>
                    <select name="noOfSubmission" className="form-control" onChange={this.fieldOnchange} required>
                    <option value="">Select One</option>
                        <option value="5">1</option>
                        <option value="4">2</option>
                        <option value="3">3</option>
                        <option value="2">4</option>
                        <option value="1">4+</option>
                    </select>
                </div>
                <div className="form-group row">
                    <label>Company/College :</label>
                    <select name="companyOrCollege" className="form-control" onChange={this.fieldOnchange} required>
                        <option value="">Select One</option>
                        <option value="5">Tyre1</option>
                        <option value="3">Tyre2</option>
                        <option value="2">Tyre3</option>
                        <option value="1">Unknown</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Calculate</button>
            </form>
        {this.state.average ? <div className="alert-success col-md-6 offset-3">Your average is Successfully Calculated as <span>{this.state.average}</span></div> : <div/>}
        </div>)
    }
}
export default Task1;