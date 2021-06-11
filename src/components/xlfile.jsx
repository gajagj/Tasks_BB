import React from 'react';
import LocationMap from './LocationMap';
import GenderPieChart from './GenderPieChart';
import XLSX from 'xlsx';
import ProfileBarChart from './ProfilebBarChart';

export default class XlFile extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      latlong: {},
      received: false,
      canvass: '',
      fileName: '',
      wholeData: [],
      variant: false
    }
  }

  handleClick = () => {
    let selectedFile = this.myRef.current.files[0]
    if (selectedFile) {
      let fileReader = new FileReader();
      fileReader.readAsBinaryString(selectedFile);
      fileReader.onload = (event) => {
        let data = event.target.result;
        let workbook = XLSX.read(data, { type: "binary" });
        workbook.SheetNames.forEach(sheet => {
          let rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
          this.setState({ wholeData: rowObject, received: true })
        })

      }
    }
  }


  render() {
    return (
      <div className="container"><br></br>
          <h1>Task4</h1>
        <div className="row">
          <input type="file" id="fileName" ref={this.myRef} className="form-control col-md-6" accept=".xls,.xlsx" />&nbsp;
          <button type="button" className="btn btn-primary" onClick={this.handleClick}>Fetch Details</button>
        </div>
        <div className="row col-md-12">
          {this.state.received && <LocationMap wholeData={this.state.wholeData} />}
        </div><br></br><br></br>
        <div className="row col-md-12">
          {this.state.received && <GenderPieChart wholeData={this.state.wholeData} />}
        </div>
        <div className="row col-md-12">
          {this.state.received && <ProfileBarChart wholeData={this.state.wholeData}/>}
        </div>
      </div>
    )
  }
}